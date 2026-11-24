const express = require('express');
const { v4: uuidv4 } = require('uuid');
const pool = require('../config/db');
const { authenticateToken } = require('../middleware/auth');

const router = express.Router();

// Create order from cart
router.post('/', authenticateToken, async (req, res) => {
  const connection = await pool.getConnection();

  try {
    await connection.beginTransaction();

    // Get cart items
    const [cartItems] = await connection.query(
      `SELECT ci.game_id, ci.quantity, g.title, g.price
       FROM cart_items ci
       JOIN games g ON ci.game_id = g.id
       WHERE ci.user_id = ? AND g.is_active = 1`,
      [req.user.id]
    );

    if (cartItems.length === 0) {
      await connection.rollback();
      return res.status(400).json({
        success: false,
        message: 'Your cart is empty.'
      });
    }

    const totalAmount = cartItems.reduce(
      (sum, item) => sum + (item.price * item.quantity),
      0
    );

    const orderNumber = 'GV-' + uuidv4().split('-')[0].toUpperCase();

    // Create order
    const [orderResult] = await connection.query(
      `INSERT INTO orders (user_id, order_number, total_amount, status)
       VALUES (?, ?, ?, 'completed')`,
      [req.user.id, orderNumber, totalAmount]
    );

    const orderId = orderResult.insertId;

    // Create order items
    for (const item of cartItems) {
      const subtotal = item.price * item.quantity;
      await connection.query(
        `INSERT INTO order_items (order_id, game_id, quantity, unit_price, subtotal)
         VALUES (?, ?, ?, ?, ?)`,
        [orderId, item.game_id, item.quantity, item.price, subtotal]
      );
    }

    // Clear cart
    await connection.query(
      'DELETE FROM cart_items WHERE user_id = ?',
      [req.user.id]
    );

    await connection.commit();

    res.status(201).json({
      success: true,
      message: 'Order placed successfully!',
      order: {
        id: orderId,
        orderNumber,
        totalAmount: Number(totalAmount.toFixed(2)),
        items: cartItems.map(item => ({
          title: item.title,
          quantity: item.quantity,
          price: item.price
        }))
      }
    });
  } catch (error) {
    await connection.rollback();
    console.error('Create order error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to place order.'
    });
  } finally {
    connection.release();
  }
});

// Get user's orders
router.get('/', authenticateToken, async (req, res) => {
  try {
    const [orders] = await pool.query(
      `SELECT id, order_number, total_amount, status, created_at
       FROM orders
       WHERE user_id = ?
       ORDER BY created_at DESC`,
      [req.user.id]
    );

    res.json({
      success: true,
      orders
    });
  } catch (error) {
    console.error('Get orders error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch orders.'
    });
  }
});

// Get single order details
router.get('/:id', authenticateToken, async (req, res) => {
  try {
    const [orders] = await pool.query(
      `SELECT id, order_number, total_amount, status, created_at
       FROM orders
       WHERE id = ? AND user_id = ?`,
      [req.params.id, req.user.id]
    );

    if (orders.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'Order not found.'
      });
    }

    const [items] = await pool.query(
      `SELECT oi.quantity, oi.unit_price, oi.subtotal, g.title, g.genre
       FROM order_items oi
       JOIN games g ON oi.game_id = g.id
       WHERE oi.order_id = ?`,
      [req.params.id]
    );

    res.json({
      success: true,
      order: {
        ...orders[0],
        items
      }
    });
  } catch (error) {
    console.error('Get order error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch order.'
    });
  }
});

module.exports = router;