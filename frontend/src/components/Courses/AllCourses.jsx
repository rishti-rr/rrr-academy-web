// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
// import Img1 from "../../assets/course/Img1.jpg";
// import Img2 from "../../assets/course/Img2.jpg";
// import Img3 from "../../assets/course/Img3.jpg";
// import Img4 from "../../assets/course/Img4.jpg";
// import Img5 from "../../assets/course/Img5.jpg";

// const AllCourses = () => {
//   const [filteredCourses, setFilteredCourses] = useState([]);
//   const navigate = useNavigate();
  

//   useEffect(() => {
//     // Static fallback content from original comment
//     const staticCourses = [
//       {
//         _id: "1",
//         img: "https://img.freepik.com/free-photo/graduation-cap-with-certificates_23-2147776302.jpg",
//         title: "Computer Fundamentals",
//         instructor: "Md. Arifur Rahman",
//         rating: "4.8",
//       },
//       {
//         _id: "2",
//         img: "https://img.freepik.com/free-photo/ai-cloud-concept-with-robot-arm_23-2149739748.jpg",
//         title: "Artificial Intelligence",
//         instructor: "Abdur Rahman",
//         rating: "4.5",
//       },
//       {
//         _id: "3",
//         img: "https://img.freepik.com/free-photo/standard-quality-control-concept-m_23-2150041845.jpg",
//         title: "Machine Learning",
//         instructor: "Arafat Hossain",
//         rating: "4.7",
//       },
//       {
//         _id: "4",
//         img: "https://img.freepik.com/free-photo/modern-technology-with-robotic-arm_23-2149077184.jpg",
//         title: "Robotics",
//         instructor: "Imran Hossain",
//         rating: "4.4",
//       },
//         { _id: "5", img: Img1, title: "IELTS", instructor: "Md. Arifur Rahman",
//         rating: "4.8", },
//   { _id: "6", img: Img2, title: "Digital Marketing", instructor: "Abdur Rahman",
//         rating: "4.5", },
//   { _id: "7", img: Img3, title: "Flutter", instructor: "Arafat Hossain",
//         rating: "4.7", },
//   { _id: "8", img: Img4, title: "Video Editing", instructor: "Imran Hossain",
//         rating: "4.4", },
//   { _id: "9", img: Img5, title: "Web Development", instructor: "Md. Arifur Rahman",
//         rating: "4.8", },
//   { _id: "10", img: Img1, title: "IELTS", instructor: "Md. Arifur Rahman",
//         rating: "4.8", },
//   { _id: "11", img: Img2, title: "Digital Marketing", instructor: "Abdur Rahman",
//         rating: "4.5", },
//   { _id: "12", img: Img3, title: "Flutter", instructor: "Arafat Hossain",
//         rating: "4.7", },
//   { _id: "13", img: Img4, title: "Video Editing", instructor: "Imran Hossain",
//         rating: "4.4", },
//   { _id: "14", img: Img5, title: "Web Development", instructor: "Md. Arifur Rahman",
//         rating: "4.8", },
//     ];
//     setFilteredCourses(staticCourses);

//     // Uncomment below to fetch from backend API
//     // fetch("http://localhost:5000/courses")
//     //   .then((response) => response.json())
//     //   .then((data) => setFilteredCourses(data))
//     //   .catch((err) => console.log("Error fetching courses:", err));
//   }, []);

//   const handleCourseClick = (courseId) => {
//     navigate(`/course-details/${courseId}`);
//   };

