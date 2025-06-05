import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Book1 from "../../assets/books/book1.jpeg";
import Book2 from "../../assets/books/book2.jpeg";
import Book3 from "../../assets/books/book3.jpeg";

const books = [
  {
    _id: "1",
    img: "https://img.freepik.com/free-photo/old-opened-book-library_1150-110.jpg",
    title: "Digital Logic Design",
    author: "Md. Arifur Rahman",
    rating: "4.6",
    price: "$39",
    description:
      "A comprehensive guide to digital logic design, circuits, and systems.",
    pages: "350 pages",
  },
  {
    _id: "2",
    img: "https://img.freepik.com/free-photo/opened-book-graduation-cap_1150-5912.jpg",
    title: "Artificial Intelligence Book",
    author: "Abdur Rahman",
    rating: "4.4",
    price: "$59",
    description:
      "Detailed explanations of AI theories, techniques, and practical uses.",
    pages: "420 pages",
  },
  {
    _id: "3",
    img: "https://img.freepik.com/free-photo/stack-books-library_1150-103.jpg",
    title: "ML & Data Mining",
    author: "Arafat Hossain",
    rating: "4.7",
    price: "$69",
    description:
      "Explore machine learning concepts alongside data mining methods and applications.",
    pages: "500 pages",
  }, 
  {
          _id: "4",
          img: "https://img.freepik.com/free-photo/book-with-green-board-background_1150-3837.jpg",
          title: "Introduction to Robotics",
          author: "Imran Hossain",
          rating: "4.3",
        },
    { _id: "5", img: Book1, title: "Jane Eyre", rating: 5.0, author: "Charlotte Brontë" },
    { _id: "6", img: Book2, title: "Wuthering Heights", rating: 4.5, author: "Emily Brontë" },
    { _id: "7", img: Book3, title: "Nineteen Eighty-Four", rating: 4.7, author: "George Orwell" },
    { _id: "8", img: Book2, title: "His Life", rating: 4.4, author: "Someone" },
    { _id: "9", img: Book1, title: "Who's There", rating: 4.5, author: "Someone" },
    { _id: "10", img: Book1, title: "Jane Eyre", rating: 5.0, author: "Charlotte Brontë" },
    { _id: "11", img: Book2, title: "Wuthering Heights", rating: 4.5, author: "Emily Brontë" },
    { _id: "12", img: Book3, title: "Nineteen Eighty-Four", rating: 4.7, author: "George Orwell" },
    { _id: "13", img: Book2, title: "His Life", rating: 4.4, author: "Someone" },
    { _id: "14", img: Book1, title: "Who's There", rating: 4.5, author: "Someone" },
  // ... add other books similarly or import from your AllBooks data
];

const BookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const book = books.find((b) => b._id === id);

  if (!book) {
    return (
      <div className="container mt-14">
        <h2 className="text-xl font-semibold">Book not found</h2>
        <button
          onClick={() => navigate("/all-books")}
          className="mt-4 px-4 py-2 bg-gray-700 text-white rounded"
        >
          Back to Books
        </button>
      </div>
    );
  }

  return (
    <div className="container mt-14 mb-14 max-w-4xl mx-auto bg-white shadow-md rounded p-6">
      <button
        onClick={() => navigate("/all-books")}
        className="mb-6 px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-900 transition"
      >
        Back to Books
      </button>

      <img
        src={book.img}
        alt={book.title}
        className="w-full h-64 object-cover rounded mb-6"
      />

      <h1 className="text-3xl font-bold mb-2">{book.title}</h1>
      <p className="text-gray-700 mb-4">{book.description}</p>

      <div className="flex flex-wrap gap-4 mb-4">
        <div>
          <strong>Author:</strong> {book.author}
        </div>
        <div>
          <strong>Pages:</strong> {book.pages}
        </div>
        <div className="flex items-center text-yellow-500">
          <span className="mr-1">&#9733;</span> {book.rating}
        </div>
        <div>
          <strong>Price:</strong> {book.price}
        </div>
      </div>

      <button
        className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
        onClick={() => alert("Add to Cart clicked! (UI only)")}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default BookDetails;
