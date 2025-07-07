import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm py-4 px-8 flex justify-between items-center">
      {/* Logo */}
      <div className="text-2xl font-bold">
        <span className="text-teal-400">DE</span>
        <span className="text-blue-600">SIGN</span>
      </div>

      {/* Navigation */}
      <nav className="hidden md:flex gap-8 items-center font-medium text-black">
        <a href="#" className="hover:text-blue-600 transition">Service</a>
        <a href="#" className="hover:text-blue-600 transition">Industries</a>
        <a href="#" className="hover:text-blue-600 transition">Blog</a>
        <a href="#" className="hover:text-blue-600 transition">About Us</a>
        <button className="bg-yellow-300 hover:bg-yellow-400 transition text-black font-medium py-2 px-6 rounded-full">
          Contact us
        </button>
      </nav>

      {/* Mobile Hamburger Menu (Optional, can be added later) */}
    </header>
  );
};

export default Header;
