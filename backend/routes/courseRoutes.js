const express = require("express");
const router = express.Router();
const courseController = require("../controllers/courseController");
const { verifyAdmin } = require("../middleware/authMiddleware");

// Public Routes
router.get("/", courseController.getAllCourses);
router.get("/:id", courseController.getCourseById);

// Admin-only Routes
router.post("/", verifyAdmin, courseController.addCourse);
router.delete("/:id", verifyAdmin, courseController.deleteCourse);
router.put("/:id", verifyAdmin, courseController.updateCourse);

module.exports = router;
