// // routes/adminRoutes.js
// const express = require('express');
// const router = express.Router();
// // const adminController = require('../controllers/adminController');
// const { loginAdmin, getDashboardData, addCourse, addBook, deleteCourse, deleteBook} = require('../controllers/adminController');
// const { verifyAdmin, authMiddleware} = require('../middleware/authMiddleware');
// const User = require("../models/User");
// const Course = require("../models/Course");
// const Book = require("../models/Book");

// // Admin login route
// // router.post('/login', adminController.login);
// router.post('/login', loginAdmin);
// router.get('/dashboard', getDashboardData); // Later add JWT middleware

// // Admin dashboard stats route
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

// // CRUD routes for courses and books (admin protected routes)
// // router.post('/add-course', authMiddleware, adminController.addCourse);
// // router.post('/add-book', authMiddleware, adminController.addBook);
// // router.delete('/delete-course/:id', authMiddleware, adminController.deleteCourse);
// // router.delete('/delete-book/:id', authMiddleware, adminController.deleteBook);



// // CRUD routes for courses and books (admin protected routes)
// router.post('/add-course', verifyAdmin, addCourse);
// router.post('/add-book', verifyAdmin, addBook);
// router.delete('/delete-course/:id', verifyAdmin, deleteCourse);
// router.delete('/delete-book/:id', verifyAdmin, deleteBook);

// module.exports = router;







const express = require('express');
const router = express.Router();

const {
  loginAdmin,
  getDashboardData,
  addCourse,
  addBook,
  deleteCourse,
  deleteBook
} = require('../controllers/adminController');

const { verifyAdmin } = require('../middleware/authMiddleware');

const User = require("../models/User");
const Course = require("../models/Course");
const Book = require("../models/Book");

// Admin login
router.post('/login', loginAdmin);

// Admin dashboard (can add token check later)
router.get('/dashboard', getDashboardData);

// Admin dashboard stats
router.get("/dashboard-stats", verifyAdmin, async (req, res) => {
  try {
    const usersCount = await User.countDocuments();
    const coursesCount = await Course.countDocuments();
    const booksCount = await Book.countDocuments();

    res.status(200).json({ usersCount, coursesCount, booksCount });
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch dashboard stats" });
  }
});

// Protected CRUD operations for admin
router.post('/add-course', verifyAdmin, addCourse);
router.post('/add-book', verifyAdmin, addBook);
router.delete('/delete-course/:id', verifyAdmin, deleteCourse);
router.delete('/delete-book/:id', verifyAdmin, deleteBook);

module.exports = router;
