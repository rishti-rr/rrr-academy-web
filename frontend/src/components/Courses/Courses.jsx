// import React from "react";
// import { useNavigate } from "react-router-dom";
// import Img1 from "../../assets/course/Img1.jpg";
// import Img2 from "../../assets/course/Img2.jpg";
// import Img3 from "../../assets/course/Img3.jpg";
// import Img4 from "../../assets/course/Img4.jpg";
// import Img5 from "../../assets/course/Img5.jpg";

// const CoursesData = [
//   {
//     id: 1,
//     img: Img1,
//     title: "IELTS"
//   },
//  {
//     id: 2,
//     img: Img2,
//     title: "Digital Marketing"
//   },
//   {
//     id: 3,
//     img: Img3,
//     title: "Flutter"
//   },
//   {
//     id: 4,
//     img: Img4,
//     title: "Video Editing"
//   },
//   {
//     id: 5,
//     img: Img5,
//     title: "Web Development"
//   },
// ];

// const Courses = () => {
//   const navigate = useNavigate();
  
//   return (
//     <div className=" mb-12 " >
//       <div className="container">
     
//         <div className="text-center mb-10 max-w-[600px] mx-auto">
//           <p data-aos="fade-up" className="text-sm
//            text-primary pt-10">
//             Trending topics
//           </p>
//           <h1 data-aos="fade-up" className="text-3xl font-bold">
//             Courses
//           </h1>
    
//         </div>
   
//         <div>
//           <div className="grid grid-cols-1 sm:grid-cols-3 
//           md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
          
//             {CoursesData.map((data) => (
//               <div
//                 data-aos="fade-up"
//                 // data-aos-delay={data.aosDelay}
//                 key={data.id}
//                 className="space-y-3 text-center"
//               >
//                 <img
//                   src={data.img}
//                   alt={data.title}
//                   className="h-[220px] w-[150px] object-cover rounded-md"
//                 />
//                 <div>
//                   <h3 className="font-semibold">{data.title}</h3>
//                   <p className="text-sm text-gray-600">{data.color}</p>
                 
//                 </div>
//               </div>
//             ))}
//           </div>
      
//           <div className="flex justify-center">
            
//             <button className="text-center mt-10 cursor-pointer bg-primary text-white py-2 px-6 rounded-md
//             hover:bg-primary-dark transition duration-300"
//             onClick={() => navigate("/all-courses")}
//             >
//               View All Courses
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Courses;




// import React, { useEffect, useState, useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../../context/AuthContext";
// import {useCart } from "../../context/CartContext";

// const Courses = () => {
//   const navigate = useNavigate();
//   const [courses, setCourses] = useState([]);
//   const [loading, setLoading] = useState(true); 
//   const { user, setShowAuthModal } = useContext(AuthContext);
//   const { addToCart } = useCart();

// const handleAddToCart = (item) => {
//   if (!user) {
//     setShowAuthModal(true); // trigger login modal
//   } else {
//     addToCart(item); // add to cart context or backend
//   }
// };

//   useEffect(() => {
//     const fetchCourses = async () => {
//       try {
//         const res = await fetch("http://localhost:5000/api/courses?limit=4");
//         const data = await res.json();
//         setCourses(data);
//       } catch (err) {
//         console.error("Error fetching courses:", err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchCourses();
//   }, []);

//   if (loading) return <p className="text-center mt-10">Loading courses...</p>;

//   return (
//     <div className="mb-12">
//       <div className="container">
//         <div className="text-center mb-10 max-w-[600px] mx-auto">
//           <p className="text-sm text-primary pt-10">Trending topics</p>
//           <h1 className="text-3xl font-bold">Courses</h1>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-6">
//           {courses.map(({ _id, image, title, instructor, rating, description }) => (
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
//         </div>

//         <div className="flex justify-center">
//           <button
//             className="mt-10 bg-primary text-white py-2 px-6 rounded-md hover:bg-primary-dark transition"
//             onClick={() => navigate("/all-courses")}
//           >
//             View All Courses
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Courses;



// import React, { useEffect, useState, useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../../context/AuthContext";
// import { useCart } from "../../context/CartContext";

// const Courses = () => {
//   const navigate = useNavigate();
//   const [courses, setCourses] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const { user, setShowAuthModal } = useContext(AuthContext);
//   const { addToCart } = useCart();

