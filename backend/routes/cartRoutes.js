const express = require("express");
const router = express.Router();
const Cart = require("../models/Cart");

// 🔒 Middleware to check if user is logged in (optional)
const verifyUser = (req, res, next) => {
  if (!req.headers.userid) {
    return res.status(401).json({ message: "User not logged in" });
  }
  req.userId = req.headers.userid;
  next();
};

// ✅ GET user's cart
router.get("/", verifyUser, async (req, res) => {
  const cart = await Cart.findOne({ userId: req.userId });
  res.json(cart ? cart.items : []);
});

// ✅ ADD item to cart
router.post("/add", verifyUser, async (req, res) => {
  const { item } = req.body;
  let cart = await Cart.findOne({ userId: req.userId });

  if (!cart) {
    cart = new Cart({ userId: req.userId, items: [item] });
  } else {
    cart.items.push(item);
  }

  await cart.save();
  res.json(cart.items);
});

// ✅ DELETE item from cart
router.post("/remove", verifyUser, async (req, res) => {
  const { itemId } = req.body;
  const cart = await Cart.findOne({ userId: req.userId });

  if (cart) {
    cart.items = cart.items.filter((item) => item._id !== itemId);
    await cart.save();
  }

  res.json(cart.items);
});


module.exports = router;
