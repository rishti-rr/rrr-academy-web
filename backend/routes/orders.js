const express = require('express');
const Order = require('../models/Order');
const { sendReceiptEmail } = require('../utils/email');

const router = express.Router();

router.post('/', async (req, res) => {
    console.log("Received an order POST request with body:", req.body);
  try {
    const { userId, userEmail, userName, mobileNumber, paymentMethod, items, total } = req.body;

    const order = new Order({
      userId,
      userEmail,
      userName,
      mobileNumber,
      paymentMethod: paymentMethod || 'Bkash/Nagad',
      items,
      total
    });

    await order.save();

    sendReceiptEmail(userEmail, items, total, order._id)
      .catch(console.error);

    res.status(201).json(order);
  } catch (err) {
  console.log("Inside order error catch block");  
  console.error(" Order Error:", err);
  res.status(500).json({ error: "Order creation failed" });
}
});

module.exports = router;
