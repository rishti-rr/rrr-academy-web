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
                <Link
                  to="/login"
                  onClick={() => setMenuOpen(false)}
                  className="primary-btn w-full lg:w-auto py-2 px-6 rounded-md bg-blue-600 hover:bg-blue-700 text-white transition"
                >
                  Sign In
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


















