import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Img1 from "../../assets/course/Img1.jpg";
import Img2 from "../../assets/course/Img2.jpg";
import Img3 from "../../assets/course/Img3.jpg";
import Img4 from "../../assets/course/Img4.jpg";
import Img5 from "../../assets/course/Img5.jpg";

const courses = [
  {
    _id: "1",
    img: "https://img.freepik.com/free-photo/graduation-cap-with-certificates_23-2147776302.jpg",
    title: "Computer Fundamentals",
    instructor: "Md. Arifur Rahman",
    rating: "4.8",
    price: "$49",
    description:
      "Learn the basics of computers, hardware, software, and essential digital skills.",
    duration: "6 weeks",
  },
  {
    _id: "2",
    img: "https://img.freepik.com/free-photo/ai-cloud-concept-with-robot-arm_23-2149739748.jpg",
    title: "Artificial Intelligence",
    instructor: "Abdur Rahman",
    rating: "4.5",
    price: "$79",
    description:
      "Explore concepts of AI, machine learning algorithms, and real-world applications.",
    duration: "8 weeks",
  },
  {
    _id: "3",
    img: "https://img.freepik.com/free-photo/standard-quality-control-concept-m_23-2150041845.jpg",
    title: "Machine Learning",
    instructor: "Arafat Hossain",
    rating: "4.7",
    price: "$89",
    description:
      "Dive into supervised and unsupervised learning, data preprocessing, and model evaluation.",
    duration: "10 weeks",
  }, {
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
  // ... add other courses similarly or import from your AllCourses data
];

const CourseDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const course = courses.find((c) => c._id === id);

  if (!course) {
    return (
      <div className="container mt-14 text-center">
        <h2 className="text-xl font-semibold">Course not found</h2>
        <button
          onClick={() => navigate("/all-courses")}
          className="mt-4 px-4 py-2 bg-gray-700 text-white rounded"
        >
          Back to Courses
        </button>
      </div>
    );
  }

  return (
    <div className="container mt-14 mb-14 max-w-4xl mx-auto bg-white shadow-md rounded p-6">
      <button
        onClick={() => navigate("/all-courses")}
        className="mb-6 px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-900 transition"
      >
        Back to Courses
      </button>

      <img
        src={course.img}
        alt={course.title}
        className="w-full h-64 object-cover rounded mb-6"
      />

      <h1 className="text-3xl font-bold mb-2">{course.title}</h1>
      <p className="text-gray-700 mb-4">{course.description}</p>

      <div className="flex flex-wrap gap-4 mb-4">
        <div>
          <strong>Instructor:</strong> {course.instructor}
        </div>
        <div>
          <strong>Duration:</strong> {course.duration}
        </div>
        <div className="flex items-center text-yellow-500">
          <span className="mr-1">&#9733;</span> {course.rating}
        </div>
        <div>
          <strong>Price:</strong> {course.price}
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

export default CourseDetails;
