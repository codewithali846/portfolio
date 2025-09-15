import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IoCartOutline } from "react-icons/io5";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setShowMenu(!showMenu);

 const navLinks = [
  { path: "/", label: "HOME" },
  { path: "/features", label: "FEATURES" },
  { path: "/portfolio", label: "PORTFOLIO" },
  { path: "/resume", label: "RESUME" },
  { path: "/pricing", label: "PRICING" },
  { path: "/blog", label: "BLOGS" },
  { path: "/contacts", label: "CONTACTS" },
  { path: "/admin", label: "ADMIN" }, // ✅ updated
];


  return (
    <div className="fixed top-0 left-0 z-50 flex justify-between w-full h-20 items-center font-sans px-6 lg:px-12 backdrop-blur-md bg-black/70 border-b border-blue-900 shadow-lg">

      {/* Logo */}
      <div className="flex items-center">
        <img
          src="/photo.jpg"
          alt="logo"
          className="h-14 w-14 rounded-full object-cover object-top border-2 border-white shadow-md cursor-pointer"
        />
        <span className="ml-2 font-bold text-xl cursor-pointer bg-gradient-to-br from-blue-900 to-blue-300 bg-clip-text text-transparent">
          FULLSTACK
        </span>
      </div>

      {/* Desktop Links */}
      <div className="hidden lg:block">
        <nav className="flex gap-6 text-sm font-semibold">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`transition duration-300 ${location.pathname === link.path
                  ? "text-blue-400 border-b-2 border-blue-400 pb-1"
                  : "text-white hover:text-blue-400"
                }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-4">
        <div className="relative bg-neutral-100 h-10 w-10 shadow-md rounded-full flex items-center justify-center hover:scale-110 duration-300 cursor-pointer">
          <IoCartOutline className="text-2xl text-black" />
        </div>
        <div className="w-28 h-10 flex items-center justify-center text-white text-sm font-semibold rounded-md cursor-pointer transition duration-300 hover:scale-105 hover:bg-gradient-to-br from-blue-900 to-blue-300">
          <a href="/buynow">BUY NOW</a>
        </div>

        <div
          className="h-10 w-10 shadow-md rounded-full cursor-pointer bg-white flex items-center justify-center lg:hidden"
          onClick={toggleMenu}
        >
          <FaBars className="text-2xl text-black" />
        </div>
      </div>

      {/* Mobile Menu */}
      {showMenu && (
        <div className="absolute top-20 left-0 h-[calc(100vh-5rem)] w-[70%] sm:w-[50%] bg-gradient-to-br from-blue-900 to-blue-300 flex flex-col z-40 p-6 lg:hidden shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setShowMenu(false)}
              className={`mt-5 text-lg font-medium transition duration-300 ${location.pathname === link.path
                  ? "text-white font-bold"
                  : "text-black hover:text-white"
                }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
