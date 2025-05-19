const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Konfigurasi environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Import routes
const authRoute = require('./routes/auth');
const userRoute = require('./routes/user');
const workerRoute = require('./routes/worker');
const adminRoute = require('./routes/admin');
const orderRoute = require('./routes/order');

// Import middleware
const { verifyToken, verifyAdmin, verifyWorker } = require('./middleware/auth');

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoute);
app.use('/api/users', verifyToken, userRoute);
app.use('/api/workers', verifyToken, verifyWorker, workerRoute);
app.use('/api/admin', verifyToken, verifyAdmin, adminRoute);
app.use('/api/orders', verifyToken, orderRoute);

// Route test
app.get('/api/test', (req, res) => {
  res.json({ message: 'Backend berjalan dengan baik!' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Terjadi kesalahan server' });
});

// Start server
app.listen(port, () => {
  console.log(`Server berjalan di port ${port}`);
}); 