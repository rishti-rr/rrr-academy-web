const express = require('express');
const router = express.Router();
const { initiatePayment } = require('../controllers/sslcommerzController');

router.post('/initiate', initiatePayment);

// Payment result routes
router.post('/success', (req, res) => {
  // Handle successful payment
  console.log('Payment Success:', req.body);
  res.redirect('http://localhost:5173/payment/success?status=success');
});

router.post('/fail', (req, res) => {
  // Handle failed payment
  console.log('Payment Failed:', req.body);
  res.redirect('http://localhost:5173/payment/fail?status=failed');
});

router.post('/cancel', (req, res) => {
  // Handle cancelled payment
  console.log('Payment Cancelled:', req.body);
  res.redirect('http://localhost:5173/payment/cancel?status=cancelled');
});

router.post('/ipn', (req, res) => {
  // Handle IPN (Instant Payment Notification)
  console.log('Payment IPN:', req.body);
  res.status(200).send('OK');
});

module.exports = router;
