import React from "react";
import { Routes, Route, useLocation  } from "react-router-dom";
import Hero from "./components/Hero/Hero";
import Banner from "./components/Banner/Banner";
import Subscribe from "./components/Subscribe/Subscribe";
import Footer from "./components/Footer/Footer";
import Courses from "./components/Courses/Courses";
import AllCourses from "./components/Courses/AllCourses";
import Books from "./components/Books/Books";
import AllBooks from "./components/Books/AllBooks";
import AuthForm from "./components/Login/AuthModal";
import About from "./components/About/About";
import Services from "./components/Services/Services";


const App = () => {
  const location = useLocation();
  const isAllCoursesPage = location.pathname === '/all-courses';
  const isAllBooksPage = location.pathname === '/all-books';
  const isAboutPage = location.pathname === '/about';
  const isServicesPage = location.pathname === '/services';

  return (
    <>    
    <main className="overflow-x-hidden bg-white text-dark">
      {!isAllCoursesPage && !isAllBooksPage && !isAboutPage && !isServicesPage &&(
        <>
          <Hero />
          <Courses />
          <Banner />
          <Books />
          <Subscribe />
          <Footer />
        </>
      )}
      
      <Routes>
        
        <Route path="/courses" element={<Courses />} />
        <Route path="/all-courses" element={<AllCourses />} />
        <Route path="/banner" element={<Banner />} />
        <Route path="/books" element={<Books />} />
        <Route path="/all-books" element={<AllBooks />} />
        <Route path="/subscribe" element={<Subscribe />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/auth" element={<AuthForm />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} /> 
      </Routes>    
    </main>
    </>
  );
};

export default App;
