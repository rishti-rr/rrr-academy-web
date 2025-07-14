const axios = require('axios');

exports.initiatePayment = async (req, res) => {
  const { cart, total } = req.body;

  const store_id = process.env.SSLCOMMERZ_STORE_ID;
  const store_passwd = process.env.SSLCOMMERZ_STORE_PASSWORD;
  const is_live = process.env.SSLCOMMERZ_IS_LIVE === 'true';

  // SSLCommerz API endpoint (Live or Sandbox)
  const sslcz_session_url = is_live 
    ? 'https://securepay.sslcommerz.com/gwprocess/v3/api.php'
    : 'https://sandbox.sslcommerz.com/gwprocess/v3/api.php';

  const data = {
    store_id: store_id,
    store_passwd: store_passwd,
    total_amount: total,
    currency: 'BDT',
    tran_id: 'tran_' + Date.now(),
    success_url: 'http://localhost:5173/payment/success',
    fail_url: 'http://localhost:5173/payment/fail',
    cancel_url: 'http://localhost:5173/payment/cancel',
    ipn_url: 'http://localhost:5000/api/sslcommerz/ipn',
    product_category: 'Mixed',
    product_name: 'Online Purchase',
    product_profile: 'general',
    cus_name: 'Rishti Rahman Rafin',
    cus_email: 'rishti.rr.300102@gmail.com',
    cus_add1: 'Dhaka',
    cus_city: 'Dhaka',
    cus_state: 'Dhaka',
    cus_postcode: '1000',
    cus_country: 'Bangladesh',
    cus_phone: '01711111111',
    shipping_method: 'NO',
    ship_name: 'Rishti Rahman Rafin',
    ship_add1: 'Dhaka',
    ship_city: 'Dhaka',
    ship_state: 'Dhaka',
    ship_postcode: '1000',
    ship_country: 'Bangladesh',
  };

  try {
    const response = await axios.post(sslcz_session_url, data, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    if (response.data.status === 'SUCCESS') {
      return res.json({ 
        GatewayPageURL: response.data.GatewayPageURL,
        sessionkey: response.data.sessionkey 
      });
    } else {
      return res.status(400).json({ 
        error: 'Payment session creation failed', 
        details: response.data.failedreason || 'Unknown error' 
      });
    }
  } catch (err) {
    console.error('SSLCommerz payment initiation error:', err);
    return res.status(500).json({ 
      error: 'Payment session creation failed', 
      details: err.message 
    });
  }
};
