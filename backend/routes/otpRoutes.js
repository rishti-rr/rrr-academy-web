// backend/routes/otpRoutes.js
const express = require('express');
const router = express.Router();
const { sendOTP } = require('../twilioService');

const otpStore = new Map(); // In-memory OTP store (for demo)

router.post('/send-otp', async (req, res) => {
  const { phone } = req.body;
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  otpStore.set(phone, otp);

  try {
    await sendOTP(phone, otp);
    res.status(200).json({ success: true, message: 'OTP sent!' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to send OTP', error });
  }
});

router.post('/verify-otp', (req, res) => {
  const { phone, otp } = req.body;
  const storedOtp = otpStore.get(phone);

  if (storedOtp === otp) {
    otpStore.delete(phone);
    res.status(200).json({ success: true, message: 'OTP verified' });
  } else {
    res.status(400).json({ success: false, message: 'Invalid OTP' });
  }
});

module.exports = router;
