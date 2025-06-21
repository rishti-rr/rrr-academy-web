const mongoose = require("mongoose");

const cartItemSchema = new mongoose.Schema({
  _id: false,
  title: String,
  type: String,
  price: Number,
});

const cartSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  items: [cartItemSchema],
});

module.exports = mongoose.model("Cart", cartSchema);
