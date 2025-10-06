import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IoCartOutline } from "react-icons/io5";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "HOME" },
    { path: "/features", label: "FEATURES" },
    { path: "/portfolio", label: "PORTFOLIO" },
    { path: "/resume", label: "RESUME" },
    { path: "/pricing", label: "PRICING" },
    { path: "/blog", label: "BLOGS" },
    { path: "/contacts", label: "CONTACTS" }
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/70 border-b border-blue-900 shadow-lg">
      <div className="flex justify-between items-center h-20 px-6 lg:px-12">

        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer z-50">
          <img
            src="/photo.jpg"
            alt="logo"
            className="h-14 w-14 rounded-full object-cover border-2 border-white shadow-md transform hover:scale-105 transition duration-300"
          />
          <span className="text-xl font-bold bg-gradient-to-br from-blue-900 to-blue-300 bg-clip-text text-transparent">
            FULLSTACK
          </span>
        </div>

        {/* Desktop Links */}
        <nav className="hidden lg:flex gap-8 text-sm font-semibold z-50">
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative transition-all duration-300 px-1 ${
                location.pathname === link.path
                  ? "text-blue-400 after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-blue-400"
                  : "text-white hover:text-blue-400"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-4 z-50">
          <div className="relative bg-white h-10 w-10 rounded-full flex items-center justify-center shadow-md cursor-pointer hover:scale-110 transition-transform duration-300">
            <IoCartOutline className="text-2xl text-black" />
          </div>
          <Link
            to="/buynow"
            className="px-4 h-10 flex items-center justify-center text-sm font-semibold text-white rounded-md bg-gradient-to-br from-blue-900 to-blue-300 shadow-lg hover:scale-105 transition-transform duration-300"
          >
            BUY NOW
          </Link>

          {/* Mobile Hamburger */}
          <div
            className="lg:hidden h-10 w-10 flex items-center justify-center rounded-full shadow-md bg-white cursor-pointer hover:scale-110 transition-transform duration-300"
            onClick={() => setShowMenu(true)}
          >
            <FaBars className="text-2xl text-black" />
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {showMenu && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={() => setShowMenu(false)}
          ></div>

          {/* Sliding Menu */}
          <div className="fixed top-0 left-0 h-full w-3/4 max-w-sm sm:w-1/2 bg-gradient-to-br from-blue-900 to-blue-300 z-50 p-6 flex flex-col gap-6 transform transition-transform duration-300">
            {/* Close button */}
            <div
              className="self-end mb-6 cursor-pointer"
              onClick={() => setShowMenu(false)}
            >
              <FaTimes className="text-2xl text-white" />
            </div>

            {/* Links */}
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setShowMenu(false)}
                className={`text-lg font-medium transition-colors duration-300 ${
                  location.pathname === link.path
                    ? "text-white font-bold"
                    : "text-white hover:text-blue-200"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
