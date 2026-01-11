import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">

          {/* LEFT: LOGO */}
          <div className="flex items-center">
            
              <img 
                src={logo} 
                alt="Logo" 
                className="h-16 w-auto"
              /> 
           
            <span className="text-lg font-semibold text-gray-800">
              {/* Replace with image */}
            </span>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex space-x-8 text-[#D8571D]">
            <Link to="/" className="nav-link">HOME</Link>
            <Link to="/academics" className="nav-link">ACADEMICS</Link>
            <Link to="/placements" className="nav-link">PLACEMENTS</Link>
            <Link to="/societies" className="nav-link">SOCIETIES</Link>
            <Link to="/faq" className="nav-link">FAQ</Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="md:hidden">
            <button
              onClick={() => setOpen(!open)}
              className="text-gray-700 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {open ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white border-t">
          <div className="flex flex-col px-4 py-3 space-y-2">
            <Link to="/" className="mobile-link" onClick={() => setOpen(false)}>HOME</Link>
            <Link to="/academics" className="mobile-link" onClick={() => setOpen(false)}>ACADEMICS</Link>
            <Link to="/placements" className="mobile-link" onClick={() => setOpen(false)}>PLACEMENTS</Link>
            <Link to="/societies" className="mobile-link" onClick={() => setOpen(false)}>SOCIETIES</Link>
            <Link to="/faq" className="mobile-link" onClick={() => setOpen(false)}>FAQ</Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
