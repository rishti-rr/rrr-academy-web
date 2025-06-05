import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { IoIosArrowRoundForward } from "react-icons/io";
import Back from "../../assets/back.svg";
import HeroPng from "../../assets/hero1.png";

const Hero = () => {
  const navigate = useNavigate();

  const scrollToCourses = () => {
    const coursesSection = document.getElementById("courses-section");
    if (coursesSection) {
      coursesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToBooks = () => {
    const booksSection = document.getElementById("books-section");
    if (booksSection) {
      booksSection.scrollIntoView({ behavior: "smooth" });
    }
  };
 
  return (
    <section className="bg-emerald-100 relative overflow-hidden">
      <Navbar />
      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative z-10">
  
        <div className="flex flex-col justify-center py-14 md:py-0">
          <div className="text-center md:text-left space-y-10 lg:max-w-[400px] relative z-10">
            <h1
              className="text-3xl lg:text-5xl font-bold !leading-snug"
            >
              Let's enrich your knowledge with {" "}
              <span className="text-primary">RRR</span> Academy
            </h1>
            <div
              className="flex justify-center md:justify-start gap-3"
            >
              <button 
              className="primary-btn flex items-center gap-2 group"
              onClick={scrollToCourses}
              >
                Get Courses
                
                <IoIosArrowRoundForward className="text-xl group-hover:translate-x-2 group-hover:-rotate-45 duration-300" />
              </button>
              <button 
              className="primary-btn flex items-center gap-2 group"
              onClick={scrollToBooks}
              >
                Get Books
                <IoIosArrowRoundForward className="text-xl group-hover:translate-x-2 group-hover:-rotate-45 duration-300" />
              </button>
            </div>
          </div>
        </div>
 
        <div className="flex justify-center items-center ">
          <img
            src={HeroPng}
            alt=""
            className="w-[800px] xl:w-[1200px] relative z-10 drop-shadow"
          />
          <img
            src={Back}
            alt=""
            className=" absolute -bottom-39 w-[800px] md:w-[1200px] z-0 hidden md:block"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
