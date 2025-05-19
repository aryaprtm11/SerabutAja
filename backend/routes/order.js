const express = require('express');
const router = express.Router();
const db = require('../config/database');

// Create new order
router.post('/', async (req, res) => {
  try {
    const { 
      service_id, 
      schedule_date, 
      schedule_time,
      address,
      notes
    } = req.body;

    // Get service price
    const [service] = await db.query(
      'SELECT price FROM services WHERE id = ?',
      [service_id]
    );

    if (service.length === 0) {
      return res.status(404).json({ message: 'Layanan tidak ditemukan' });
    }

    // Find available worker
    const [workers] = await db.query(
      `SELECT ws.worker_id 
       FROM worker_services ws
       WHERE ws.service_id = ? AND ws.is_available = true
       LIMIT 1`,
      [service_id]
    );

    const worker_id = workers.length > 0 ? workers[0].worker_id : null;

    // Create order
    const [result] = await db.query(
      `INSERT INTO orders (
        user_id, worker_id, service_id, schedule_date,
        schedule_time, address, notes, total_price
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        req.user.id,
        worker_id,
        service_id,
        schedule_date,
        schedule_time,
        address,
        notes,
        service[0].price
      ]
    );

    res.status(201).json({ 
      message: 'Order berhasil dibuat',
      order_id: result.insertId
    });
  } catch (error) {
    console.error('Error in create order:', error);
    res.status(500).json({ message: 'Terjadi kesalahan server' });
  }
});

// Get order details
router.get('/:orderId', async (req, res) => {
  try {
    const { orderId } = req.params;

    const [orders] = await db.query(
      `SELECT o.*, s.name as service_name, 
              u.name as worker_name, u.phone as worker_phone
       FROM orders o
       JOIN services s ON o.service_id = s.id
       LEFT JOIN users u ON o.worker_id = u.id
       WHERE o.id = ? AND o.user_id = ?`,
      [orderId, req.user.id]
    );

    if (orders.length === 0) {
      return res.status(404).json({ message: 'Order tidak ditemukan' });
    }

    res.json(orders[0]);
  } catch (error) {
    console.error('Error in get order:', error);
    res.status(500).json({ message: 'Terjadi kesalahan server' });
  }
});

// Cancel order
router.put('/:orderId/cancel', async (req, res) => {
  try {
    const { orderId } = req.params;

    // Verify order belongs to user
    const [order] = await db.query(
      'SELECT status FROM orders WHERE id = ? AND user_id = ?',
      [orderId, req.user.id]
    );

    if (order.length === 0) {
      return res.status(404).json({ message: 'Order tidak ditemukan' });
    }

    if (order[0].status !== 'pending') {
      return res.status(400).json({ 
        message: 'Hanya order dengan status pending yang dapat dibatalkan' 
      });
    }

    await db.query(
      'UPDATE orders SET status = "cancelled" WHERE id = ?',
      [orderId]
    );

    res.json({ message: 'Order berhasil dibatalkan' });
  } catch (error) {
    console.error('Error in cancel order:', error);
    res.status(500).json({ message: 'Terjadi kesalahan server' });
  }
});

// Add review
router.post('/:orderId/review', async (req, res) => {
  try {
    const { orderId } = req.params;
    const { rating, comment } = req.body;

    // Verify order belongs to user and is completed
    const [order] = await db.query(
      'SELECT worker_id FROM orders WHERE id = ? AND user_id = ? AND status = "completed"',
      [orderId, req.user.id]
    );

    if (order.length === 0) {
      return res.status(404).json({ 
        message: 'Order tidak ditemukan atau belum selesai' 
      });
    }

    // Check if review already exists
    const [existingReview] = await db.query(
      'SELECT id FROM reviews WHERE order_id = ?',
      [orderId]
    );

    if (existingReview.length > 0) {
      return res.status(400).json({ 
        message: 'Review sudah diberikan untuk order ini' 
      });
    }

    // Add review
    await db.query(
      `INSERT INTO reviews (
        order_id, user_id, worker_id, rating, comment
      ) VALUES (?, ?, ?, ?, ?)`,
      [orderId, req.user.id, order[0].worker_id, rating, comment]
    );

    res.status(201).json({ message: 'Review berhasil ditambahkan' });
  } catch (error) {
    console.error('Error in add review:', error);
    res.status(500).json({ message: 'Terjadi kesalahan server' });
  }
});

module.exports = router; 