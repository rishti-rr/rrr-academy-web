const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Course = require("../models/Course");
const Book = require("../models/Book");
const { verifyAdmin } = require("../middleware/authMiddleware"); // protect the route

// Admin-only stats endpoint
router.get("/dashboard-stats", verifyAdmin, async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();
    const totalCourses = await Course.countDocuments();
    const totalBooks = await Book.countDocuments();

    res.status(200).json({ totalUsers, totalCourses, totalBooks });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch dashboard stats" });
  }
});

module.exports = router;
