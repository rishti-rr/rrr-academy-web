import React from "react";
import { useNavigate } from "react-router-dom";
import Book1 from "../../assets/books/book1.jpeg";
import Book2 from "../../assets/books/book2.jpeg";
import Book3 from "../../assets/books/book3.jpeg";
import { FaStar } from "react-icons/fa6";

const booksData = [
  { id: 1, img: Book1, title: "Jane Eyre", rating: 5.0, author: "Charlotte Brontë" },
  { id: 2, img: Book2, title: "Wuthering Heights", rating: 4.5, author: "Emily Brontë" },
  { id: 3, img: Book3, title: "Nineteen Eighty-Four", rating: 4.7, author: "George Orwell" },
  { id: 4, img: Book2, title: "His Life", rating: 4.4, author: "Someone" },
  { id: 5, img: Book1, title: "Who's There", rating: 4.5, author: "Someone" },
  // Add more book data as needed
];

const AllBooks = () => {
    const navigate = useNavigate();
  return (
    <div className="mt-14 mb-12">
      <div className="container">
      
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <h1 className="text-3xl font-bold">All Books</h1>
          <p className="text-xs text-gray-400">
            Explore all available books in our collection
          </p>
        </div>

      
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
            {booksData.map(({ id, img, title, rating, author }) => (
              <div key={id} className="bg-white shadow-md rounded-lg p-4 text-center">
                <img
                  src={img}
                  alt={title}
                  className="w-full h-[200px] object-cover rounded-md mb-3"
                />
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-sm text-gray-700">{author}</p>
                <div className="flex items-center gap-1 justify-center">
                  <FaStar className="text-yellow-500" />
                  <span>{rating}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-6">
        <button
          className="bg-gray-700 text-white px-6 py-2 rounded-md hover:bg-gray-900 transition"
          onClick={() => navigate("/")}
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default AllBooks;
