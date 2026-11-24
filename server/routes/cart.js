const express = require('express');
const pool = require('../config/db');
const { authenticateToken } = require('../middleware/auth');

const router = express.Router();

// Get current user's cart
router.get('/', authenticateToken, async (req, res) => {
  try {
    const [items] = await pool.query(
      `SELECT ci.id, ci.quantity, ci.added_at,
              g.id AS game_id, g.title, g.price, g.genre, g.image_url
       FROM cart_items ci
       JOIN games g ON ci.game_id = g.id
       WHERE ci.user_id = ? AND g.is_active = 1
       ORDER BY ci.added_at DESC`,
      [req.user.id]
    );

    const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    res.json({
      success: true,
      items,
      total: Number(total.toFixed(2)),
      count: items.reduce((sum, item) => sum + item.quantity, 0)
    });
  } catch (error) {
    console.error('Get cart error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch cart.'
    });
  }
});

// Add item to cart
router.post('/', authenticateToken, async (req, res) => {
  try {
    const { gameId, quantity = 1 } = req.body;

    if (!gameId) {
      return res.status(400).json({
        success: false,
        message: 'Game ID is required.'
      });
    }

    // Check game exists
    const [games] = await pool.query(
      'SELECT id, title, price FROM games WHERE id = ? AND is_active = 1',
      [gameId]
    );

    if (games.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'Game not found.'
      });
    }

    // Check if already in cart
    const [existing] = await pool.query(
      'SELECT id, quantity FROM cart_items WHERE user_id = ? AND game_id = ?',
      [req.user.id, gameId]
    );

    if (existing.length > 0) {
      await pool.query(
        'UPDATE cart_items SET quantity = quantity + ? WHERE id = ?',
        [quantity, existing[0].id]
      );
    } else {
      await pool.query(
        'INSERT INTO cart_items (user_id, game_id, quantity) VALUES (?, ?, ?)',
        [req.user.id, gameId, quantity]
      );
    }

    res.status(201).json({
      success: true,
      message: `${games[0].title} added to cart.`
    });
  } catch (error) {
    console.error('Add to cart error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to add item to cart.'
    });
  }
});

// Update quantity
router.put('/:gameId', authenticateToken, async (req, res) => {
  try {
    const { gameId } = req.params;
    const { quantity } = req.body;

    if (quantity === undefined || quantity < 0) {
      return res.status(400).json({
        success: false,
        message: 'Valid quantity is required.'
      });
    }

    if (quantity === 0) {
      await pool.query(
        'DELETE FROM cart_items WHERE user_id = ? AND game_id = ?',
        [req.user.id, gameId]
      );
      return res.json({
        success: true,
        message: 'Item removed from cart.'
      });
    }

    const [result] = await pool.query(
      'UPDATE cart_items SET quantity = ? WHERE user_id = ? AND game_id = ?',
      [quantity, req.user.id, gameId]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({
        success: false,
        message: 'Item not found in cart.'
      });
    }

    res.json({
      success: true,
      message: 'Cart updated.'
    });
  } catch (error) {
    console.error('Update cart error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to update cart.'
    });
  }
});

// Remove item
router.delete('/:gameId', authenticateToken, async (req, res) => {
  try {
    const { gameId } = req.params;

    const [result] = await pool.query(
      'DELETE FROM cart_items WHERE user_id = ? AND game_id = ?',
      [req.user.id, gameId]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({
        success: false,
        message: 'Item not found in cart.'
      });
    }

    res.json({
      success: true,
      message: 'Item removed from cart.'
    });
  } catch (error) {
    console.error('Remove from cart error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to remove item.'
    });
  }
});

// Clear cart
router.delete('/', authenticateToken, async (req, res) => {
  try {
    await pool.query('DELETE FROM cart_items WHERE user_id = ?', [req.user.id]);

    res.json({
      success: true,
      message: 'Cart cleared.'
    });
  } catch (error) {
    console.error('Clear cart error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to clear cart.'
    });
  }
});

module.exports = router;