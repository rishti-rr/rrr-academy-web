// import React from "react";
// import { useNavigate } from "react-router-dom";
// import Book1 from "../../assets/books/book1.jpeg";
// import Book2 from "../../assets/books/book2.jpeg";
// import Book3 from "../../assets/books/book3.jpeg";
// import { FaStar } from "react-icons/fa6";

// const booksData = [
//   {
//     id: 1,
//     img: Book1,
//     title: "Jane Eyre",
//     rating: 5.0,
//     author: "Charlotte Brontë",
//   },
//   {
//     id: 2,
//     img: Book2,
//     title: "Wuthering Heights",
//     rating: 4.5,
//     author: "Emily Brontë",
//   },
//   {
//     id: 3,
//     img: Book3,
//     title: "Nineteen Eighty-Four",
//     rating: 4.7,
//     author: "George Orwell",
//   },
//   {
//     id: 4,
//     img: Book2,
//     title: "His Life",
//     rating: 4.4,
//     author: "Someone",
//   },
//   {
//     id: 5,
//     img: Book1,
//     title: "Who's There",
//     rating: 4.5,
//     author: "Someone",
//   },
// ];

// const Books = () => {
//   const navigate = useNavigate();

//   return (
//     <>
//       <div className="mt-14 mb-12">
//         <div className="container">
        
//           <div className="text-center mb-10 max-w-[600px] mx-auto">
//             <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
//               Top Books for you
//             </p>
//             <h1 className="text-3xl font-bold">Top Books</h1>
           
//           </div>

       
//           <div>
//             <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
             
//               {booksData.map(({ id, img, title, rating, author }) => (
//                 <div key={id} className="div space-y-3">
//                   <img
//                     src={img}
//                     alt=""
//                     className="h-[220px] w-[150px] object-cover rounded-md "
//                   />
//                   <div>
//                     <h3 className="font-semibold">{title}</h3>
//                     <p className="text-sm text-gray-700">{author}</p>
//                     <div className="flex items-center gap-1">
//                       <FaStar className="text-yellow-500" />
//                       <span>{rating}</span>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//             <div className="flex justify-center">
//               <button className="text-center mt-10 cursor-pointer 
//               bg-primary text-white py-1 px-5 rounded-md"
//                onClick={() => navigate("/all-books")}
//                >
//                 View All Books
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Books;



// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { FaStar } from "react-icons/fa6";

// const Books = () => {
//   const navigate = useNavigate();
//   const [books, setBooks] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchBooks = async () => {
//       try {
//         const res = await fetch("http://localhost:5000/api/books?limit=4");
//         const data = await res.json();
//         setBooks(data);
//       } catch (err) {
//         console.error("Error fetching books:", err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchBooks();
//   }, []);

//   if (loading) return <p className="text-center mt-10">Loading books...</p>;

//   return (
//     <div className="mt-14 mb-12">
//       <div className="container">
//         <div className="text-center mb-10 max-w-[600px] mx-auto">
//           <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
//             Top Books for you
//           </p>
//           <h1 className="text-3xl font-bold">Top Books</h1>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-6">
//           {books.map(({ _id, image, title, author, rating }) => (
//             <div key={_id} className="space-y-3 text-center">
//               <img
//                 src={image}
//                 alt={title}
//                 className="h-[220px] w-[150px] object-cover rounded-lg shadow-md hover:scale-105 transition"
//               />
//               <h3 className="font-semibold text-lg">{title}</h3>
//               <p className="text-sm text-gray-700">{author}</p>
//               <div className="flex justify-center items-center gap-1 text-yellow-500">
//                 <FaStar />
//                 <span className="text-sm text-black">{rating}</span>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="flex justify-center">
//           <button
//             className="mt-10 bg-primary text-white py-2 px-6 rounded-md hover:bg-primary-dark transition"
//             onClick={() => navigate("/all-books")}
//           >
//             View All Books
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Books;




import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa6";
import { useCart } from "../../context/CartContext";
import { AuthContext } from "../../context/AuthContext";

const Books = () => {
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();
  const { user, setShowAuthModal } = useContext(AuthContext);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/books?limit=4");
        const data = await res.json();
        setBooks(data);
      } catch (err) {
        console.error("Error fetching books:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchBooks();
  }, []);

  const handleAddToCart = (book) => {
    if (!user) {
      setShowAuthModal(true);
    } else {
      addToCart({ ...book, type: "book" });
    }
  };

  if (loading) return <p className="text-center mt-10">Loading books...</p>;

  return (
    <div className="mt-14 mb-12">
      <div className="container">
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Top Books for you
          </p>
          <h1 className="text-3xl font-bold">Top Books</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-6">
          {books.map((book) => (
            <div key={book._id} className="space-y-3 text-center bg-white p-4 rounded-lg shadow-md">
              <img
                src={book.image}
                alt={book.title}
                className="h-[220px] w-[150px] object-cover rounded-lg shadow hover:scale-105 transition"
              />
              <h3 className="font-semibold text-lg">{book.title}</h3>
              <p className="text-sm text-gray-700">{book.author}</p>
              <div className="flex justify-center items-center gap-1 text-yellow-500">
                <FaStar />
                <span className="text-sm text-black">{book.rating}</span>
              </div>
              <button
                className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                onClick={() => handleAddToCart(book)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <button
            className="mt-10 bg-primary text-white py-2 px-6 rounded-md hover:bg-primary-dark transition"
            onClick={() => navigate("/all-books")}
          >
            View All Books
          </button>
        </div>
      </div>
    </div>
  );
};

export default Books;
