import React from "react";
import { FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";

const Footer = () => {
  return (
    <footer className="py-28 bg-[#b9eee4]">
      <div
        className="container"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-4">
       
          <div className="space-y-4 max-w-[300px]">
            <h1 className="text-2xl font-bold">The Hosen Academy</h1>
            <p className="text-dark2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis dicta iusto
              consequatur pariatur blanditiis doloribus molestias voluptatibus nulla cupiditate
              reprehenderit!Quas, rem itaque sequi accusamus laudantium unde repellendus ad asperiores?
            </p>
          </div>
         
          <div className="grid grid-cols-2 gap-10">
            <div className="space-y-4">
              <h1 className="text-2xl font-bold">Courses</h1>
              <div className="text-dark2">
                <ul className="space-y-2 text-lg">
                  <li className="cursor-pointer hover:text-secondary duration-200">
                    Web Development
                  </li>
                  <li className="cursor-pointer hover:text-secondary duration-200">
                    Digital Marketing
                  </li>
                  <li className="cursor-pointer hover:text-secondary duration-200">
                    Flutter
                  </li>
                  <li className="cursor-pointer hover:text-secondary duration-200">
                    Video Editing
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <h1 className="text-2xl font-bold">Links</h1>
              <div className="text-dark2">
                <ul className="space-y-2 text-lg">
                  <li className="cursor-pointer hover:text-secondary duration-200">
                    Home
                  </li>
                  <li className="cursor-pointer hover:text-secondary duration-200">
                    Services
                  </li>
                  <li className="cursor-pointer hover:text-secondary duration-200">
                    About
                  </li>
                  <li className="cursor-pointer hover:text-secondary duration-200">
                    Contact
                  </li>
                </ul>
              </div>
            </div>
          </div>
       
          <div className="space-y-4 max-w-[300px]">
            <h1 className="text-2xl font-bold">Get In Touch</h1>
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Enter your email"
                className="p-3 rounded-s-xl bg-white w-full py-4 focus:ring-0 focus:outline-none placeholder:text-dark2"
              />
              <button className="bg-primary text-white font-semibold py-4 px-6 rounded-e-xl">
                Go
              </button>
            </div>
          
            <div className="flex space-x-6 py-3">
              {/* <a href="https://chat.whatsapp.com/FQSKgJ5f1eIAhlyF5sVym0"> */}
              <a href="https://wa.me/8801716065125">
                <FaWhatsapp className="cursor-pointer hover:text-primary hover:scale-105 duration-200" />
              </a>
              <a href="https://www.instagram.com/_ar_riyad/">
                <FaInstagram className="cursor-pointer hover:text-primary hover:scale-105 duration-200" />
              </a>
             
              <a href="https://www.youtube.com/@hosenacademy">
                <FaYoutube className="cursor-pointer hover:text-primary hover:scale-105 duration-200" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
