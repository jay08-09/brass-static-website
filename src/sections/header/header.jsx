import React from 'react';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (

    <header className="flex justify-between items-center p-4 bg-gray-100 shadow-md sm:px-6 md:px-8 lg:px-10 xl:px-24">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src="src/assets/v-cone-logo.png" alt="v-cone" className="w-18 h-14" />
        <h1 className="text-2xl font-bold">V-CONE</h1>
      </div>

      {/* Hamburger Icon (Mobile) */}
      <button
        className="block md:hidden text-gray-800"
        onClick={toggleMenu}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Desktop Menu (Visible on large screens) */}
      <nav className="md:flex hidden items-center space-x-6 text-gray-400">
        <a href="#home" className="hover:text-gray-700">Home</a>
        <a href="#about" className="hover:text-gray-700">About</a>
        <a href="#products" className="hover:text-gray-700">Products</a>
        <a href="#contact" className="hover:text-gray-700">Contact</a>
        {/* <button className="bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-900">
          Shop
        </button> */}
        <button className="bg-purple-500 text-white px-4 py-2 rounded-full hover:bg-gray-900">
          Shop
        </button>
      </nav>

      {/* Mobile Menu (Visible on small screens when isMenuOpen is true) */}
      <div
        className={`lg:hidden ${isMenuOpen ? "block" : "hidden"} absolute top-0 left-0 w-full bg-gray-100 p-4 shadow-md transition-all duration-300 ease-in-out`}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-800"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Mobile Menu Links */}
        <a href="#home" className="block py-2 text-gray-800 hover:text-gray-700">Home</a>
        <a href="#about" className="block py-2 text-gray-800 hover:text-gray-700">About</a>
        <a href="#products" className="block py-2 text-gray-800 hover:text-gray-700">Products</a>
        <a href="#contact" className="block py-2 text-gray-800 hover:text-gray-700">Contact</a>
        <button className="w-full bg-gray-800 text-white py-2 rounded-full hover:bg-gray-900">
          Shop
        </button>
      </div>
    </header>
  );
};

export default Header;
