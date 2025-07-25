import React from 'react';
import { Link }  from 'react-router-dom'
import techlogo from '../images/techLogo.svg'

const Header = () => {
  return (
    <div>
    <header className="bg-white shadow-sm py-4 px-8 flex justify-between items-center flex-wrap">
      {/* Logo */}
      <div className="text-2xl font-bold">
        <Link to='/'>
        <img src={techlogo} />
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex mt-10 md:flex flex-wrap gap-8 items-center font-medium text-black">
        <a href="#" className="hover:text-blue-600 transition">Service</a>
        <a href="#" className="hover:text-blue-600 transition">Industries</a>
        <Link to='/blog'  className="hover:text-blue-600 transition">Blog</Link>
        <Link to='/aboutus'  className="hover:text-blue-600 transition">About Us</Link>
       <button className="bg-yellow-300 hover:bg-yellow-400 transition text-black font-medium py-2 px-6 rounded-full">
          <Link to='/contactus'> Contact us</Link>
        </button>
        
      </nav>

      {/* Mobile Hamburger Menu (Optional, can be added later) */}
    </header>
          <div
  className="w-full h-[4px]"
  style={{
    borderBottom: "4px solid",
    borderImageSource:
      "linear-gradient(90deg, #FAD171 0%, #FF9F9F 43.75%, #0B52D0 100%)",
    borderImageSlice: 1,
  }}
></div>
    </div>
  );
};

export default Header;
