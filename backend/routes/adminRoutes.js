// routes/adminRoutes.js
const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const authMiddleware = require('../middleware/authMiddleware');

// Admin login route
router.post('/login', adminController.login);

// CRUD routes for courses and books (admin protected routes)
router.post('/add-course', authMiddleware, adminController.addCourse);
router.post('/add-book', authMiddleware, adminController.addBook);
router.delete('/delete-course/:id', authMiddleware, adminController.deleteCourse);
router.delete('/delete-book/:id', authMiddleware, adminController.deleteBook);

module.exports = router;

