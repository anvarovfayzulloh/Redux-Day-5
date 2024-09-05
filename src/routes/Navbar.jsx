import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
      <nav className="bg-[#1F2937] p-3 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Link to="/" className="text-white text-2xl font-bold hover:text-gray-300 transition duration-300">
            Home
          </Link>
        </div>

        <div className="flex space-x-6 items-center">
          <Link to="/profile" className="text-gray-300 hover:text-white text-sm transition duration-300 ease-in-out hover:underline" >
            Profile
          </Link>
          <Link to="/login" className="bg-gray-700 hover:bg-gray-600 text-white text-sm px-4 py-2 rounded-full transition duration-300 ease-in-out" >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