//   return (
//     <div className="mt-14 mb-12">
//       <div className="container">
//         <div className="text-center mb-10 max-w-[600px] mx-auto">
//           <h1 className="text-3xl font-bold">All Courses</h1>
//           <p className="text-xs text-gray-400">
//             Explore all available courses in our collection.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
//           {filteredCourses.map(({ _id, img, title, instructor, rating }) => (
//             <div
//               key={_id}
//               className="bg-white shadow-md rounded-lg p-4 text-center cursor-pointer hover:shadow-lg transition"
//               onClick={() => handleCourseClick(_id)}
//             >
//               <img
//                 src={img}
//                 alt={title}
//                 className="w-full h-[200px] object-cover rounded-md mb-3"
//               />
//               <h3 className="text-lg font-semibold">{title}</h3>
//               <p className="text-sm text-gray-700">{instructor}</p>
//               <div className="flex items-center gap-1 justify-center text-yellow-500">
//                 <span>&#9733;</span>
//                 <span>{rating}</span>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="flex justify-center mt-6">
//           <button
//             className="bg-gray-700 text-white px-6 py-2 rounded-md hover:bg-gray-900 transition"
//             onClick={() => navigate("/")}
//           >
//             Go Back
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AllCourses;




// import React, { useEffect, useState, useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../../context/AuthContext";
// import { useCart } from "../../context/CartContext";

// const AllCourses = () => {
//   const [courses, setCourses] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();
  
//   const { user, setShowAuthModal } = useContext(AuthContext);
// const { addToCart } = useCart();

// const handleAddToCart = (course) => {
//   if (!user) {
//     setShowAuthModal(true); // trigger login modal
//   } else {
//     addToCart(course); // add to cart context or backend
//   }
// };

//   useEffect(() => {
//     fetch("http://localhost:5000/api/courses") // adjust your API route accordingly
//       .then((res) => res.json())
//       .then((data) => {
//         setCourses(data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error("Error fetching courses:", err);
//         setLoading(false);
//       });
//   }, []);

//   const handleCourseClick = (id) => {
//     navigate(`/course-details/${id}`);
//   };

//   if (loading) return <p className="text-center mt-10">Loading courses...</p>;

//   return (
//     <div className="mt-14 mb-12">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-10 max-w-[600px] mx-auto">
//           <h1 className="text-3xl font-bold">All Courses</h1>
//           <p className="text-xs text-gray-400">
//             Explore all available courses in our collection.
//           </p>
//         </div>

//         {courses.length === 0 ? (
//           <p className="text-center text-gray-500">No courses found.</p>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//             {courses.map(({ _id, image, title, instructor, rating, description }) => (
//               <div
//                 key={_id}
//                 className="bg-white shadow-md rounded-lg p-4 text-center cursor-pointer hover:shadow-lg transition"
//                 onClick={() => handleCourseClick(_id)}
//               >
//                 <img
//                   src={image}
//                   alt={title}
//                   className="w-full h-[200px] object-cover rounded-md mb-3"
//                 />
//                 <h3 className="text-lg font-semibold">{title}</h3>
//                 <p className="text-sm text-gray-700">{instructor}</p>
//                 <p className="text-xs text-gray-500 mb-2 line-clamp-2">{description}</p>
//                 <div className="flex items-center gap-1 justify-center text-yellow-500">
//                   <span>&#9733;</span>
//                   <span>{rating.toFixed(1)}</span>
//                 </div>
//                 <button
//                 className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//                 onClick={() => handleAddToCart(item)} // item = course or book
//                 >
//                  Add to Cart
//                 </button>

//               </div>
//             ))}
//           </div>
//         )}

//         <div className="flex justify-center mt-6">
//           <button
//             className="bg-gray-700 text-white px-6 py-2 rounded-md hover:bg-gray-900 transition"
//             onClick={() => navigate("/")}
//           >
//             Go Back
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AllCourses;

// import React, { useEffect, useState, useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../../context/AuthContext";
// import { useCart } from "../../context/CartContext";

// const AllCourses = () => {
//   const [courses, setCourses] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();
//   const { user, setShowAuthModal } = useContext(AuthContext);
//   const { addToCart } = useCart();

//   const handleAddToCart = (course) => {
//     if (!user) {
//       setShowAuthModal(true);
//     } else {
//       addToCart({ ...course, type: "course" });
//     }
//   };

