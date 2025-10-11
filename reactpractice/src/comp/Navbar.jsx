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
      {/* Mobile Hamburger */}
      <div className="fixed top-4 left-4 z-50 lg:hidden">
        <div
          className="h-10 w-10 flex items-center justify-center rounded-full shadow-md bg-white cursor-pointer hover:scale-110 transition-transform duration-300"
          onClick={() => setShowMenu(true)}
        >
          <FaBars className="text-2xl text-black" />
        </div>
      </div>

      {/* Mobile Sliding Sidebar */}
      {showMenu && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={() => setShowMenu(false)}
          ></div>

          {/* Sidebar */}
          <div className="fixed top-0 left-0 h-full w-3/4 max-w-sm bg-gradient-to-b from-blue-900 to-blue-300 z-50 p-6 flex flex-col gap-8 transition-transform duration-300">
            {/* Close button */}
            <div
              className="self-end cursor-pointer"
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
                className={`text-xl font-semibold transition-all duration-300 px-4 py-2 rounded-md w-full ${
                  location.pathname === link.path
                    ? "bg-white/30 text-white font-bold"
                    : "text-white hover:bg-white/20"
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
