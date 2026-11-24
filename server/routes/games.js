const express = require('express');
const pool = require('../config/db');

const router = express.Router();

// GET all games (with optional filters)
router.get('/', async (req, res) => {
  try {
    const { category, search, sort } = req.query;

    let sql = `
      SELECT g.id, g.title, g.slug, g.description, g.price, g.genre,
             g.size, g.developer, g.image_url, c.name AS category_name, c.slug AS category_slug
      FROM games g
      JOIN categories c ON g.category_id = c.id
      WHERE g.is_active = 1
    `;
    const params = [];

    if (category && category !== 'all') {
      sql += ` AND (c.name = ? OR c.slug = ?)`;
      params.push(category, category.toLowerCase());
    }

    if (search && search.trim()) {
      sql += ` AND (g.title LIKE ? OR g.genre LIKE ? OR g.description LIKE ?)`;
      const term = `%${search.trim()}%`;
      params.push(term, term, term);
    }

    switch (sort) {
      case 'price-low':
        sql += ` ORDER BY g.price ASC`;
        break;
      case 'price-high':
        sql += ` ORDER BY g.price DESC`;
        break;
      case 'name':
        sql += ` ORDER BY g.title ASC`;
        break;
      default:
        sql += ` ORDER BY g.id ASC`;
    }

    const [games] = await pool.query(sql, params);

    res.json({
      success: true,
      count: games.length,
      games
    });
  } catch (error) {
    console.error('Get games error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch games.'
    });
  }
});

// GET single game by ID or slug
router.get('/:idOrSlug', async (req, res) => {
  try {
    const { idOrSlug } = req.params;

    const isNumeric = /^\d+$/.test(idOrSlug);

    const [games] = await pool.query(
      `SELECT g.id, g.title, g.slug, g.description, g.price, g.genre,
              g.size, g.developer, g.image_url, c.name AS category_name
       FROM games g
       JOIN categories c ON g.category_id = c.id
       WHERE g.is_active = 1 AND ${isNumeric ? 'g.id = ?' : 'g.slug = ?'}`,
      [idOrSlug]
    );

    if (games.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'Game not found.'
      });
    }

    res.json({
      success: true,
      game: games[0]
    });
  } catch (error) {
    console.error('Get game error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch game.'
    });
  }
});

// GET categories
router.get('/meta/categories', async (req, res) => {
  try {
    const [categories] = await pool.query(
      'SELECT id, name, slug FROM categories ORDER BY name ASC'
    );

    res.json({
      success: true,
      categories
    });
  } catch (error) {
    console.error('Get categories error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch categories.'
    });
  }
});

module.exports = router;