import React from 'react';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-100 shadow-md px-32">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        {/* <img src="logo.png" alt="Logo" className="w-8 h-8" /> */}
        <h1 className="text-2xl font-bold">Electrux</h1>
      </div>
      {/* Navigation Links */}
      <nav className="flex space-x-6 text-gray-500 items-center">
        <a href="#home" className="hover:text-gray-700 font-bold">Home</a>
        <a href="#about" className="hover:text-gray-700 font-bold">About</a>
        <a href="#products" className="hover:text-gray-700 font-bold">Products</a>
        <a href="#contact" className="hover:text-gray-700 font-bold">Contact</a>
      {/* Shop Button */}
      <button className="bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-900">
        Shop
      </button>
      </nav>

    </header>
  );
};

export default Header;
