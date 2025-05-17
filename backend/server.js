const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Konfigurasi environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Route test
app.get('/api/test', (req, res) => {
  res.json({ message: 'Backend berjalan dengan baik!' });
});

// Start server
app.listen(port, () => {
  console.log(`Server berjalan di port ${port}`);
}); 