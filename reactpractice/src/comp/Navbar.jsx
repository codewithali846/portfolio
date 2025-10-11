import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
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
    <>
      {/* Desktop Sidebar */}
      <div className="hidden lg:flex fixed top-0 left-0 h-full w-64 bg-gradient-to-b from-blue-900 to-blue-300 shadow-lg flex-col items-start p-6 z-50">
        {/* Logo */}
        <div className="flex items-center gap-2 mb-8 cursor-pointer">
          <img
            src="/photo.jpg"
            alt="logo"
            className="h-16 w-16 rounded-full object-cover border-2 border-white shadow-md"
          />
          <span className="text-xl font-bold text-white">FULLSTACK</span>
        </div>

        {/* Links */}
        <nav className="flex flex-col gap-2 w-full">
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-4 py-2 rounded-md w-full transition-all duration-300 ${
                location.pathname === link.path
                  ? "bg-white/30 text-white font-bold"
                  : "text-white hover:bg-white/20"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile Navbar */}
      <div className="lg:hidden fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/70 border-b border-blue-900 shadow-lg">
        <div className="flex justify-between items-center h-20 px-6">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer z-50">
            <img
              src="/photo.jpg"
              alt="logo"
              className="h-16 w-16 rounded-full object-cover border-2 border-white shadow-md transform hover:scale-105 transition duration-300"
            />
            <span className="text-xl font-bold bg-gradient-to-br from-blue-900 to-blue-300 bg-clip-text text-transparent">
              FULLSTACK
            </span>
          </div>

          {/* Hamburger */}
          <div
            className="h-10 w-10 flex items-center justify-center rounded-full shadow-md bg-white cursor-pointer hover:scale-110 transition-transform duration-300 z-50"
            onClick={() => setShowMenu(true)}
          >
            <FaBars className="text-2xl text-black" />
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      {showMenu && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={() => setShowMenu(false)}
          ></div>

          {/* Sidebar */}
          <div className="fixed top-0 left-0 h-full w-3/4 max-w-sm bg-gradient-to-b from-blue-900 to-blue-300 z-50 p-6 flex flex-col gap-8 transform transition-transform duration-300">
            {/* Close button */}
            <div
              className="self-end mb-6 cursor-pointer"
              onClick={() => setShowMenu(false)}
            >
              <FaTimes className="text-3xl text-white" />
            </div>

            {/* Links */}
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setShowMenu(false)}
                className={`text-xl font-semibold transition-colors duration-300 ${
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
    </>
  );
};

export default Navbar;
