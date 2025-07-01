// backend/utils/verifyRecaptcha.js
const axios = require('axios');

const verifyRecaptcha = async (token) => {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  if (!secret) throw new Error('reCAPTCHA secret key not set');
  const url = 'https://www.google.com/recaptcha/api/siteverify';
  try {
    const res = await axios.post(url, null, {
      params: {
        secret,
        response: token,
      },
    });
    return res.data.success;
  } catch (err) {
    return false;
  }
};

module.exports = verifyRecaptcha;
