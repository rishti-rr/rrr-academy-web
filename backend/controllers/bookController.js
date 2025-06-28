const Book = require("../models/Book");

// Get all books
exports.getAllBooks = async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 0; // 0 means no limit
    const books = await Book.find().limit(limit);
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get a specific book by ID
exports.getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ message: "Book not found" });
    res.json(book);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Add a new book
exports.addBook = async (req, res) => {
  const { title, author, rating, image, description } = req.body;
  try {
    const newBook = new Book({ title, author, rating, image, description });
    await newBook.save();
    res.status(201).json(newBook);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


// Update a book by ID
exports.updateBook = async (req, res) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedBook) return res.status(404).json({ message: "Book not found" });
    res.json(updatedBook);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


// Delete a book
exports.deleteBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) return res.status(404).json({ message: "Book not found" });
    res.json({ message: "Book deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