//   useEffect(() => {
//     const fetchCourses = async () => {
//       try {
//         const res = await fetch("http://localhost:5000/api/courses?limit=4");
//         const data = await res.json();
//         setCourses(data);
//       } catch (err) {
//         console.error("Error fetching courses:", err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchCourses();
//   }, []);

//   const handleAddToCart = (course) => {
//     if (!user) {
//       setShowAuthModal(true);
//     } else {
//       addToCart({ ...course, type: "course" });
//     }
//   };

//   const handleCourseClick = (id) => {
//     navigate(`/course-details/${id}`);
//   };

//   if (loading) return <p className="text-center mt-10">Loading courses...</p>;

//   return (
//     <div className="mb-12">
//       <div className="container">
//         <div className="text-center mb-10 max-w-[600px] mx-auto">
//           <p className="text-sm text-primary pt-10">Trending topics</p>
//           <h1 className="text-3xl font-bold">Courses</h1>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-6">
//           {courses.map((course) => (
//             <div
//               key={course._id}
//               className="bg-white shadow-md rounded-lg p-4 text-center cursor-pointer hover:shadow-lg transition"
//               onClick={() => handleCourseClick(course._id)}
//             >
//               <img
//                 src={course.image}
//                 alt={course.title}
//                 className="w-full h-[200px] object-cover rounded-md mb-3"
//               />
//               <h3 className="text-lg font-semibold">{course.title}</h3>
//               <p className="text-sm text-gray-700">{course.instructor}</p>
//               <p className="text-xs text-gray-500 mb-2 line-clamp-2">{course.description}</p>
//               <div className="flex items-center gap-1 justify-center text-yellow-500">
//                 <span>&#9733;</span>
//                 <span>{course.rating?.toFixed(1)}</span>
//               </div>
//               <button
//                 className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//                 onClick={(e) => {
//                   e.stopPropagation(); // Prevent navigate on button click
//                   handleAddToCart(course);
//                 }}
//               >
//                 Add to Cart
//               </button>
//             </div>
//           ))}
//         </div>

//         <div className="flex justify-center">
//           <button
//             className="mt-10 bg-primary text-white py-2 px-6 rounded-md hover:bg-primary-dark transition"
//             onClick={() => navigate("/all-courses")}
//           >
//             View All Courses
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Courses;

import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useCart } from "../../context/CartContext";

const Courses = () => {
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user, setShowAuthModal } = useContext(AuthContext);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/courses?limit=4");
        const data = await res.json();
        setCourses(data);
      } catch (err) {
        console.error("Error fetching courses:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchCourses();
  }, []);

  const handleAddToCart = (course) => {
    if (!user) {
      setShowAuthModal(true);
    } else {
      addToCart({ ...course, type: "course" });
    }
  };

  const handleCourseClick = (id) => {
    navigate(`/course-details/${id}`);
  };

  if (loading) return <p className="text-center mt-10">Loading courses...</p>;

  return (
    <div className="mb-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p className="text-sm text-primary pt-10 uppercase tracking-wide">Trending topics</p>
          <h1 className="text-3xl font-bold">Courses</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {courses.map((course) => (
            <div
              key={course._id}
              className="bg-white shadow-lg rounded-xl p-4 flex flex-col justify-between cursor-pointer hover:shadow-xl transition duration-300"
              onClick={() => handleCourseClick(course._id)}
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-48 object-cover rounded-md mb-3"
              />
              <div className="flex flex-col gap-1 text-start">
                <h3 className="text-lg font-semibold text-gray-800">{course.title}</h3>
                <p className="text-sm text-gray-600">{course.instructor}</p>
                <p className="text-xs text-gray-500 line-clamp-2">{course.description}</p>
              </div>
              <div className="mt-3 flex items-center justify-between">
                <div className="flex items-center gap-1 text-yellow-500 text-sm">
                  <span>★</span>
                  <span>{course.rating?.toFixed(1) || "N/A"}</span>
                </div>
                <span className="text-sm font-semibold text-green-600">৳{course.price}</span>
              </div>
              <button
                className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
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

        <div className="flex justify-center">
          <button
            className="mt-10 bg-gray-800 text-white py-2 px-6 rounded-md hover:bg-gray-900 transition"
            onClick={() => navigate("/all-courses")}
          >
            View All Courses
          </button>
        </div>
      </div>
    </div>
  );
};

export default Courses;
