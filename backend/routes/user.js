const express = require('express');
const router = express.Router();
const db = require('../config/database');

// Get user profile
router.get('/profile', async (req, res) => {
  try {
    const [user] = await db.query(
      'SELECT id, name, email, phone, address, role FROM users WHERE id = ?',
      [req.user.id]
    );

    if (user.length === 0) {
      return res.status(404).json({ message: 'User tidak ditemukan' });
    }

    res.json(user[0]);
  } catch (error) {
    console.error('Error in get profile:', error);
    res.status(500).json({ message: 'Terjadi kesalahan server' });
  }
});

// Update user profile
router.put('/profile', async (req, res) => {
  try {
    const { name, phone, address } = req.body;
    
    await db.query(
      'UPDATE users SET name = ?, phone = ?, address = ? WHERE id = ?',
      [name, phone, address, req.user.id]
    );

    res.json({ message: 'Profile berhasil diupdate' });
  } catch (error) {
    console.error('Error in update profile:', error);
    res.status(500).json({ message: 'Terjadi kesalahan server' });
  }
});

// Get user orders
router.get('/orders', async (req, res) => {
  try {
    const [orders] = await db.query(
      `SELECT o.*, s.name as service_name, u.name as worker_name 
       FROM orders o 
       LEFT JOIN services s ON o.service_id = s.id 
       LEFT JOIN users u ON o.worker_id = u.id 
       WHERE o.user_id = ?
       ORDER BY o.created_at DESC`,
      [req.user.id]
    );

    res.json(orders);
  } catch (error) {
    console.error('Error in get orders:', error);
    res.status(500).json({ message: 'Terjadi kesalahan server' });
  }
});

module.exports = router; 