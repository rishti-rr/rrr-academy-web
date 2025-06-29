// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../Login/firebaseConfig";
// import { IoClose, IoEye, IoEyeOff } from "react-icons/io5";
// import { GiHamburgerMenu } from "react-icons/gi";

// const NavbarMenu = [
//   { id: 1, title: "Home", path: "/" },
//   { id: 2, title: "Services", path: "/services" },
//   { id: 3, title: "About", path: "/about" },
//   { id: 4, title: "Contact Us", path: "#", onClick: "handleScrollToFooter" },
// ];

// const Navbar = () => {
//   const [showAuthModal, setShowAuthModal] = useState(false);
//   const [isSignUp, setIsSignUp] = useState(false);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [menuOpen, setMenuOpen] = useState(false); // new for hamburger toggle
//   const navigate = useNavigate();

//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value);
//     if (e.key === "Enter" && e.target.value.trim() !== "") {
//       const searchQuery = e.target.value.toLowerCase();
//       navigate(`/search/${searchQuery}`);
//       setMenuOpen(false); // close menu on mobile after search
//     }
//   };

//   const handleAuth = async () => {
//     try {
//       if (isSignUp) {
//         await createUserWithEmailAndPassword(auth, email, password);
//       } else {
//         await signInWithEmailAndPassword(auth, email, password);
//       }
//       setShowAuthModal(false);
//       setError("");
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   const handleScrollToFooter = () => {
//     const footer = document.getElementById("footer");
//     if (footer) {
//       footer.scrollIntoView({ behavior: "smooth" });
//       setMenuOpen(false); // close menu on mobile after click
//     }
//   };

//   return (
//     <nav className="relative z-20 bg-white shadow">
//       <div className="container mx-auto py-4 flex justify-between items-center px-4 md:px-0">
//         <div className="pl-6">
//           <h1 className="font-bold text-2xl cursor-pointer text-blue-700" 
//           onClick={() => navigate("/")}>
//             The RRR Academy
//           </h1>
//         </div>

//         {/* Hamburger button - visible on small screens */}
//         <button
//           className="lg:hidden text-3xl text-gray-700"
//           onClick={() => setMenuOpen(!menuOpen)}
//           aria-label="Toggle menu"
//         >
//           {menuOpen ? <IoClose /> : <GiHamburgerMenu />}
//         </button>

//         {/* Desktop & mobile menu */}
//         <div
//           className={`${
//             menuOpen ? "block" : "hidden"
//           } absolute top-full left-0 w-full bg-white shadow-lg lg:static lg:shadow-none lg:w-auto lg:flex lg:items-center`}
//         >
//           <ul className="flex flex-col lg:flex-row lg:items-center gap-3 p-4 lg:p-0">
//             {NavbarMenu.map((menu) => (
//               <li key={menu.id}>
//                 {menu.id === 4 ? (
//                   <button
//                     onClick={handleScrollToFooter}
//                     className="block w-full text-left py-2 px-3 hover:text-blue-600"
//                   >
//                     {menu.title}
//                   </button>
//                 ) : (
//                   <Link
//                     to={menu.path}
//                     onClick={() => setMenuOpen(false)} // close menu on mobile after click
//                     className="block py-2 px-3 hover:text-blue-600"
//                   >
//                     {menu.title}
//                   </Link>
//                 )}
//               </li>
//             ))}

//             <li className="mt-3 lg:mt-0">
//               <input
//                 type="text"
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 onKeyDown={handleSearch}
//                 placeholder="Search courses or books..."
//                 className="w-full lg:w-auto py-2 px-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
//               />
//             </li>

//             <li className="mt-3 lg:mt-0">
//               <button
//                 onClick={() => {
//                   setShowAuthModal(true);
//                   setMenuOpen(false);
//                 }}
//                 className="primary-btn w-full lg:w-auto py-2 px-6 rounded-md bg-blue-600 hover:bg-blue-700 text-white transition"
//               >
//                 Sign In
//               </button>
//             </li>
//           </ul>
//         </div>
//       </div>

//       {/* Auth Modal (unchanged) */}
//       {showAuthModal && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-75 backdrop-blur-sm">
//           <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
//             <button
//               className="absolute top-3 right-3 text-gray-500"
//               onClick={() => setShowAuthModal(false)}
//             >
//               <IoClose size={24} />
//             </button>
//             <h2 className="text-xl font-bold mb-4">{isSignUp ? "Sign Up" : "Sign In"}</h2>
//             {error && <p className="text-red-500 text-sm">{error}</p>}

//             <input
//               type="email"
//               placeholder="Email"
//               className="w-full p-2 border rounded mb-2"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//             <div className="relative w-full">
//               <input
//                 type={showPassword ? "text" : "password"}
//                 placeholder="Password"
//                 className="w-full p-2 border rounded mb-2"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//               <button
//                 className="absolute top-2 right-3 text-gray-500"
//                 onClick={() => setShowPassword(!showPassword)}
//               >
//                 {showPassword ? <IoEyeOff size={20} /> : <IoEye size={20} />}
//               </button>
//             </div>

//             <button
//               onClick={handleAuth}
//               className="w-full bg-green-500 text-white py-2 rounded"
//             >
//               {isSignUp ? "Sign Up" : "Sign In"}
//             </button>
//             <p className="text-sm mt-2">
//               {isSignUp ? "Already have an account?" : "Don't have an account?"}
//               <span
//                 className="text-blue-500 cursor-pointer"
//                 onClick={() => setIsSignUp(!isSignUp)}
//               >
//                 {isSignUp ? " Sign In" : " Sign Up"}
//               </span>
//             </p>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;


// import React, { useState, useEffect, useContext } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { auth } from "../Login/firebaseConfig";
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   onAuthStateChanged,
//   signOut,
// } from "firebase/auth";
// import { IoClose, IoEye, IoEyeOff } from "react-icons/io5";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { AuthContext } from "../../context/AuthContext";

// const NavbarMenu = [
//   { id: 1, title: "Home", path: "/" },
//   { id: 2, title: "Services", path: "/services" },
//   { id: 3, title: "About", path: "/about" },
//   { id: 4, title: "Contact Us", path: "#", onClick: "handleScrollToFooter" },
// ];

// const Navbar = () => {
//   // const [showAuthModal, setShowAuthModal] = useState(false);
  
//   const {
//     user,
//     setUser,
//     showAuthModal,
//     setShowAuthModal,
//   } = useContext(AuthContext);

//   const [isSignUp, setIsSignUp] = useState(false);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [menuOpen, setMenuOpen] = useState(false);
  
//   // const [user, setUser] = useState(null); // ✅ user state
//   const navigate = useNavigate();

//   // ✅ Listen to Firebase Auth state
//   useEffect(() => {
//     const unsub = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//     });
//     return () => unsub();
//   }, [setUser]);

//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value);
//     if (e.key === "Enter" && e.target.value.trim() !== "") {
//       const searchQuery = e.target.value.toLowerCase();
//       navigate(`/search/${searchQuery}`);
//       setMenuOpen(false);
//     }
//   };

//   const handleAuth = async () => {
//     try {
//       if (isSignUp) {
//         await createUserWithEmailAndPassword(auth, email, password);
//       } else {
//         await signInWithEmailAndPassword(auth, email, password);
//       }
//       setShowAuthModal(false);
//       setError("");
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   const handleLogout = async () => {
//     try {
//       await signOut(auth);
//       setUser(null);
//     } catch (err) {
//       console.error("Logout failed", err);
//     }
//   };

//   const handleScrollToFooter = () => {
//     const footer = document.getElementById("footer");
//     if (footer) {
//       footer.scrollIntoView({ behavior: "smooth" });
//       setMenuOpen(false);
//     }
//   };

//   return (
//     <nav className="relative z-20 bg-white shadow">
//       <div className="container mx-auto py-4 flex justify-between items-center px-4 md:px-0">
//         <div className="pl-6">
//           <h1 className="font-bold text-2xl cursor-pointer" onClick={() => navigate("/")}>
//             The RRR Academy
//           </h1>
//         </div>

//         <button
//           className="lg:hidden text-3xl text-gray-700"
//           onClick={() => setMenuOpen(!menuOpen)}
//           aria-label="Toggle menu"
//         >
//           {menuOpen ? <IoClose /> : <GiHamburgerMenu />}
//         </button>

//         <div
//           className={`${
//             menuOpen ? "block" : "hidden"
//           } absolute top-full left-0 w-full bg-white shadow-lg lg:static lg:shadow-none lg:w-auto lg:flex lg:items-center`}
//         >
//           <ul className="flex flex-col lg:flex-row lg:items-center gap-3 p-4 lg:p-0">
//             {NavbarMenu.map((menu) => (
//               <li key={menu.id}>
//                 {menu.id === 4 ? (
//                   <button
//                     onClick={handleScrollToFooter}
//                     className="block w-full text-left py-2 px-3 hover:text-blue-600"
//                   >
//                     {menu.title}
//                   </button>
//                 ) : (
//                   <Link
//                     to={menu.path}
//                     onClick={() => setMenuOpen(false)}
//                     className="block py-2 px-3 hover:text-blue-600"
//                   >
//                     {menu.title}
//                   </Link>
//                 )}
//               </li>
//             ))}

//             <li className="mt-3 lg:mt-0">
//               <input
//                 type="text"
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 onKeyDown={handleSearch}
//                 placeholder="Search courses or books..."
//                 className="w-full lg:w-auto py-2 px-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
//               />
//             </li>
//             {/* ✅ Protected Links */}
//             {user && (
//               <>
//                 {/* <li>
//                   <Link
//                     to="/profile"
//                     className="py-2 px-3 text-green-600 hover:text-green-800"
//                     onClick={() => setMenuOpen(false)}
//                   >
//                     Profile
//                   </Link>
//                 </li> */}
//                 <li>
//                   <Link
//                     to="/cart"
//                     className="py-2 px-3 text-green-600 hover:text-green-800"
//                     onClick={() => setMenuOpen(false)}
//                   >
//                     Cart
//                   </Link>
//                 </li>
//               </>
//             )}
            
//             {/* ✅ Show user email or Sign In */}
//             {user ? (
//               <>
//                 <li className="mt-3 lg:mt-0 text-gray-700 font-semibold">
//                   {user.email.split("@")[0]}
//                 </li>
//                 <li className="mt-3 lg:mt-0">
//                   <button
//                     onClick={handleLogout}
//                     className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
//                   >
//                     Logout
//                   </button>
//                 </li>
//               </>
//             ) : (
//               <li className="mt-3 lg:mt-0">
//                 <button
//                   onClick={() => {
//                     setShowAuthModal(true);
//                     setMenuOpen(false);
//                   }}
//                   className="primary-btn w-full lg:w-auto py-2 px-6 rounded-md bg-blue-600 hover:bg-blue-700 text-white transition"
//                 >
//                   Sign In
//                 </button>
//               </li>
//             )}
//           </ul>
//         </div>
//       </div>

//       {/* ✅ Auth Modal */}
//       {showAuthModal && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-75 backdrop-blur-sm">
//           <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
//             <button
//               className="absolute top-3 right-3 text-gray-500"
//               onClick={() => setShowAuthModal(false)}
//             >
//               <IoClose size={24} />
//             </button>
//             <h2 className="text-xl font-bold mb-4">{isSignUp ? "Sign Up" : "Sign In"}</h2>
//             {error && <p className="text-red-500 text-sm">{error}</p>}

//             <input
//               type="email"
//               placeholder="Email"
//               className="w-full p-2 border rounded mb-2"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//             <div className="relative w-full">
//               <input
//                 type={showPassword ? "text" : "password"}
//                 placeholder="Password"
//                 className="w-full p-2 border rounded mb-2"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//               <button
//                 className="absolute top-2 right-3 text-gray-500"
//                 onClick={() => setShowPassword(!showPassword)}
//               >
//                 {showPassword ? <IoEyeOff size={20} /> : <IoEye size={20} />}
//               </button>
//             </div>

//             <button
//               onClick={handleAuth}
//               className="w-full bg-green-500 text-white py-2 rounded"
//             >
//               {isSignUp ? "Sign Up" : "Sign In"}
//             </button>
//             <p className="text-sm mt-2">
//               {isSignUp ? "Already have an account?" : "Don't have an account?"}
//               <span
//                 className="text-blue-500 cursor-pointer"
//                 onClick={() => setIsSignUp(!isSignUp)}
//               >
//                 {isSignUp ? " Sign In" : " Sign Up"}
//               </span>
//             </p>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;





import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../Login/firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { IoClose, IoEye, IoEyeOff } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { AuthContext } from "../../context/AuthContext";
import { useCart } from "../../context/CartContext"; // ✅ import Cart Context

const NavbarMenu = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "Services", path: "/services" },
  { id: 3, title: "About", path: "/about" },
  { id: 4, title: "Contact Us", path: "#", onClick: "handleScrollToFooter" },
];

