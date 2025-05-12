import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo and Links */}
        <Link to="/" className="text-2xl font-bold text-blue-600">Candy Canvas</Link>
        <div className="flex space-x-4">
          <Link to="/" className="text-gray-600 hover:text-pink-500">Home</Link>
          <Link to="/news/1" className="text-gray-600 hover:text-pink-500">News</Link>
          <Link to="/about" className="text-gray-600 hover:text-pink-500">About</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
