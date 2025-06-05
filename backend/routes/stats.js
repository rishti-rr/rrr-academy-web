// routes/stats.js
const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Course = require("../models/Course");
const Book = require("../models/Book");

router.get("/dashboard-stats", async (req, res) => {
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
