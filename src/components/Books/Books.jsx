import React from "react";
import { useNavigate } from "react-router-dom";
import Book1 from "../../assets/books/book1.jpeg";
import Book2 from "../../assets/books/book2.jpeg";
import Book3 from "../../assets/books/book3.jpeg";
import { FaStar } from "react-icons/fa6";

const booksData = [
  {
    id: 1,
    img: Book1,
    title: "Jane Eyre",
    rating: 5.0,
    author: "Charlotte Brontë",
  },
  {
    id: 2,
    img: Book2,
    title: "Wuthering Heights",
    rating: 4.5,
    author: "Emily Brontë",
  },
  {
    id: 3,
    img: Book3,
    title: "Nineteen Eighty-Four",
    rating: 4.7,
    author: "George Orwell",
  },
  {
    id: 4,
    img: Book2,
    title: "His Life",
    rating: 4.4,
    author: "Someone",
  },
  {
    id: 5,
    img: Book1,
    title: "Who's There",
    rating: 4.5,
    author: "Someone",
  },
];

const Books = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="mt-14 mb-12">
        <div className="container">
        
          <div className="text-center mb-10 max-w-[600px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Top Books for you
            </p>
            <h1 className="text-3xl font-bold">Top Books</h1>
           
          </div>

       
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
             
              {booksData.map(({ id, img, title, rating, author }) => (
                <div key={id} className="div space-y-3">
                  <img
                    src={img}
                    alt=""
                    className="h-[220px] w-[150px] object-cover rounded-md "
                  />
                  <div>
                    <h3 className="font-semibold">{title}</h3>
                    <p className="text-sm text-gray-700">{author}</p>
                    <div className="flex items-center gap-1">
                      <FaStar className="text-yellow-500" />
                      <span>{rating}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <button className="text-center mt-10 cursor-pointer 
              bg-primary text-white py-1 px-5 rounded-md"
               onClick={() => navigate("/all-books")}
               >
                View All Books
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Books;
