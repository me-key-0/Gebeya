import React from "react";
import logo from "../assets/logo for Gebeya.jpg";

const Navbar = () => {
  return (
    <nav className="bg-[white] p-3">
      {" "}
      {/* #4C3A3E*/}
      {/* Centered Text */}
      <h1 className="text-[green] text-center mb-4 text-3xl font-bold italic text-shadow:0 0 5px rgba(255, 255, 255, 0.7) ">
        🌿 HERE, YOU CAN FIND EVERYTHING WHAT YOU WANT! 🌿
      </h1>
      <hr />
      <hr />
      <div className="flex items-center justify-between">
        {/* Left Logo and Text */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-16" />
          {/* <span className="text-white text-lg">GEBEYA</span> */}
        </div>

        {/* Center Links */}
        <div className="flex space-x-4 text-[green] font-bold ">
          <a href="/" className="hover:text-gray-300 text-xl">
            Home
          </a>
          <a href="/about" className="hover:text-gray-300  text-xl">
            About
          </a>
          <a href="/blog" className="hover:text-gray-300  text-xl">
            Blog
          </a>
          <a href="/contact" className="hover:text-gray-300  text-xl">
            Contact
          </a>
        </div>

        {/* Right Buttons */}
        <div className="flex space-x-4 text-[green] font-semibold">
          <button className=" border border-[silcon] px-8 py-2 rounded-lg hover:bg-[green] hover:text-white transition duration-300">
            Log In
          </button>
          <button className=" border border-[silcon] px-8 py-2 rounded-lg hover:bg-[green] hover:text-white transition duration-300">
            Sign Up
          </button>
        </div>
      </div>
      <hr />
      <hr />
      <hr /> <hr />
    </nav>
  );
};

export default Navbar;
