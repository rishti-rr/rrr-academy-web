const express = require("express");
const router = express.Router();
const bookController = require("../controllers/bookController");
const { verifyAdmin } = require("../middleware/authMiddleware");

// Public Routes
router.get("/", bookController.getAllBooks);
router.get("/:id", bookController.getBookById);

// Admin-only Routes
router.post("/", verifyAdmin, bookController.addBook);
router.delete("/:id", verifyAdmin, bookController.deleteBook);
router.put("/:id", verifyAdmin, bookController.updateBook);

module.exports = router;
