// const express = require("express");
// const router = express.Router();
// const User = require("../models/User");
// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcryptjs");

// // Auto register/login route
// router.post("/login", async (req, res) => {
//   const { name, email, password } = req.body;

//   try {
//     let user = await User.findOne({ email });

//     if (user) {
//       const isMatch = await bcrypt.compare(password, user.password);
//       if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });
//     } else {
//       user = new User({ name, email, password });
//       await user.save(); // Auto insert user to MongoDB
//     }

//     const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "2h" });

//     res.status(200).json({ token, user: { id: user._id, name: user.name, role: user.role } });
//   } catch (error) {
//     console.error("Login Error:", error);
//     res.status(500).json({ message: "Server error" });
//   }
// });

// module.exports = router;



const express = require("express");
const router = express.Router();
const admin = require("../config/firebaseAdmin");

router.get("/", async (req, res) => {
  try {
    const listUsers = await admin.auth().listUsers();
    const users = listUsers.users.map(u => ({
      uid: u.uid,
      email: u.email,
      name: u.displayName || "N/A",
      provider: u.providerData[0]?.providerId || "password",
      createdAt: u.metadata.creationTime
    }));
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
