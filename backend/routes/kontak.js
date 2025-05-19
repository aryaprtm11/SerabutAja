const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { nama, email, telepon, pesan, layanan } = req.body;

    // TODO: Implement email sending or database storage
    console.log('Pesan kontak diterima:', {
      nama,
      email,
      telepon,
      pesan,
      layanan
    });

    // Untuk sementara hanya mengembalikan response sukses
    res.status(200).json({
      success: true,
      message: 'Pesan berhasil dikirim'
    });
  } catch (error) {
    console.error('Error saat memproses pesan kontak:', error);
    res.status(500).json({
      success: false,
      message: 'Terjadi kesalahan saat memproses pesan'
    });
  }
});

module.exports = router; 