// SSLCommerz service utility for payment session creation
const axios = require('axios');

async function initiatePayment(postData) {
  try {
    const response = await axios.post(
      'https://sandbox.sslcommerz.com/gwprocess/v3/api.php',
      postData
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}

module.exports = { initiatePayment };
