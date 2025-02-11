import React from "react";
import { useNavigate } from "react-router-dom";

const services = [
  {
    id: 1,
    title: "Web Development",
    description: "Learn to build modern, responsive websites using HTML, CSS, JavaScript, and React.",
    image: "https://via.placeholder.com/600x400",
  },
  {
    id: 2,
    title: "App Development",
    description: "Master mobile app development with Flutter and React Native................",
    image: "https://via.placeholder.com/600x400",
  },
  {
    id: 3,
    title: "Digital Marketing",
    description: "Understand SEO, content marketing, and social media strategies.",
    image: "https://via.placeholder.com/600x400",
  },
  {
    id: 4,
    title: "Graphic Design",
    description: "Learn UI/UX, Photoshop, and Illustrator for creative design solutions.",
    image: "https://via.placeholder.com/600x400",
  },
];

const Services = () => {
   const navigate = useNavigate();
  return (
    <section className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-blue-700 text-center mb-8">Our Services</h1>
        
        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white shadow-lg rounded-lg p-6 transition-transform duration-300 hover:scale-105">
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-48 object-cover rounded-md shadow-md"
              />
              <h2 className="text-2xl font-semibold text-gray-800 mt-4">{service.title}</h2>
              <p className="text-gray-600 mt-2">{service.description}</p>
              <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-5 rounded-md">
                See More
              </button>
              
            </div>
          ))}
         
        </div>
        <div className="flex justify-center mt-6">
        <button
          className="bg-gray-700 text-white px-6 py-2 rounded-md hover:bg-gray-900 transition"
          onClick={() => navigate("/home")}
        >
          Go Back
        </button>
      </div>
      </div>
    </section>
  );
};

export default Services;
