import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white shadow-inner py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-gray-500">© 2025 Candy Canvas. All rights reserved.</p>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-600">Follow us on social media</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="#" className="text-blue-600 hover:text-pink-500 text-xl">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-blue-600 hover:text-pink-500 text-xl">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-pink-600 hover:text-blue-500 text-xl">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