const Navbar = () => {
  const {
    user,
    setUser,
    showAuthModal,
    setShowAuthModal,
  } = useContext(AuthContext);

  const { cart } = useCart(); // ✅ cart data
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsub();
  }, [setUser]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    if (e.key === "Enter" && e.target.value.trim() !== "") {
      const searchQuery = e.target.value.toLowerCase();
      navigate(`/search/${searchQuery}`);
      setMenuOpen(false);
    }
  };

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

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (err) {
      console.error("Logout failed", err);
    }
  };

  const handleScrollToFooter = () => {
    const footer = document.getElementById("footer");
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <nav className="relative z-20 bg-white shadow">
      <div className="container mx-auto py-4 flex justify-between items-center px-4 md:px-0">
        <div className="pl-6">
          <h1 className="font-bold text-2xl cursor-pointer" onClick={() => navigate("/")}>
            The RRR Academy
          </h1>
        </div>

        <button
          className="lg:hidden text-3xl text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <IoClose /> : <GiHamburgerMenu />}
        </button>

        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } absolute top-full left-0 w-full bg-white shadow-lg lg:static lg:shadow-none lg:w-auto lg:flex lg:items-center`}
        >
          <ul className="flex flex-col lg:flex-row lg:items-center gap-3 p-4 lg:p-0">
            {NavbarMenu.map((menu) => (
              <li key={menu.id}>
                {menu.id === 4 ? (
                  <button
                    onClick={handleScrollToFooter}
                    className="block w-full text-left py-2 px-3 hover:text-blue-600"
                  >
                    {menu.title}
                  </button>
                ) : (
                  <Link
                    to={menu.path}
                    onClick={() => setMenuOpen(false)}
                    className="block py-2 px-3 hover:text-blue-600"
                  >
                    {menu.title}
                  </Link>
                )}
              </li>
            ))}

            <li className="mt-3 lg:mt-0">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={handleSearch}
                placeholder="Search courses or books..."
                className="w-full lg:w-auto py-2 px-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </li>

            {user && (
              <>
                <li className="relative">
                  <Link
                    to="/cart"
                    onClick={() => setMenuOpen(false)}
                    className="py-2 px-3 text-green-600 hover:text-green-800 relative"
                  >
                    Cart
                    {cart.length > 0 && (
                      <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-2 py-0.5 rounded-full">
                        {cart.length}
                      </span>
                    )}
                  </Link>
                </li>
              </>
            )}

            {user ? (
              <>
                {/* <li className="mt-3 lg:mt-0 text-gray-700 font-semibold">
                  {user.email.split("@")[0]}
                </li> */}
                <li className="mt-3 lg:mt-0 text-gray-700 font-semibold">
                 Hi, {user.email &&
                  user.email
                 .split("@")[0]
                 .split(".")[0] // if email is like john.doe
                 .replace(/^\w/, (c) => c.toUpperCase())}
                </li>

                <li className="mt-3 lg:mt-0">
                  <button
                    onClick={handleLogout}
                    className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <li className="mt-3 lg:mt-0">
                <button
                  onClick={() => {
                    setShowAuthModal(true);
                    setMenuOpen(false);
                  }}
                  className="primary-btn w-full lg:w-auto py-2 px-6 rounded-md bg-blue-600 hover:bg-blue-700 text-white transition"
                >
                  Sign In
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>

      {/* Auth Modal */}
      {showAuthModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-75 backdrop-blur-sm">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
            <button
              className="absolute top-3 right-3 text-gray-500"
              onClick={() => setShowAuthModal(false)}
            >
              <IoClose size={24} />
            </button>
            <h2 className="text-xl font-bold mb-4">{isSignUp ? "Sign Up" : "Sign In"}</h2>
            {error && <p className="text-red-500 text-sm">{error}</p>}

            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 border rounded mb-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="relative w-full">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full p-2 border rounded mb-2"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                className="absolute top-2 right-3 text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <IoEyeOff size={20} /> : <IoEye size={20} />}
              </button>
            </div>

            <button
              onClick={handleAuth}
              className="w-full bg-green-500 text-white py-2 rounded"
            >
              {isSignUp ? "Sign Up" : "Sign In"}
            </button>
            <p className="text-sm mt-2">
              {isSignUp ? "Already have an account?" : "Don't have an account?"}
              <span
                className="text-blue-500 cursor-pointer"
                onClick={() => setIsSignUp(!isSignUp)}
              >
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


















