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
      {/* Side Navbar for desktop */}
      <div className="fixed top-0 left-0 h-full w-20 lg:w-64 bg-gradient-to-b from-blue-900 to-blue-300 shadow-lg flex flex-col items-center lg:items-start p-4 z-50">
        {/* Logo */}
        <div className="flex flex-col items-center lg:items-start mb-8 cursor-pointer">
          <img
            src="/photo.jpg"
            alt="logo"
            className="h-16 w-16 rounded-full object-cover border-2 border-white shadow-md mb-2"
          />
          <span className="hidden lg:block text-xl font-bold text-white">
            FULLSTACK
          </span>
        </div>

        {/* Desktop Links */}
        <nav className="flex flex-col gap-6">
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={`transition-all duration-300 px-2 py-1 rounded-md w-full text-center lg:text-left ${
                location.pathname === link.path
                  ? "bg-white/20 text-white font-bold"
                  : "text-white hover:bg-white/10"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <div
          className="lg:hidden mt-auto mb-4 cursor-pointer"
          onClick={() => setShowMenu(true)}
        >
          <FaBars className="text-2xl text-white" />
        </div>
      </div>

      {/* Mobile Sliding Side Menu */}
      {showMenu && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={() => setShowMenu(false)}
          ></div>

          {/* Sliding Menu */}
          <div className="fixed top-0 left-0 h-full w-3/4 max-w-sm bg-gradient-to-b from-blue-900 to-blue-300 z-50 p-6 flex flex-col gap-8 transform transition-transform duration-300">
            {/* Close button */}
            <div
              className="self-end cursor-pointer"
              onClick={() => setShowMenu(false)}
            >
              <FaTimes className="text-3xl text-white" />
            </div>

            {/* Mobile Links */}
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
