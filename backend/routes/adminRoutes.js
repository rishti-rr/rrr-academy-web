const express = require('express');
const router = express.Router();
const {
  loginAdmin,
  // getDashboardData,
  addCourse,
  addBook,
  deleteCourse,
  deleteBook,
  getDashboardStats, // Controller for stats
} = require('../controllers/adminController');

const { verifyAdmin } = require('../middleware/authMiddleware');
// const admin = require("../config/firebaseAdmin"); // Firebase admin SDK instance

// Admin login
router.post('/login', loginAdmin);

// Public dashboard info (optional)
// router.get('/dashboard', getDashboardData);

// Dashboard stats (protected)
router.get('/dashboard-stats', verifyAdmin, getDashboardStats);

// Admin-only CRUD
router.post('/add-course', verifyAdmin, addCourse);
router.post('/add-book', verifyAdmin, addBook);
router.delete('/delete-course/:id', verifyAdmin, deleteCourse);
router.delete('/delete-book/:id', verifyAdmin, deleteBook);

module.exports = router;
