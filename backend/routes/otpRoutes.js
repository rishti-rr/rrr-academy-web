// backend/routes/otpRoutes.js
const express = require('express');
const router = express.Router();
const { sendOTP } = require('../twilioService');
const verifyRecaptcha = require('../utils/verifyRecaptcha');

const otpStore = new Map(); 

router.post('/send-otp', async (req, res) => {
  const { phone, recaptchaToken } = req.body;
  // reCAPTCHA verification
  if (!recaptchaToken) {
    return res.status(400).json({ success: false, message: 'reCAPTCHA token missing' });
  }
  const recaptchaOk = await verifyRecaptcha(recaptchaToken);
  if (!recaptchaOk) {
    return res.status(400).json({ success: false, message: 'reCAPTCHA failed. Please try again.' });
  }
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
