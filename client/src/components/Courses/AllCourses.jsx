// import React, { useEffect, useState } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import Img1 from "../../assets/course/Img1.jpg";
// import Img2 from "../../assets/course/Img2.jpg";
// import Img3 from "../../assets/course/Img3.jpg";
// import Img4 from "../../assets/course/Img4.jpg";
// import Img5 from "../../assets/course/Img5.jpg";
 
// const CoursesData = [
  // { id: 1, img: Img1, title: "IELTS" },
  // { id: 2, img: Img2, title: "Digital Marketing" },
  // { id: 3, img: Img3, title: "Flutter" },
  // { id: 4, img: Img4, title: "Video Editing" },
  // { id: 5, img: Img5, title: "Web Development" },
// ];

// const AllCourses = () => {
//   const navigate = useNavigate();
//   const [filteredCourses, setFilteredCourses] = useState(CoursesData);
//   const location = useLocation();

//   useEffect(() => {
//     const searchParams = new URLSearchParams(location.search);
//     const searchTerm = searchParams.get("search");

//   const AllCourses = () => {
//     const [filteredCourses, setFilteredCourses] = useState([]);
//     const navigate = useNavigate();

//     useEffect(() => {
//       fetch("http://localhost:5000/courses")
//         .then((response) => response.json())
//         .then((data) => setFilteredCourses(data))
//         .catch((err) => console.log(err));
//     }, []);
    

//     if (searchTerm) {
//       setFilteredCourses(
//         CoursesData.filter((course) =>
//           course.title.toLowerCase().includes(searchTerm.toLowerCase())
//         )
//       );
//     } else {
//       setFilteredCourses(CoursesData);
//     }
//   }, [location]);

//   const handleCourseClick = (courseId) => {
//     navigate(`/course-details/${courseId}`);
//   };

//   return (
//     // <div className="container mx-auto py-10">    
//     //   <div className="text-center mb-6">
//     //     <h1 className="text-3xl font-bold">All Courses</h1>
//     //     <p className="text-gray-600">Explore all available courses</p>
//     //   </div>

//     //   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
//     //     {/* {CoursesData.map((course) => ( */}
//     //     {filteredCourses.map((course) => (
//     //       <div key={course.id} className="bg-white shadow-md rounded-lg p-4 text-center" 
//     //       onClick={() => handleCourseClick(course.id)}>
//     //         <img
//     //           src={course.img}
//     //           alt={course.title}
//     //           className="w-full h-[200px] object-cover rounded-md mb-3"
//     //         />
//     //         <h3 className="text-lg font-semibold">{course.title}</h3>
//     //       </div>
//     //     ))}
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
//           <h1 className="text-3xl font-bold">All Courses</h1>
//         </div>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
//           {filteredCourses.map(({ id, img, title, rating, instructor }) => (
//             <div
//               key={id}
//               className="bg-white shadow-md rounded-lg p-4 text-center"
//               onClick={() => handleCourseClick(id)}
//             >
//               <img src={img} 
//               alt={title} 
//               className="w-full h-[200px] object-cover rounded-md mb-3" />
//               <h3 className="text-lg font-semibold">{title}</h3>
//               <p className="text-sm text-gray-700">{instructor}</p>
//               <div className="flex items-center gap-1 justify-center">
//                 <span>{rating}</span>
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

// export default AllCourses;



// // import React, { useEffect, useState } from "react";
// // import { useNavigate } from "react-router-dom";

// // const AllCourses = () => {
// //   const [filteredCourses, setFilteredCourses] = useState([]);
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     fetch("http://localhost:5000/courses")
// //       .then((response) => response.json())
// //       .then((data) => setFilteredCourses(data))
// //       .catch((err) => console.log("Error fetching courses:", err));
// //   }, []);

// //   const handleCourseClick = (courseId) => {
// //     navigate(`/course-details/${courseId}`);
// //   };

// //   return (
// //     <div className="mt-14 mb-12">
// //       <div className="container">
// //         <div className="text-center mb-10 max-w-[600px] mx-auto">
// //           <h1 className="text-3xl font-bold">All Courses</h1>
// //           <p className="text-xs text-gray-400">
// //             Explore all available courses in our collection.
// //           </p>
// //         </div>

