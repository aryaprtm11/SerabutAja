const express = require('express');
const router = express.Router();
const db = require('../config/database');

// Get admin dashboard stats
router.get('/stats', async (req, res) => {
  try {
    // Get total users by role
    const [userStats] = await db.query(
      `SELECT 
        COUNT(*) as total_users,
        COUNT(CASE WHEN role = 'worker' THEN 1 END) as total_workers,
        COUNT(CASE WHEN role = 'user' THEN 1 END) as total_customers
       FROM users`
    );

    // Get order stats
    const [orderStats] = await db.query(
      `SELECT 
        COUNT(*) as total_orders,
        COUNT(CASE WHEN status = 'completed' THEN 1 END) as completed_orders,
        COUNT(CASE WHEN status = 'in_progress' THEN 1 END) as active_orders,
        SUM(CASE WHEN status = 'completed' THEN total_price ELSE 0 END) as total_revenue
       FROM orders`
    );

    // Get average rating
    const [ratingStats] = await db.query(
      `SELECT AVG(rating) as average_rating FROM reviews`
    );

    res.json({
      users: userStats[0],
      orders: orderStats[0],
      rating: ratingStats[0]
    });
  } catch (error) {
    console.error('Error in get admin stats:', error);
    res.status(500).json({ message: 'Terjadi kesalahan server' });
  }
});

// Get all users
router.get('/users', async (req, res) => {
  try {
    const [users] = await db.query(
      `SELECT id, name, email, role, phone, address, created_at 
       FROM users 
       ORDER BY created_at DESC`
    );

    res.json(users);
  } catch (error) {
    console.error('Error in get users:', error);
    res.status(500).json({ message: 'Terjadi kesalahan server' });
  }
});

// Update user role
router.put('/users/:userId/role', async (req, res) => {
  try {
    const { role } = req.body;
    const { userId } = req.params;

    await db.query(
      'UPDATE users SET role = ? WHERE id = ?',
      [role, userId]
    );

    res.json({ message: 'Role berhasil diupdate' });
  } catch (error) {
    console.error('Error in update user role:', error);
    res.status(500).json({ message: 'Terjadi kesalahan server' });
  }
});

// Delete user
router.delete('/users/:userId', async (req, res) => {
  try {
    const { userId } = req.params;

    // Check if user has any orders
    const [orders] = await db.query(
      'SELECT id FROM orders WHERE user_id = ? OR worker_id = ? LIMIT 1',
      [userId, userId]
    );

    if (orders.length > 0) {
      return res.status(400).json({ 
        message: 'Tidak dapat menghapus user yang memiliki pesanan' 
      });
    }

    await db.query('DELETE FROM users WHERE id = ?', [userId]);

    res.json({ message: 'User berhasil dihapus' });
  } catch (error) {
    console.error('Error in delete user:', error);
    res.status(500).json({ message: 'Terjadi kesalahan server' });
  }
});

// Get all services
router.get('/services', async (req, res) => {
  try {
    const [services] = await db.query(
      'SELECT * FROM services ORDER BY created_at DESC'
    );

    res.json(services);
  } catch (error) {
    console.error('Error in get services:', error);
    res.status(500).json({ message: 'Terjadi kesalahan server' });
  }
});

// Add new service
router.post('/services', async (req, res) => {
  try {
    const { name, description, price, category, image_url } = req.body;

    await db.query(
      `INSERT INTO services (name, description, price, category, image_url) 
       VALUES (?, ?, ?, ?, ?)`,
      [name, description, price, category, image_url]
    );

    res.status(201).json({ message: 'Layanan berhasil ditambahkan' });
  } catch (error) {
    console.error('Error in add service:', error);
    res.status(500).json({ message: 'Terjadi kesalahan server' });
  }
});

// Update service
router.put('/services/:serviceId', async (req, res) => {
  try {
    const { name, description, price, category, image_url } = req.body;
    const { serviceId } = req.params;

    await db.query(
      `UPDATE services 
       SET name = ?, description = ?, price = ?, 
           category = ?, image_url = ?
       WHERE id = ?`,
      [name, description, price, category, image_url, serviceId]
    );

    res.json({ message: 'Layanan berhasil diupdate' });
  } catch (error) {
    console.error('Error in update service:', error);
    res.status(500).json({ message: 'Terjadi kesalahan server' });
  }
});

// Delete service
router.delete('/services/:serviceId', async (req, res) => {
  try {
    const { serviceId } = req.params;

    // Check if service has any orders
    const [orders] = await db.query(
      'SELECT id FROM orders WHERE service_id = ? LIMIT 1',
      [serviceId]
    );

    if (orders.length > 0) {
      return res.status(400).json({ 
        message: 'Tidak dapat menghapus layanan yang memiliki pesanan' 
      });
    }

    await db.query('DELETE FROM services WHERE id = ?', [serviceId]);

    res.json({ message: 'Layanan berhasil dihapus' });
  } catch (error) {
    console.error('Error in delete service:', error);
    res.status(500).json({ message: 'Terjadi kesalahan server' });
  }
});

module.exports = router; 