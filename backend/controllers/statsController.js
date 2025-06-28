const admin = require("../config/firebaseAdmin");
const Book = require("../models/Book");
const Course = require("../models/Course");

exports.getDashboardStats = async (req, res) => {
  try {
    // Users count from Firebase
    const listUsers = await admin.auth().listUsers();
    const usersCount = listUsers.users.length;

    // Books and Courses count from MongoDB
    const booksCount = await Book.countDocuments();
    const coursesCount = await Course.countDocuments();

    res.json({ usersCount, booksCount, coursesCount });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};
