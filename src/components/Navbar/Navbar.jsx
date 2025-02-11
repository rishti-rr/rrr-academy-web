import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Login/firebaseConfig"; 
import { IoClose, IoEye, IoEyeOff } from "react-icons/io5";

const NavbarMenu = [ 
  {
    id: 1,
    title: "Home",
    path: "/",
  },
  {
    id: 2,
    title: "Services",
    path: "/services",
  },
  {
    id: 3,
    title: "About",
    path: "/about",
  },
  {
    id: 4,
    title: "Contact Us",
    path: "/contact",
  },
];

const Navbar = () => {
  const navigate = useNavigate();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);


  const handleAuth = async () => {
    try {
      if (isSignUp) {
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
      setShowAuthModal(false);
      setError("");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <nav className="relative z-20">
      <div className="container py-10 flex justify-between items-center">
        <div>
          <h1 className="font-bold text-2xl">The Hosen Academy</h1>
        </div>
        <div className="hidden lg:block">
          <ul className="flex items-center gap-3">
            {NavbarMenu.map((menu) => (
              <li key={menu.id}>
                <Link to={menu.path} className="inline-block py-2 px-3 hover:text-secondary">
                  {menu.title}
                 
                </Link>
              </li>
            ))}
            {/* <li>
              <button onClick={() => navigate("/about")} className="primary-btn">
                About
              </button>
            </li> */}


            <li>
              <button onClick={() => setShowAuthModal(true)} className="primary-btn">
                Sign In
              </button>
            </li>
          </ul>
        </div>
      </div>
       {showAuthModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-75 backdrop-blur-sm">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
            <button className="absolute top-3 right-3 text-gray-500" onClick={() => setShowAuthModal(false)}>
              <IoClose size={24} />
            </button>
            <h2 className="text-xl font-bold mb-4">{isSignUp ? "Sign Up" : "Sign In"}</h2>
            {error && <p className="text-red-500 text-sm">{error}</p>}
           
            <input type="email" placeholder="Email" 
            className="w-full p-2 border rounded mb-2" 
            value={email} onChange={(e) => setEmail(e.target.value)} 
            />
            <div className="relative w-full">
             
              <input type={showPassword ? "text" : "password"} 
              placeholder="Password" className="w-full p-2 border rounded mb-2" 
              value={password} onChange={(e) => setPassword(e.target.value)} 
            />
              <button className="absolute top-2 right-3 text-gray-500" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <IoEyeOff size={20} /> : <IoEye size={20} />}
              </button>
            </div>
            
            <button onClick={handleAuth} className="w-full bg-green-500 text-white py-2 rounded">
              {isSignUp ? "Sign Up" : "Sign In"}
            </button>
            <p className="text-sm mt-2">
              {isSignUp ? "Already have an account?" : "Don't have an account?"} 
              <span className="text-blue-500 cursor-pointer" onClick={() => setIsSignUp(!isSignUp)}>
                {isSignUp ? " Sign In" : " Sign Up"}
              </span>
            </p>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
