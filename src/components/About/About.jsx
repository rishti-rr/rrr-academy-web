import React from "react";
import { useNavigate } from "react-router-dom";
import AboutPng from "../../assets/about.png"

const About = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen bg-gray-200 flex items-center justify-center p-6">
      <div className="bg-emerald-100 shadow-lg rounded-lg p-8 max-w-5xl w-full flex flex-col md:flex-row items-center gap-8 transition-all duration-300">
        
        {/* Left Side - Image */}
        <div className="w-full md:w-1/2">
          <img
            src={AboutPng}
            alt="Hosen Academy"
            className="w-full h-80 object-cover rounded-lg shadow-md transform hover:scale-105 transition duration-300"
          />
        </div>

        {/* Right Side - Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-bold text-emerald-700 mb-4">
            About Hosen Academy
          </h1>
          <p className="text-lg text-gray-700 mb-4">
            Hosen Academy is committed to providing top-quality education and resources
            to learners worldwide. Our goal is to make learning accessible, engaging,
            and effective for everyone.
          </p>

          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-emerald-600">Our Mission</h2>
            <p className="text-gray-600">
              To empower learners with the skills and knowledge they need to succeed
              in today's fast-paced world.
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-emerald-600">Our Vision</h2>
            <p className="text-gray-600">
              To create an inclusive, innovative, and inspiring learning environment
              where education is a journey, not a destination.
            </p>
          </div>

          {/* Back to Home Button */}
          <button
            className="mt-4 bg-emerald-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg shadow-md transition duration-300"
            onClick={() => navigate("/")}
          >
            Back to Home
          </button>
        </div>

      </div>
    </section>
  );
};

export default About;
