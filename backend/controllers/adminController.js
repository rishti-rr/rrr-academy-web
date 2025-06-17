const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Course = require('../models/Course');
const Book = require('../models/Book');
const Admin = require('../models/Admin');
const User = require('../models/User');

const generateToken = (id, role) => {
  return jwt.sign({ id, role }, process.env.JWT_SECRET, {
    expiresIn: '2h',
  });
};

// Admin Login
exports.loginAdmin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const admin = await Admin.findOne({ email });
    if (admin && await admin.matchPassword(password)) {
      res.status(200).json({
        _id: admin._id,
        email: admin.email,
        token: generateToken(admin._id, admin.role)
      });
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

// Dashboard Data
exports.getDashboardData = async (req, res) => {
  try {
    res.json({
      courses: 10,
      books: 20,
      users: 5
    });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

// Add course
exports.addCourse = async (req, res) => {
  try {
    const { title, description, author } = req.body;
    const newCourse = new Course({ title, description, author });
    await newCourse.save();
    res.status(201).json({ message: 'Course added successfully!' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to add course' });
  }
};

// Add book
exports.addBook = async (req, res) => {
  try {
    const { title, author, rating, img } = req.body;
    const newBook = new Book({ title, author, rating, img });
    await newBook.save();
    res.status(201).json({ message: 'Book added successfully!' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to add book' });
  }
};

// Delete course
exports.deleteCourse = async (req, res) => {
  try {
    await Course.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Course deleted successfully!' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete course' });
  }
};

// Delete book
exports.deleteBook = async (req, res) => {
  try {
    await Book.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Book deleted successfully!' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete book' });
  }
};
