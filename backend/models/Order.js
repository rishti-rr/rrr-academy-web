
const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  userId: String,
  userEmail: String,
  userName: String,
  mobileNumber: String,
  paymentMethod: { type: String, default: "Bkash/Nagad" },
  items: [
    {
      _id: String,
      type: String,
      title: String,
      price: Number,
    }
  ],
  total: Number,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Order', orderSchema);
