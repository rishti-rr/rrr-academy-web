// import React from "react";
// import { useNavigate } from "react-router-dom";

// const services = [
  // {
  //   id: 1,
  //   title: "Web Development",
  //   description: "Learn to build modern, responsive websites using HTML, CSS, JavaScript, and React.",
  //   image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg",
  // },
  // {
  //   id: 2,
  //   title: "App Development",
  //   description: "Master mobile app development with Flutter and React Native................",
  //   image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&q=60",
  // },
  // {
  //   id: 3,
  //   title: "Digital Marketing",
  //   description: "Understand SEO, content marketing, and social media strategies.",
  //   image: "https://images.unsplash.com/photo-1508830524289-0adcbe822b40?auto=format&fit=crop&w=800&q=60",
  // },
  // {
  //   id: 4,
  //   title: "Graphic Design",
  //   description: "Learn UI/UX, Photoshop, and Illustrator for creative design solutions.",
  //   image: "https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg",
  // },
  // {
  //   id: 5,
  //   title: "Data Science",
  //   description:
  //     "Dive into data analysis, machine learning, and data visualization using Python and R.",
  //   image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg",
  // },
  // {
  //   id: 6,
  //   title: "Cybersecurity",
  //   description:
  //     "Understand ethical hacking, network security, and protecting digital assets.",
  //   image: "https://images.pexels.com/photos/5380641/pexels-photo-5380641.jpeg",
  // },
  // {
  //   id: 7,
  //   title: "AI & Machine Learning",
  //   description:
  //     "Build intelligent systems using neural networks, TensorFlow, and deep learning techniques.",
  //   image: "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg",
  // },
  // {
  //   id: 8,
  //   title: "Cloud Computing",
  //   description:
  //     "Master AWS, Azure, and Google Cloud Platform with real-world deployment projects.",
  //   image: "https://images.pexels.com/photos/6914038/pexels-photo-6914038.jpeg",
  // },
  // {
  //   id: 9,
  //   title: "Blockchain Technology",
  //   description:
  //     "Understand the fundamentals of blockchain, cryptocurrencies, and smart contracts.",
  //   image: "https://images.pexels.com/photos/6771066/pexels-photo-6771066.jpeg",
  // },
  // {
  //   id: 10,
  //   title: "Video Editing",
  //   description:
  //     "Create professional videos using Adobe Premiere Pro and After Effects.",
  //   image: "https://images.pexels.com/photos/7234226/pexels-photo-7234226.jpeg",
  // },
// ];

// const Services = () => {
//    const navigate = useNavigate();
//   return (
//     <section className="min-h-screen bg-gray-100 py-10">
//       <div className="container mx-auto px-6">
//         <h1 className="text-4xl font-bold text-blue-700 text-center mb-8">Our Services</h1>
        
//         {/* Grid Layout */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {services.map((service) => (
//             <div key={service.id} className="bg-white shadow-lg rounded-lg p-6 transition-transform duration-300 hover:scale-105">
//               <img 
//                 src={service.image} 
//                 alt={service.title} 
//                 className="w-full h-48 object-cover rounded-md shadow-md"
//               />
//               <h2 className="text-2xl font-semibold text-gray-800 mt-4">{service.title}</h2>
//               <p className="text-gray-600 mt-2">{service.description}</p>
//               <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-5 rounded-md">
//                 See More
//               </button>
              
//             </div>
//           ))}
         
//         </div>
//         <div className="flex justify-center mt-6">
//         <button
//           className="bg-gray-700 text-white px-6 py-2 rounded-md hover:bg-gray-900 transition"
//           onClick={() => navigate("/home")}
//         >
//           Go Back
//         </button>
//       </div>
//       </div>
//     </section>
//   );
// };

// export default Services;








import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const services = [
  
  {
    id: 1,
    title: "Web Development",
    description: "Learn to build modern, responsive websites using HTML, CSS, JavaScript, and React.",
    image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg",
    details: "You’ll learn frontend and backend development including HTML, CSS, JavaScript, React, Node.js, and MongoDB.",
  },
  {
    id: 2,
    title: "App Development",
    description: "Master mobile app development with Flutter and React Native.",
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&q=60",
    details: "This service includes iOS and Android app development, Flutter fundamentals, state management, Firebase integration, and deployment.",
  },
  {
    id: 3,
    title: "Digital Marketing",
    description: "Understand SEO, content marketing, and social media strategies.",
    image: "https://images.unsplash.com/photo-1508830524289-0adcbe822b40?auto=format&fit=crop&w=800&q=60",
    details: "Covers SEO, SEM, Facebook Ads, Email Marketing, Analytics and growth techniques.",
  },
  {
    id: 4,
    title: "Graphic Design",
    description: "Learn UI/UX, Photoshop, and Illustrator for creative design solutions.",
    image: "https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg",
    details: "You’ll master Adobe Photoshop, Illustrator, Figma for UI/UX, logo design, and branding.",
  },
  {
    id: 5,
    title: "Cybersecurity",
    description: "Protect systems and networks with ethical hacking and penetration testing.",
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg",
    details: "Includes ethical hacking, firewalls, antivirus systems, penetration testing, and securing networks.",
  },
  {
    id: 6,
    title: "Machine Learning",
    description: "Explore AI and ML algorithms using Python, TensorFlow, and Scikit-learn.",
    image: "https://images.pexels.com/photos/5380641/pexels-photo-5380641.jpeg",
    details: "Covers Python for ML, supervised/unsupervised learning, TensorFlow, NLP and deep learning basics.",
  },
  {
    id: 7,
    title: "Data Science",
    description: "Data analysis with Python, R, statistics, and visualization tools.",
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg",
    details: "Includes Python, R, Pandas, NumPy, statistics, Tableau and machine learning basics.",
  },
  {
    id: 8,
    title: "Video Editing",
    description: "Become a professional video editor using Premiere Pro and After Effects.",
    image: "https://images.pexels.com/photos/7234226/pexels-photo-7234226.jpeg",
    details: "Covers cutting, transitions, effects, color grading, audio syncing and exporting videos professionally.",
  },
  {
    id: 9,
    title: "Content Writing",
    description: "Learn professional content creation for blogs, websites, and marketing.",
    image: "https://images.pexels.com/photos/4145191/pexels-photo-4145191.jpeg",
    details: "Training in SEO content, blog writing, ad copywriting, technical and creative writing techniques.",
  },
  {
    id: 10,
    title: "Cloud Computing",
    description: "Master AWS, Azure and cloud infrastructure.",
    image: "https://images.pexels.com/photos/6914038/pexels-photo-6914038.jpeg",
    details: "Topics include AWS EC2, S3, VPC, Azure basics, cloud deployment and architecture.",
  },
];

const Services = () => {
  const [expandedId, setExpandedId] = useState(null);
  const navigate = useNavigate(); 

  const toggleExpand = (id) => {
    setExpandedId((prevId) => (prevId === id ? null : id));
  };

  return (
    <section className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-blue-700 text-center mb-8">Our Services</h1>

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
              <button
                className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-5 rounded-md"
                onClick={() => toggleExpand(service.id)}
              >
                {expandedId === service.id ? "Hide Details" : "See More"}
              </button>

              {expandedId === service.id && (
                <div className="mt-4 p-4 border border-gray-300 rounded-md bg-gray-50 text-sm text-gray-700">
                  {service.details}
                </div>
              )}
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
    </section>
  );
};

export default Services;

