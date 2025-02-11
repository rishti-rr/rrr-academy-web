import React from "react";
import { useNavigate } from "react-router-dom";
import Img1 from "../../assets/course/Img1.jpg";
import Img2 from "../../assets/course/Img2.jpg";
import Img3 from "../../assets/course/Img3.jpg";
import Img4 from "../../assets/course/Img4.jpg";
import Img5 from "../../assets/course/Img5.jpg";

const CoursesData = [
  { id: 1, img: Img1, title: "IELTS" },
  { id: 2, img: Img2, title: "Digital Marketing" },
  { id: 3, img: Img3, title: "Flutter" },
  { id: 4, img: Img4, title: "Video Editing" },
  { id: 5, img: Img5, title: "Web Development" },
];

const AllCourses = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto py-10">
      {/* Heading */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold">All Courses</h1>
        <p className="text-gray-600">Explore all available courses</p>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
        {CoursesData.map((course) => (
          <div key={course.id} className="bg-white shadow-md rounded-lg p-4 text-center">
            <img
              src={course.img}
              alt={course.title}
              className="w-full h-[200px] object-cover rounded-md mb-3"
            />
            <h3 className="text-lg font-semibold">{course.title}</h3>
          </div>
        ))}
      </div>

      {/* Back Button */}
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

export default AllCourses;
