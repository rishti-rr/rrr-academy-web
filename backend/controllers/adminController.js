const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Course = require('../models/Course');
const Book = require('../models/Book');

// Admin login (simple password-based)
exports.login = async (req, res) => {
  const { username, password } = req.body;
  if (username === 'admin' && password === 'adminpassword') {
    const token = jwt.sign({ username: 'admin' }, 'secretkey', { expiresIn: '1h' });
    return res.json({ token });
  }
  res.status(400).json({ error: 'Invalid credentials' });
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
