// import React, { useEffect, useState } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import Book1 from "../../assets/books/book1.jpeg";
// import Book2 from "../../assets/books/book2.jpeg";
// import Book3 from "../../assets/books/book3.jpeg";
// import { FaStar } from "react-icons/fa6";

// const booksData = [
  // { id: 1, img: Book1, title: "Jane Eyre", rating: 5.0, author: "Charlotte Brontë" },
  // { id: 2, img: Book2, title: "Wuthering Heights", rating: 4.5, author: "Emily Brontë" },
  // { id: 3, img: Book3, title: "Nineteen Eighty-Four", rating: 4.7, author: "George Orwell" },
  // { id: 4, img: Book2, title: "His Life", rating: 4.4, author: "Someone" },
  // { id: 5, img: Book1, title: "Who's There", rating: 4.5, author: "Someone" },
 
// ];

// const AllBooks = () => {
//     const navigate = useNavigate();
//     const [filteredBooks, setFilteredBooks] = useState(booksData);
//     const location = useLocation();

//     useEffect(() => {
//       const searchParams = new URLSearchParams(location.search);
//       const searchTerm = searchParams.get("search");
 


// const AllBooks = () => {
//   const [filteredBooks, setFilteredBooks] = useState([]);
//   const navigate = useNavigate();

//       useEffect(() => {
//         fetch("http://localhost:5000/books")
//           .then((response) => response.json())
//           .then((data) => setFilteredBooks(data))
//           .catch((err) => console.log(err));
//       }, []);
      
//       if (searchTerm) {
//         setFilteredBooks(
//           booksData.filter((book) =>
//             book.title.toLowerCase().includes(searchTerm.toLowerCase())
//           )
//         );
//       } else {
//         setFilteredBooks(booksData);
//       }
//     }, [location]);

//     const handleBookClick = (bookId) => {
//       navigate(`/book-details/${bookId}`);
//     };

//   return (
//     // <div className="mt-14 mb-12">
//     //   <div className="container">
      
//     //     <div className="text-center mb-10 max-w-[600px] mx-auto">
//     //       <h1 className="text-3xl font-bold">All Books</h1>
//     //       <p className="text-xs text-gray-400">
//     //         Explore all available books in our collection
//     //       </p>
//     //     </div>

      
//     //     {/* <div> */}
//     //       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
//     //         {/* {booksData.map(({ id, img, title, rating, author }) => ( */}
//     //         {filteredBooks.map(({ id, img, title, rating, author }) => (
//     //           <div key={id} className="bg-white shadow-md rounded-lg p-4 text-center"
//     //           onClick={() => handleBookClick(id)}>
//     //             <img
//     //               src={img}
//     //               alt={title}
//     //               className="w-full h-[200px] object-cover rounded-md mb-3"
//     //            />
//     //             <h3 className="text-lg font-semibold">{title}</h3>
//     //             <p className="text-sm text-gray-700">{author}</p>
//     //             <div className="flex items-center gap-1 justify-center">
//     //               <FaStar className="text-yellow-500" />
//     //               <span>{rating}</span>
//     //             </div>
//     //           </div>
//     //         ))}
//     //       </div>
//     //     {/* </div> */}
//     //   </div>
//       // <div className="flex justify-center mt-6">
//       //   <button
//       //     className="bg-gray-700 text-white px-6 py-2 rounded-md hover:bg-gray-900 transition"
//       //     onClick={() => navigate("/")}
//       //   >
//       //     Go Back
//       //   </button>
//       // </div>
//     // </div>

//     <div className="mt-14 mb-12">
//       <div className="container">
//         <div className="text-center mb-10 max-w-[600px] mx-auto">
//           <h1 className="text-3xl font-bold">All Books</h1>
//         </div>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
//           {books.map((book) => (
//             <div
//               key={book._id}
//               className="bg-white shadow-md rounded-lg p-4 text-center cursor-pointer hover:shadow-lg transition"
//               onClick={() => handleBookClick(book._id)}
//             >
//               <img
//                 src={book.img}
//                 alt={book.title}
//                 className="w-full h-[200px] object-cover rounded-md mb-3"
//               />
//               <h3 className="text-lg font-semibold">{book.title}</h3>
//               <p className="text-sm text-gray-700">{book.author}</p>
//               <div className="flex items-center gap-1 justify-center text-yellow-500">
//                 <span>&#9733;</span>
//                 <span>{book.rating}</span>
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="flex justify-center mt-6">
//         <button
//           className="bg-gray-700 text-white px-6 py-2 rounded-md hover:bg-gray-900 transition"
//           onClick={() => navigate("/")}
//         >
//           Go Back
//         </button>
//       </div> 
//       </div>
//     </div>
//   );
// };
 
