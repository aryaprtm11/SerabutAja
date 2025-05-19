const express = require('express');
const router = express.Router();
const db = require('../config/database');

// Get worker profile with stats
router.get('/profile', async (req, res) => {
  try {
    // Get worker profile
    const [worker] = await db.query(
      'SELECT id, name, email, phone, address, role FROM users WHERE id = ? AND role = "worker"',
      [req.user.id]
    );

    if (worker.length === 0) {
      return res.status(404).json({ message: 'Worker tidak ditemukan' });
    }

    // Get worker stats
    const [stats] = await db.query(
      `SELECT 
        COUNT(CASE WHEN status = 'in_progress' THEN 1 END) as active_jobs,
        COUNT(CASE WHEN status = 'completed' THEN 1 END) as completed_jobs,
        SUM(CASE WHEN status = 'completed' THEN total_price ELSE 0 END) as total_earnings,
        AVG(r.rating) as average_rating
       FROM orders o
       LEFT JOIN reviews r ON o.id = r.order_id
       WHERE o.worker_id = ?`,
      [req.user.id]
    );

    res.json({
      ...worker[0],
      stats: stats[0]
    });
  } catch (error) {
    console.error('Error in get worker profile:', error);
    res.status(500).json({ message: 'Terjadi kesalahan server' });
  }
});

// Get worker's jobs
router.get('/jobs', async (req, res) => {
  try {
    const [jobs] = await db.query(
      `SELECT o.*, s.name as service_name, u.name as customer_name,
              u.phone as customer_phone
       FROM orders o 
       JOIN services s ON o.service_id = s.id 
       JOIN users u ON o.user_id = u.id 
       WHERE o.worker_id = ?
       ORDER BY 
         CASE o.status
           WHEN 'in_progress' THEN 1
           WHEN 'pending' THEN 2
           ELSE 3
         END,
         o.created_at DESC`,
      [req.user.id]
    );

    res.json(jobs);
  } catch (error) {
    console.error('Error in get jobs:', error);
    res.status(500).json({ message: 'Terjadi kesalahan server' });
  }
});

// Update job status
router.put('/jobs/:orderId/status', async (req, res) => {
  try {
    const { status } = req.body;
    const { orderId } = req.params;

    // Verify worker owns this job
    const [order] = await db.query(
      'SELECT * FROM orders WHERE id = ? AND worker_id = ?',
      [orderId, req.user.id]
    );

    if (order.length === 0) {
      return res.status(404).json({ message: 'Order tidak ditemukan' });
    }

    // Update status
    await db.query(
      'UPDATE orders SET status = ? WHERE id = ?',
      [status, orderId]
    );

    res.json({ message: 'Status berhasil diupdate' });
  } catch (error) {
    console.error('Error in update job status:', error);
    res.status(500).json({ message: 'Terjadi kesalahan server' });
  }
});

module.exports = router; 