//   useEffect(() => {
//     fetch("http://localhost:5000/api/courses")
//       .then((res) => res.json())
//       .then((data) => {
//         setCourses(data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error("Error fetching courses:", err);
//         setLoading(false);
//       });
//   }, []);

//   const handleCourseClick = (id) => {
//     navigate(`/course-details/${id}`);
//   };

//   if (loading) return <p className="text-center mt-10">Loading courses...</p>;

//   return (
//     <div className="mt-14 mb-12">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-10 max-w-[600px] mx-auto">
//           <h1 className="text-3xl font-bold">All Courses</h1>
//           <p className="text-xs text-gray-400">Explore all available courses.</p>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {courses.map(({ _id, image, title, instructor, rating, description }) => (
//             <div
//               key={_id}
//               className="bg-white shadow-md rounded-lg p-4 text-center cursor-pointer hover:shadow-lg transition"
//               onClick={() => handleCourseClick(_id)}
//             >
//               <img
//                 src={image}
//                 alt={title}
//                 className="w-full h-[200px] object-cover rounded-md mb-3"
//               />
//               <h3 className="text-lg font-semibold">{title}</h3>
//               <p className="text-sm text-gray-700">{instructor}</p>
//               <p className="text-xs text-gray-500 mb-2 line-clamp-2">{description}</p>
//               <div className="flex items-center gap-1 justify-center text-yellow-500">
//                 <span>&#9733;</span>
//                 <span>{rating.toFixed(1)}</span>
//               </div>
//               <button
//                 className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   handleAddToCart({ _id, image, title, instructor, rating, description });
//                 }}
//               >
//                 Add to Cart
//               </button>
//             </div>
//           ))}
//         </div>

//         <div className="flex justify-center mt-6">
//           <button
//             className="bg-gray-700 text-white px-6 py-2 rounded-md hover:bg-gray-900 transition"
//             onClick={() => navigate("/")}
//           >
//             Go Back
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AllCourses;


import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useCart } from "../../context/CartContext";
// import { toast } from "react-toastify"; // ✅ Import toast
import "react-toastify/dist/ReactToastify.css";

const AllCourses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { user, setShowAuthModal } = useContext(AuthContext);
  const { addToCart } = useCart();

  const handleAddToCart = (course) => {
    if (!user) {
      setShowAuthModal(true);
    } else {
      addToCart(course, "course" );
      // toast.success("Course added to cart!", { position: "bottom-right" }); // ✅ Toast
    }
  };

  useEffect(() => {
    fetch("http://localhost:5000/api/courses")
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching courses:", err);
        setLoading(false);
      });
  }, []);

  const handleCourseClick = (id) => {
    navigate(`/course-details/${id}`);
  };

  if (loading) return <p className="text-center mt-10">Loading courses...</p>;

  return (
    <div className="mt-14 mb-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <h1 className="text-3xl font-bold">All Courses</h1>
          <p className="text-xs text-gray-400">Explore all available courses.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {courses.map((course) => (
            <div
              key={course._id}
              className="bg-white shadow-md rounded-lg p-4 text-center cursor-pointer hover:shadow-lg transition"
              onClick={() => handleCourseClick(course._id)}
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-[200px] object-cover rounded-md mb-3"
              />
              <h3 className="text-lg font-semibold">{course.title}</h3>
              <p className="text-sm text-gray-700">{course.instructor}</p>
              <p className="text-xs text-gray-500 mb-2 line-clamp-2">{course.description}</p>
              <div className="flex items-center gap-1 justify-center text-yellow-500">
                <span>&#9733;</span>
                <span>{course.rating.toFixed(1)}</span>
              </div>
              <button
                className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                onClick={(e) => {
                  e.stopPropagation();
                  handleAddToCart(course);
                }}
              >
                Add to Cart
              </button>
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

export default AllCourses;