// export default AllBooks;


// // import React, { useEffect, useState } from "react";
// // import { useNavigate } from "react-router-dom";

// // const AllBooks = () => {
// //   const [filteredBooks, setFilteredBooks] = useState([]);
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     fetch("http://localhost:5000/books")
// //       .then((response) => response.json())
// //       .then((data) => setFilteredBooks(data))
// //       .catch((err) => console.log("Error fetching books:", err));
// //   }, []);

// //   const handleBookClick = (bookId) => {
// //     navigate(`/book-details/${bookId}`);
// //   };

// //   return (
// //     <div className="mt-14 mb-12">
// //       <div className="container">
// //         <div className="text-center mb-10 max-w-[600px] mx-auto">
// //           <h1 className="text-3xl font-bold">All Books</h1>
// //           <p className="text-xs text-gray-400">
// //             Explore all available books in our collection.
// //           </p>
// //         </div>

// //         {/* Books Grid */}
// //         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
// //           {filteredBooks.length > 0 ? (
// //             filteredBooks.map(({ _id, img, title, rating, author }) => (
// //               <div
// //                 key={_id}
// //                 className="bg-white shadow-md rounded-lg p-4 text-center cursor-pointer hover:shadow-lg transition"
// //                 onClick={() => handleBookClick(_id)}
// //               >
// //                 <img
// //                   src={img || "https://via.placeholder.com/150"} // Placeholder if img is missing
// //                   alt={title}
// //                   className="w-full h-[200px] object-cover rounded-md mb-3"
// //                 />
// //                 <h3 className="text-lg font-semibold">{title}</h3>
// //                 <p className="text-sm text-gray-700">{author}</p>
// //                 <div className="flex items-center gap-1 justify-center text-yellow-500">
// //                   <span>&#9733;</span>
// //                   <span>{rating || "N/A"}</span>
// //                 </div>
// //               </div>
// //             ))
// //           ) : (
// //             <p className="text-center col-span-4 text-gray-500">
// //               No books available.
// //             </p>
// //           )}
// //         </div>

// //         {/* Back Button */}
// //         <div className="flex justify-center mt-6">
// //           <button
// //             className="bg-gray-700 text-white px-6 py-2 rounded-md hover:bg-gray-900 transition"
// //             onClick={() => navigate("/")}
// //           >
// //             Go Back
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default AllBooks;





import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Book1 from "../../assets/books/book1.jpeg";
import Book2 from "../../assets/books/book2.jpeg";
import Book3 from "../../assets/books/book3.jpeg";
import { FaStar } from "react-icons/fa6";

const AllBooks = () => {
  const [filteredBooks, setFilteredBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Static fallback content from original comment
    const staticBooks = [
      {
        _id: "1",
        img: "https://img.freepik.com/free-photo/old-opened-book-library_1150-110.jpg",
        title: "Digital Logic Design",
        author: "Md. Arifur Rahman",
        rating: "4.6",
      },
      {
        _id: "2",
        img: "https://img.freepik.com/free-photo/opened-book-graduation-cap_1150-5912.jpg",
        title: "Artificial Intelligence Book",
        author: "Abdur Rahman",
        rating: "4.4",
      },
      {
        _id: "3",
        img: "https://img.freepik.com/free-photo/stack-books-library_1150-103.jpg",
        title: "ML & Data Mining",
        author: "Arafat Hossain",
        rating: "4.7",
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
    ];
    setFilteredBooks(staticBooks);

    // Uncomment below to fetch from backend API
    // fetch("http://localhost:5000/books")
    //   .then((response) => response.json())
    //   .then((data) => setFilteredBooks(data))
    //   .catch((err) => console.log("Error fetching books:", err));
  }, []);

  const handleBookClick = (bookId) => {
    navigate(`/book-details/${bookId}`);
  };

  return (
    <div className="mt-14 mb-12">
      <div className="container">
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <h1 className="text-3xl font-bold">All Books</h1>
          <p className="text-xs text-gray-400">
            Explore our entire book collection.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
          {filteredBooks.map(({ _id, img, title, author, rating }) => (
            <div
              key={_id}
              className="bg-white shadow-md rounded-lg p-4 text-center cursor-pointer hover:shadow-lg transition"
              onClick={() => handleBookClick(_id)}
            >
              <img
                src={img}
                alt={title}
                className="w-full h-[200px] object-cover rounded-md mb-3"
              />
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="text-sm text-gray-700">{author}</p>
              <div className="flex items-center gap-1 justify-center text-yellow-500">
                <span>&#9733;</span>
                <span>{rating}</span>
              </div>
            </div>
          ))}
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
    </div>
  );
};

export default AllBooks;

