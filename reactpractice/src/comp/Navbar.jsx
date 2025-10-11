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
    <div className="fixed top-0 left-0 w-full z-50">
      {/* Navbar */}
      <div className="flex justify-between items-center h-20 px-6 lg:px-12 backdrop-blur-md bg-black/70 border-b border-blue-900 shadow-lg">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer z-50">
          <img
            src="/photo.jpg"
            alt="logo"
            className="h-16 w-16 rounded-full object-cover object-top border-2 border-white shadow-md transform hover:scale-105 transition duration-300"
          />
          <span className="text-xl font-bold bg-gradient-to-br from-blue-900 to-blue-300 bg-clip-text text-transparent">
            FULLSTACK
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex gap-8">
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-white font-semibold transition-colors duration-300 ${
                location.pathname === link.path ? "font-bold" : "hover:text-blue-200"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <div
          className="lg:hidden h-10 w-10 flex items-center justify-center rounded-full shadow-md bg-white cursor-pointer hover:scale-110 transition-transform duration-300 z-50"
          onClick={() => setShowMenu(true)}
        >
          <FaBars className="text-2xl text-black" />
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

          {/* Sidebar below navbar */}
          <div className="fixed top-20 left-0 h-[calc(100%-5rem)] w-3/4 max-w-sm bg-gradient-to-br from-blue-900 to-blue-300 z-50 p-6 flex flex-col gap-8 transform transition-transform duration-300">
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
    </div>
  );
};

export default Navbar;
