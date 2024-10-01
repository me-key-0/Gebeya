import React from "react";
import { Link } from 'react-router-dom';
import logo from "../../assets/logo for Gebeya.jpg";

const Navbar = () => {
  return (
    <nav className="bg-white p-3">
      <h1 className="text-green-600 text-center mb-4 text-3xl font-bold italic">
        🌿 HERE, YOU CAN FIND EVERYTHING WHAT YOU WANT! 🌿
      </h1>
      <hr />
      <div className="flex items-center justify-between">
        {/* Left Logo and Text */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-16" />
        </div>

        {/* Center Links */}
        <div className="flex space-x-4 text-green-600 font-bold">
          <Link to="/" className="hover:text-gray-300 text-xl">
            Home
          </Link>
          <Link to="/about" className="hover:text-gray-300 text-xl">
            About
          </Link>
          <Link to="/blog" className="hover:text-gray-300 text-xl">
            Blog
          </Link>
          <Link to="/Registration" className="hover:text-gray-300 text-xl">
            Register
          </Link>
        </div>

        {/* Right Buttons */}
        <div className="flex space-x-4 text-green-600 font-semibold">
          <Link to="/signin">
            <button
              className="border border-gray-300 px-8 py-2 rounded-lg hover:bg-green-600 hover:text-white transition duration-300"
              aria-label="Log In"
            >
              Log In
            </button>
          </Link>
          <Link to="/signup">
            <button
              className="border border-gray-300 px-8 py-2 rounded-lg hover:bg-green-600 hover:text-white transition duration-300"
              aria-label="Sign Up"
            >
              Sign Up
            </button>
          </Link>
        </div>
      </div>
      <hr />
    </nav>
  );
};

export default Navbar;