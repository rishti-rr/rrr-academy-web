import React from "react";
import { useNavigate } from "react-router-dom";
import Img1 from "../../assets/course/Img1.jpg";
import Img2 from "../../assets/course/Img2.jpg";
import Img3 from "../../assets/course/Img3.jpg";
import Img4 from "../../assets/course/Img4.jpg";
import Img5 from "../../assets/course/Img5.jpg";

const CoursesData = [
  {
    id: 1,
    img: Img1,
    title: "IELTS"
  },
 {
    id: 2,
    img: Img2,
    title: "Digital Marketing"
  },
  {
    id: 3,
    img: Img3,
    title: "Flutter"
  },
  {
    id: 4,
    img: Img4,
    title: "Video Editing"
  },
  {
    id: 5,
    img: Img5,
    title: "Web Development"
  },
];

const Courses = () => {
  const navigate = useNavigate();
  
  return (
    <div className=" mb-12 " >
      <div className="container">
     
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm
           text-primary pt-10">
            Trending topics
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Courses
          </h1>
    
        </div>
   
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 
          md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
          
            {CoursesData.map((data) => (
              <div
                data-aos="fade-up"
                // data-aos-delay={data.aosDelay}
                key={data.id}
                className="space-y-3 text-center"
              >
                <img
                  src={data.img}
                  alt={data.title}
                  className="h-[220px] w-[150px] object-cover rounded-md"
                />
                <div>
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className="text-sm text-gray-600">{data.color}</p>
                 
                </div>
              </div>
            ))}
          </div>
      
          <div className="flex justify-center">
            
            <button className="text-center mt-10 cursor-pointer bg-primary text-white py-2 px-6 rounded-md
            hover:bg-primary-dark transition duration-300"
            onClick={() => navigate("/all-courses")}
            >
              View All Courses
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