// //         {/* Courses Grid */}
// //         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
// //           {filteredCourses.length > 0 ? (
// //             filteredCourses.map(({ _id, img, title, rating, instructor }) => (
// //               <div
// //                 key={_id}
// //                 className="bg-white shadow-md rounded-lg p-4 text-center cursor-pointer hover:shadow-lg transition"
// //                 onClick={() => handleCourseClick(_id)}
// //               >
// //                 <img
// //                   src={img || "https://via.placeholder.com/150"} // Placeholder if img is missing
// //                   alt={title}
// //                   className="w-full h-[200px] object-cover rounded-md mb-3"
// //                 />
// //                 <h3 className="text-lg font-semibold">{title}</h3>
// //                 <p className="text-sm text-gray-700">{instructor}</p>
// //                 <div className="flex items-center gap-1 justify-center text-yellow-500">
// //                   <span>&#9733;</span>
// //                   <span>{rating || "N/A"}</span>
// //                 </div>
// //               </div>
// //             ))
// //           ) : (
// //             <p className="text-center col-span-4 text-gray-500">
// //               No courses available.
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

// // export default AllCourses;








import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Img1 from "../../assets/course/Img1.jpg";
import Img2 from "../../assets/course/Img2.jpg";
import Img3 from "../../assets/course/Img3.jpg";
import Img4 from "../../assets/course/Img4.jpg";
import Img5 from "../../assets/course/Img5.jpg";

const AllCourses = () => {
  const [filteredCourses, setFilteredCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Static fallback content from original comment
    const staticCourses = [
      {
        _id: "1",
        img: "https://img.freepik.com/free-photo/graduation-cap-with-certificates_23-2147776302.jpg",
        title: "Computer Fundamentals",
        instructor: "Md. Arifur Rahman",
        rating: "4.8",
      },
      {
        _id: "2",
        img: "https://img.freepik.com/free-photo/ai-cloud-concept-with-robot-arm_23-2149739748.jpg",
        title: "Artificial Intelligence",
        instructor: "Abdur Rahman",
        rating: "4.5",
      },
      {
        _id: "3",
        img: "https://img.freepik.com/free-photo/standard-quality-control-concept-m_23-2150041845.jpg",
        title: "Machine Learning",
        instructor: "Arafat Hossain",
        rating: "4.7",
      },
      {
        _id: "4",
        img: "https://img.freepik.com/free-photo/modern-technology-with-robotic-arm_23-2149077184.jpg",
        title: "Robotics",
        instructor: "Imran Hossain",
        rating: "4.4",
      },
        { _id: "5", img: Img1, title: "IELTS", instructor: "Md. Arifur Rahman",
        rating: "4.8", },
  { _id: "6", img: Img2, title: "Digital Marketing", instructor: "Abdur Rahman",
        rating: "4.5", },
  { _id: "7", img: Img3, title: "Flutter", instructor: "Arafat Hossain",
        rating: "4.7", },
  { _id: "8", img: Img4, title: "Video Editing", instructor: "Imran Hossain",
        rating: "4.4", },
  { _id: "9", img: Img5, title: "Web Development", instructor: "Md. Arifur Rahman",
        rating: "4.8", },
  { _id: "10", img: Img1, title: "IELTS", instructor: "Md. Arifur Rahman",
        rating: "4.8", },
  { _id: "11", img: Img2, title: "Digital Marketing", instructor: "Abdur Rahman",
        rating: "4.5", },
  { _id: "12", img: Img3, title: "Flutter", instructor: "Arafat Hossain",
        rating: "4.7", },
  { _id: "13", img: Img4, title: "Video Editing", instructor: "Imran Hossain",
        rating: "4.4", },
  { _id: "14", img: Img5, title: "Web Development", instructor: "Md. Arifur Rahman",
        rating: "4.8", },
    ];
    setFilteredCourses(staticCourses);

    // Uncomment below to fetch from backend API
    // fetch("http://localhost:5000/courses")
    //   .then((response) => response.json())
    //   .then((data) => setFilteredCourses(data))
    //   .catch((err) => console.log("Error fetching courses:", err));
  }, []);

  const handleCourseClick = (courseId) => {
    navigate(`/course-details/${courseId}`);
  };

  return (
    <div className="mt-14 mb-12">
      <div className="container">
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <h1 className="text-3xl font-bold">All Courses</h1>
          <p className="text-xs text-gray-400">
            Explore all available courses in our collection.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
          {filteredCourses.map(({ _id, img, title, instructor, rating }) => (
            <div
              key={_id}
              className="bg-white shadow-md rounded-lg p-4 text-center cursor-pointer hover:shadow-lg transition"
              onClick={() => handleCourseClick(_id)}
            >
              <img
                src={img}
                alt={title}
                className="w-full h-[200px] object-cover rounded-md mb-3"
              />
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="text-sm text-gray-700">{instructor}</p>
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

export default AllCourses;
