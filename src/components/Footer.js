import React from "react";
import skypeImage from '../images/skypeImage.svg'
import emailImage from '../images/emailImage.svg'
import wtspImage from '../images/wtspImage.svg'
import flagImage from '../images/flagImage.svg'
import techlogo from '../images/techLogo.svg'

const Footer = () => {
  function getInTouch(){
    return(
    <div className="bg-gradient-to-r from-purple-50 to-blue-50  px-4 text-center">

      {/* Contact Items */}
      <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-10 text-sm text-gray-700">
        {/* Skype */}
        <div className="flex-col items-center">
          <div className="text-center">
         <h3 className="text-xl font-semibold text-gray-800">Get In Touch</h3>
          </div>
         <div className="flex items-center  h-[50px]">
            <img src={skypeImage} />
          <div className="text-left">
            <p className="font-semibold">Skype</p>
            <p>Support@networsys.com</p>
          </div>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-center gap-3">
            <img src={emailImage} />
          <div className="text-left">
            <p className="font-semibold">Email Us</p>
            <p>support@networsys.com</p>
          </div>
        </div>

        {/* WhatsApp */}
        <div className="flex items-center gap-3">
             <img src={wtspImage} />
          <div className="text-left">
            <p className="font-semibold">WhatsApp</p>
            <p>+91 123456789</p>
          </div>
        </div>

        {/* India Number */}
        <div className="flex items-center gap-3">
             <img src={flagImage} />
          <div className="text-left">
            <p className="font-semibold">INDIA No.</p>
            <p>+91 123456789</p>
          </div>
        </div>
      </div>
  <div className="border-t my-8"></div>
      {/* Copyright */}
      <p className="text-gray-500 text-sm mt-10">©2025 Networsys.com</p>
    </div>
    )
  }
  return (
    <footer className="bg-gradient-to-r from-purple-50 to-blue-50 text-gray-800 py-10 px-4">
      <div className="grid place-items-center sm:place-items-start md:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {/* Column 1 - Logo + Address */}
        <div className="w-[101%]">
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            <img src={techlogo} />
          </h2>
          <p className="text-sm leading-relaxed text-gray-600 mt-2">
            Office No.-302, 3rd Floor, TOWER–C, Noida One,<br />
            Rasoolpur Nawada, Industrial Area, Sector 62,<br />
            Noida, Uttar Pradesh 201309
          </p>
        </div>

        {/* Column 2 - Services */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Our Services</h3>
          <ul className="space-y-1 text-sm text-gray-600">
            <li>Mobile App Development</li>
            <li>Website Development Services</li>
            <li>Digital Marketing Services</li>
            <li>E-commerce Website Development</li>
            <li>Search Engine Optimization</li>
            <li>UI/UX Designing</li>
          </ul>
        </div>

        {/* Column 3 - Technologies */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Technologies</h3>
          <ul className="space-y-1 text-sm text-gray-600">
            <li>Wordpress</li>
            <li>Shopify</li>
            <li>Laravel</li>
            <li>PHP</li>
            <li>Node JS</li>
            <li>Flutter</li>
          </ul>
        </div>

        {/* Column 4 - Company Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Company</h3>
          <ul className="space-y-1 text-sm text-gray-600">
            <li>About us</li>
            <li>Career</li>
            <li>Privacy Policy</li>
            <li>Contact Us</li>
            <li>Testimonials</li>
            <li>Hire Resources</li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t my-8"></div>

      {/* Contact Bar */}
      {getInTouch()}
    </footer>
  );
};

export default Footer;
