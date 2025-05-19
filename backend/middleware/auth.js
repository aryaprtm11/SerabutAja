const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ message: 'Token tidak ditemukan' });
  }

  const token = authHeader.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'Format token tidak valid' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Token tidak valid' });
  }
};

const verifyAdmin = (req, res, next) => {
  if (req.user && req.user.role === 'admin') {
    next();
  } else {
    res.status(403).json({ message: 'Akses ditolak' });
  }
};

const verifyWorker = (req, res, next) => {
  if (req.user && (req.user.role === 'worker' || req.user.role === 'admin')) {
    next();
  } else {
    res.status(403).json({ message: 'Akses ditolak' });
  }
};

module.exports = {
  verifyToken,
  verifyAdmin,
  verifyWorker
}; 