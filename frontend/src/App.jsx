// import React from "react";
// import { Routes, Route, useLocation  } from "react-router-dom";

// import Hero from "./components/Hero/Hero";
// import Banner from "./components/Banner/Banner";
// import Subscribe from "./components/Subscribe/Subscribe";
// import Footer from "./components/Footer/Footer";

// import Courses from "./components/Courses/Courses";
// import AllCourses from "./components/Courses/AllCourses";
// import CourseDetails from "./components/Courses/CourseDetails";

// import Books from "./components/Books/Books";
// import AllBooks from "./components/Books/AllBooks";
// import BookDetails from "./components/Books/BookDetails";

// import AuthForm from "./components/Login/AuthModal";
// import About from "./components/About/About";
// import Services from "./components/Services/Services";

// import AdminLogin from "./components/Admin/AdminLogin";
// import AdminPanel from "./components/admin/AdminPanel";

// import Profile from "./components/Profile/Profile";
// import Cart from "./components/Cart/Cart";
// import OrderSummary from "./components/Order/OrderSummary";
// import Payment from "./components/Payment/Payment";
// import Receipt from "./components/Receipt/Receipt";

// const App = () => {
//   const location = useLocation();
//   const isSpecialPage = [
//     "/all-courses",
//     "/all-books",
//     "/about",
//     "/services",
//   ].includes(location.pathname);
//   // const isAllCoursesPage = location.pathname === '/all-courses';
//   // const isAllBooksPage = location.pathname === '/all-books';
//   // const isAboutPage = location.pathname === '/about';
//   // const isServicesPage = location.pathname === '/services';

//   return (
//     <>    
//     <main className="overflow-x-hidden bg-white text-dark">
//         {!isSpecialPage && (
//           <>
//             <Hero />
//             <div id="courses-section">
//               <Courses />
//             </div>
//             <Banner />
//             <div id="books-section">
//               <Books />
//             </div>
//             <Subscribe />
//             <Footer />
//      </>
//       )}
      
//       <Routes>
        
//         <Route path="/courses" element={<Courses />} />
//         <Route path="/all-courses" element={<AllCourses />} />
//         <Route path="/banner" element={<Banner />} />
//         <Route path="/books" element={<Books />} />
//         <Route path="/all-books" element={<AllBooks />} />
//         <Route path="/subscribe" element={<Subscribe />} />
//         <Route path="/footer" element={<Footer />} />
//         <Route path="/auth" element={<AuthForm />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/services" element={<Services />} /> 
//         <Route path="/admin-login" element={<AdminLogin />} />
//         <Route path="/admin" element={<AdminPanel />} />
//         <Route path="/course-details/:id" element={<CourseDetails />} />
//         <Route path="/book-details/:id" element={<BookDetails />} />

//         {/* <Route path="/footer" element={<Footer/> } /> */}
//       </Routes>    
//     </main>
//     </>
//   );
// };

// export default App;




import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Hero from "./components/hero/Hero";
import Banner from "./components/banner/Banner";
import Subscribe from "./components/subscribe/Subscribe";
import Footer from "./components/footer/Footer";

import Courses from "./components/courses/Courses";
import AllCourses from "./components/courses/AllCourses";
import CourseDetails from "./components/courses/CourseDetails";

import Books from "./components/books/Books";
import AllBooks from "./components/books/AllBooks";
import BookDetails from "./components/books/BookDetails";

import AuthForm from "./components/login/AuthModal";
import About from "./components/about/About";
import Services from "./components/services/Services";

import AdminLogin from "./components/admin/AdminLogin";
import AdminPanel from "./components/admin/AdminPanel";

import Profile from "./components/Profile/Profile";
import Cart from "./components/Cart/Cart";
import OrderSummary from "./components/Order/OrderSummary";
import Payment from "./components/Payment/Payment";
import Receipt from "./components/Receipt/Receipt";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <main className="overflow-x-hidden bg-white text-dark">
      {/* ✅ Only show these on homepage */}
      {isHomePage && (
        <>
          <Hero />
          <div id="courses-section">
            <Courses />
          </div>
          <Banner />
          <div id="books-section">
            <Books />
          </div>
          <Subscribe />
          <Footer />
           <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
      />
        </>
      )}

      {/* ✅ Page routes */}
      <Routes>
        {/* Course pages */}
        <Route path="/all-courses" element={<AllCourses />} />
        <Route path="/course-details/:id" element={<CourseDetails />} />

        {/* Book pages */}
        <Route path="/all-books" element={<AllBooks />} />
        <Route path="/book-details/:id" element={<BookDetails />} />

        {/* Other sections (only if you want them to be navigable separately) */}
        <Route path="/auth" element={<AuthForm />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />

        {/* Admin */}
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminPanel />} />

         {/* ✅ Protected user routes */}
        <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />
        <Route path="/order-summary" element={<ProtectedRoute><OrderSummary /></ProtectedRoute>} />
        <Route path="/payment" element={<ProtectedRoute><Payment /></ProtectedRoute>} />
        <Route path="/receipt" element={<ProtectedRoute><Receipt /></ProtectedRoute>} />
        
      </Routes>
    </main>
  );
};

export default App;
