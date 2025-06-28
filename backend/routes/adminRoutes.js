// const express = require('express');
// const router = express.Router();
// const {
//   loginAdmin,
//   getDashboardData,
//   addCourse,
//   addBook,
//   deleteCourse,
//   deleteBook
// } = require('../controllers/adminController');

// const { verifyAdmin } = require('../middleware/authMiddleware');
// const User = require("../models/User");
// const Course = require("../models/Course");
// const Book = require("../models/Book");

// // Admin login
// router.post('/login', loginAdmin);

// // Public dashboard info
// router.get('/dashboard', getDashboardData);

// // Dashboard stats (protected)
// router.get("/dashboard-stats", verifyAdmin, async (req, res) => {
//   try {
//     const usersCount = await User.countDocuments();
//     const coursesCount = await Course.countDocuments();
//     const booksCount = await Book.countDocuments();

//     res.status(200).json({ usersCount, coursesCount, booksCount });
//   } catch (error) {
//     res.status(500).json({ message: "Failed to fetch dashboard stats" });
//   }
// });

// // Admin-only operations
// router.post('/add-course', verifyAdmin, addCourse);
// router.post('/add-book', verifyAdmin, addBook);
// router.delete('/delete-course/:id', verifyAdmin, deleteCourse);
// router.delete('/delete-book/:id', verifyAdmin, deleteBook);

// module.exports = router;



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
