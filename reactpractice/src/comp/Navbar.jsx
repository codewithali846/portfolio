import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IoCartOutline } from "react-icons/io5";
import { FaBars, FaTimes } from "react-icons/fa";

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
    { path: "/contacts", label: "CONTACTS" }
  ];

  return (
    <div className="fixed top-0 left-0 z-50 w-full backdrop-blur-md bg-black/70 border-b border-blue-900 shadow-lg transition-all duration-300">
      <div className="flex justify-between items-center h-20 px-6 lg:px-12">

        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
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
        <nav className="hidden lg:flex gap-8 text-sm font-semibold">
          {navLinks.map((link) => (
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
        <div className="flex items-center gap-4">
          {/* Cart */}
          <div className="relative bg-white h-10 w-10 rounded-full flex items-center justify-center shadow-md cursor-pointer hover:scale-110 transition-transform duration-300">
            <IoCartOutline className="text-2xl text-black" />
          </div>

          {/* Buy Now */}
          <Link
            to="/buynow"
            className="px-4 h-10 flex items-center justify-center text-sm font-semibold text-white rounded-md bg-gradient-to-br from-blue-900 to-blue-300 shadow-lg hover:scale-105 transition-transform duration-300"
          >
            BUY NOW
          </Link>

          {/* Mobile Hamburger */}
          <div
            className="lg:hidden h-10 w-10 flex items-center justify-center rounded-full shadow-md bg-white cursor-pointer hover:scale-110 transition-transform duration-300"
            onClick={toggleMenu}
          >
            {showMenu ? <FaTimes className="text-2xl text-black" /> : <FaBars className="text-2xl text-black" />}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-20 left-0 h-[calc(100vh-5rem)] w-3/4 sm:w-1/2 bg-gradient-to-br from-blue-900 to-blue-300 p-6 flex flex-col gap-6 transform transition-transform duration-300 z-40 ${
          showMenu ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            onClick={() => setShowMenu(false)}
            className={`text-lg font-medium transition-all duration-300 ${
              location.pathname === link.path
                ? "text-white font-bold"
                : "text-black hover:text-white"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
