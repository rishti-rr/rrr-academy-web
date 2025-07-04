const express = require('express');
const router = express.Router();
const SslCommerzPayment = require('../sslcommerz/SslCommerzPayment');

// POST /api/sslcommerz/initiate
router.post('/initiate', async (req, res) => {
  const { amount, email, name, phone } = req.body;
  const payment = new SslCommerzPayment(
    "rrrac6860de3de05e1",
    "rrrac6860de3de05e1@ssl",
    false // sandbox mode
  );
  const postData = {
    total_amount: Number(amount),
    currency: "BDT",
    tran_id: "RRR" + Date.now(),
    success_url: "http://ug2002032.cse.pstu.ac.bd/payment-success",
    fail_url: "http://ug2002032.cse.pstu.ac.bd/payment-fail",
    cancel_url: "http://ug2002032.cse.pstu.ac.bd/payment-cancel",
    cus_name: name || "Customer",
    cus_email: email,
    cus_add1: "PSTU, Dumki, Patuakhali",
    cus_phone: phone || "01700000000",
    shipping_method: "NO",
    product_name: "Test",
    product_category: "Test",
    product_profile: "general"
  };
  console.log('SSLCommerz postData:', postData);
  try {
    const response = await payment.init(postData);
    console.log("SSLCommerz response:", response);
    if (response && response.GatewayPageURL) {
      res.json({ GatewayPageURL: response.GatewayPageURL });
    } else {
      console.error("No GatewayPageURL in response:", response);
      res.status(500).json({ error: "No GatewayPageURL returned from SSLCommerz", details: response });
    }
  } catch (err) {
    console.error("SSLCommerz session creation failed:", err);
    res.status(500).json({ error: "SSLCommerz session creation failed", details: err.message });
  }
});

module.exports = router;
