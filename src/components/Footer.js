import React from "react";
import logo from '../images/logo.jpeg'
import yearslogo from '../images/yearsImage.svg'
import skypeImage from '../images/skypeImage.svg'
import emailImage from '../images/emailImage.svg'
import wtspImage from '../images/wtspImage.svg'
import flagImage from '../images/flagImage.svg'

const Footer = () => {
    const contentData = [
        {img:skypeImage, name:"Skype", content:"Support@techworsys.com" },
        {img:emailImage, name:"Email Us", content:"Support@techworsys.com" },
        {img:wtspImage, name:"WhatsApp", content:"+91 8076773067" },
        {img:flagImage, name:"INDIA No.", content:"+91 8076773067" },
    ]
  return (
    <footer className="bg-gray-50 text-gray-800 text-sm">
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-10 border-b">
        {/* Logo + description */}
        <div>
          <img src={logo} alt="Logo" className="w-32 mb-4 mix-blend-difference border border-green-500" />
          <p className="text-gray-600">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
        </div>

        {/* Our Services */}
        <div>
          <h4 className="font-semibold mb-4">Our Services</h4>
          <ul className="space-y-2">
            <li>Mobile App Development</li>
            <li>Website Development Services</li>
            <li>Digital Marketing Services</li>
            <li>E-commerce Website Development</li>
            <li>Search Engine Optimization</li>
            <li>UI/UX Designing</li>
          </ul>
        </div>

        {/* Technologies */}
        <div>
          <h4 className="font-semibold mb-4">Technologies</h4>
          <ul className="space-y-2">
            <li>WordPress</li>
            <li>Shopify</li>
            <li>Laravel</li>
            <li>PHP</li>
            <li>Node.js</li>
            <li>Flutter</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-semibold mb-4">Company</h4>
          <ul className="space-y-2">
            <li>About us</li>
            <li>Career</li>
            <li>Privacy Policy</li>
            <li>Contact Us</li>
            <li>Testimonials</li>
            <li>Hire Resources</li>
          </ul>
        </div>
      </div>

      {/* Contact section */}
      <div className="flex gap-20 flex-wrap" >
        {/* Get in Touch */}
        <div  className="flex  items-center justify-between gap-6 flex-wrap">
            {
                contentData.map((item)=> 
                <div className="flex items-center">
                    <img src={item.img} />
                    <div className="flex flex-col">
                        <span className="font-semibold">
                            {item.name}
                        </span>
                        <span className="font-semibold">
                            {item.content}
                        </span>
                    </div>
                </div>)
            }
        </div>


        {/* Experience */}
        <div className="text-center">
            <img src={yearslogo} />
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-xs py-4 border-t text-gray-500">
        ©2025 Techworysys.com
      </div>
    </footer>
  );
};

export default Footer;
