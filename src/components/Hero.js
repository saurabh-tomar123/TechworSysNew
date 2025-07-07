import React, { useState } from 'react';
import heroImage from '../images/heroImage.svg'; // Replace with your image path
import gradient from '../images/gradient.png'
import aboutImg  from '../images/contentImage.svg'
import iconImage from '../images/iconImage.svg';
import arrow from '../images/arrow.svg';     // top-down arrow
import curvedArrow from '../images/curvedArrow.svg';
import btnArrow from '../images/btnArrow.svg'

import reactIcon from '../images/reactIcon.png';
import angularIcon from '../images/angularIcon.png';
import jsIcon from '../images/javascriptIcon.png';
import htmlIcon from '../images/htmlIcon.png';
import nodeIcon from '../images/nodejsIcon.png';
import phpIcon from '../images/phpIcon.png';
import csharpIcon from '../images/csharpIcon.png';
import pythonIcon from '../images/pythonIcon.png';
import educationImage from '../images/phoneImage.svg';

import mobileIcon from '../images/mobileImage.svg';
import webIcon from '../images/webImage.svg';
import designIcon from '../images/penImage.svg';
import marketingIcon from '../images/marketingImage.svg';
import FaqContactSection from './Faqsection';
import ContactSection from './ContactSection';
import rectangleImage from '../images/rectangleImage.svg'
import diamondImage from '../images/diamondImage.svg'

const Hero = () => {
  const [activeTab, setActiveTab] = useState('Education');

const features = [
  {
    title: "1st Demo in 8 Days",
    desc: "Get your first working Demo within 8 working days of the project kickoff."
  },
  {
    title: "Weekly Project Scrum Calls",
    desc: "We ensure that you are updated with the project status on a weekly basis."
  },
  {
    title: "Transfer Of IP",
    desc: "You are the owner of the product Intellectual Property Rights."
  },
  {
    title: "Free Support",
    desc: "We provide free 90 Days Technical Support to ensure the stability product."
  },
  {
    title: "On Time. On Budget",
    desc: "Set your project delivery when expected and within your budget."
  },
  {
    title: "Risk Free Trial",
    desc: "You are the owner of the product Intellectual Property Rights."
  },
];

    const AboutUs = () => {
  return (
    <section className="bg-[#f9f9f9] py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Image */}
        <div>
          <img
            src={aboutImg}
            alt="Team Working"
            className="rounded-md shadow-md"
          />
        </div>

        {/* Right: Text */}
        <div>
          <h4 className="text-red-500 font-semibold mb-2 uppercase tracking-wide">
            Welcome to Company
          </h4>
          <h2 className="text-3xl font-bold text-black mb-4">About Us</h2>
          <p className="text-gray-700 mb-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
          <p className="text-gray-700 mb-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley.
          </p>
          <button className="bg-yellow-300 hover:bg-yellow-400 text-black font-medium px-6 py-2 rounded-full">
            Let’s talk
          </button>
        </div>
      </div>

      {/* Below Section */}
      <div className="mt-20 text-center max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-extrabold text-black mb-4">
          Your Mobile App project in the safe hands:
        </h2>
        <p className="text-gray-600">
          Your Project is our responsibility : We are the team of technology experts that care
          for your business. We will share our best ideas for the amazing project delivery.
        </p>
      </div>
    </section>
  );
};

const FeatureGrid = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((item, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-lg p-6 flex items-start gap-4 shadow-sm hover:shadow-md transition"
          >
            <img src={iconImage} alt="Feature Icon" className="w-10 h-10" />
            <div>
              <h3 className="text-lg font-semibold text-black mb-1">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const IdeaCTA = () => {
  return (
    <section className="bg-[#1a1f20] py-20 px-4 md:px-10">
      <div className="max-w-5xl mx-auto 
        bg-custom-gradient border-grayBorder text-white rounded-xl px-6 md:px-12 py-10 relative border border-gray-700">
    {/* bg-gradient-to-r from-[#1e2426] to-[#1a1f20] */}

        {/* Top Button */}
        <div className="absolute -top-6 left-6 bg-black border border-gray-600 rounded-full w-[163px] h-12 flex items-center justify-center" style={{ background: `linear-gradient(93.33deg, #3D454C 2.34%, #1B262A 51.17%, #424C53 100%)` }}>
          <img src={arrow} alt="down-arrow" className="w-4 h-4" />
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
          {/* Left Text */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-extrabold leading-snug">
              HAVE A GREAT IDEA?<br /> LET’S DISCUSS IT!
            </h2>
          </div>

          {/* Right Arrow + Button */}
          <div className="flex items-center md:items-end gap-3">
            <img src={curvedArrow} alt="curve arrow" className="w-32 md:w-48 -mt-4" />
            <button className="bg-yellow-300 hover:bg-yellow-400 text-black font-medium px-6 py-2 rounded-full">
              Contact us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const TechnologyStack = () => {
    const frontendStack = [
  { name: 'React', icon: reactIcon },
  { name: 'Angular', icon: angularIcon },
  { name: 'Java Script', icon: jsIcon },
  { name: 'HTML 5', icon: htmlIcon },
];

const backendStack = [
  { name: 'Node js', icon: nodeIcon },
  { name: 'PHP', icon: phpIcon },
  { name: 'C#', icon: csharpIcon },
  { name: 'Python', icon: pythonIcon },
];
  return (
    <section className="bg-white py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto text-center flex flex-col items-center">
        <h2 className="text-3xl font-bold text-black mb-4">Technology Stack</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Your Project is our responsibility : We are the team of technology experts that care for your business.
          We will share our best ideas for the amazing project delivery.
        </p>

        <div className="flex gap-12 text-left flex-wrap">
          {/* Stack Descriptions */}
          <div className='w-[56%]'>
            <h3 className="text-lg font-semibold mb-2">Mobile Development Stack</h3>
            <p className="text-gray-700 mb-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
              make a type specimen book.
            </p>

            <div className="bg-black text-white p-4 rounded-lg w-[48]">
              <h3 className="text-lg font-semibold mb-2">Web Development Stack</h3>
              <p className="text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                make a type specimen book.
              </p>
            </div>
          </div>

          {/* Icons Grid */}
          <div className="flex flex-col items-center">
            {/* Frontend */}
            <div>
              <h4 className="text-md font-semibold mb-3">Frontend</h4>
              <div className="flex grid-cols-2 gap-4">
                {frontendStack.map((tech, idx) => (
                  <div key={idx} className="flex flex-col items-center">
                    <img src={tech.icon} alt={tech.name} className="w-115 h-115 mb-2" />
                    <span className="text-sm font-medium text-gray-800">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div>
              <h4 className="text-md font-semibold mb-3">Backend</h4>
              <div className="flex grid-cols-2 gap-4">
                {backendStack.map((tech, idx) => (
                  <div key={idx} className="flex flex-col items-center">
                    <img src={tech.icon} alt={tech.name} className="w-115 h-115 mb-2" />
                    <span className="text-sm font-medium text-gray-800">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const IndustriesWeServe = () => {
    const industries = [
  'Education',
  'Healthcare',
  'E Commerce',
  'Restaurant',
  'Real Estate',
  'FinTech',
  'Transport',
  'Sports',
];

  return (
    <section className="bg-black text-white py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col items-center relative">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 w-[926px]">
          Industries We Serve as a Custom <span className="text-yellow-400">Mobile Application Development</span> Company
        </h2>
        <img src={rectangleImage} className='absolute -right-[72px] -top-[10px]'/>
        <img src={rectangleImage} className='absolute -left-[80px] top-[34px] w-[252px] h-[192px]'/>


        {/* Main Card */}
        <div className="mt-12 bg-[#2b2b2b] rounded-xl flex flex-col md:flex-row overflow-hidden  z-[9999]">
          {/* Left Tabs */}
          <div className="bg-[#1f1f1f] min-w-[180px] flex flex-col">
            {industries.map((item, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(item)}
                className={`text-left px-6 py-4 text-sm font-medium ${
                  activeTab === item ? 'bg-yellow-400 text-black' : 'text-white hover:bg-[#333]'
                } transition`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Right Content */}
          <div className="flex-1 flex flex-col md:flex-row justify-between items-center gap-6 p-8">
            <div className="max-w-xl">
              <h3 className="text-xl font-semibold mb-4">
                Empowering {activeTab} with Smart & Scalable Mobile Solutions
              </h3>
              <p className="text-sm text-gray-300 mb-6">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book.
              </p>
              <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-2 rounded-full text-sm font-medium">
                Request A Quote
              </button>
            </div>

            {/* Image */}
            <div>
              <img src={educationImage} alt={activeTab} className="max-w-[240px] md:max-w-[280px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const OurServices = () => {
    
const services = [
  {
    title: 'Mobile Development',
    desc: 'Build seamless, feature-rich cross-platform mobile apps.',
    icon: mobileIcon,
    quote: true,
  },
  {
      title: 'Designing',
      desc: 'Build seamless, feature-rich cross-platform mobile apps.',
      icon: designIcon,
      quote: false,
    },
    {
        title: 'Digital Marketing',
        desc: 'Build seamless, feature-rich cross-platform mobile apps.',
        icon: marketingIcon,
        quote: false,
    },
    {
        title: 'Web Development',
        desc: 'Build seamless, feature-rich cross-platform mobile apps.',
        icon: webIcon,
        quote: true,
    },
];

  return (
    <section className="py-20 px-6 md:px-16 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-black mb-3">Our Services</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Your Project is our responsibility : We are the team of technology experts that care for your
          business. We will share our best ideas for the amazing project delivery.
        </p>

        {/* Service Cards  grid md:grid-cols-2 grid-cols-1 gap-6*/}
        <div className="flex gap-[10px] flex-wrap">
          {/* Large Card */}
          <div className="bg-black text-white rounded-xl p-6 flex flex-col justify-between min-h-[320px]">
                <div className='flex justify-between flex-wrap'>
            <img src={services[0].icon} alt="Mobile" className="w-[175px] h-[175px] mb-6" />
            <img src={diamondImage} alt="Mobile" className="w-[100%] h-[100%] mb-6"  style={{maxWidth:"233px", maxHeight:"233px"}} />

                </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">{services[0].title}</h3>
              <p className="text-sm mb-4">{services[0].desc}</p>
              {services[0].quote && (
                <button className="bg-white text-black px-5 py-2 rounded-full text-sm font-medium inline-flex items-center gap-1 hover:bg-gray-100 transition">
                  Get a Quote <img src={btnArrow} className='h-[17px] w-[18px]'/>
                </button>
              )}
            </div>
          </div>

          {/* Right Grid (2 cards stacked) */}
          <div className="flex flex-col gap-6">
            <div className="bg-black text-white rounded-xl p-6 flex justify-between ">
            <div className='text-left flex flex-col justify-between '>
                <div>
              <h3 className="text-lg font-semibold">{services[3].title}</h3>
              <p className="text-sm">{services[3].desc}</p>
                </div>
                <div>
                <button className="bg-white text-black mt-4 px-4 py-1.5 rounded-full text-sm font-medium inline-flex items-center gap-1 hover:bg-gray-100 transition">
                      Get a Quote <img src={btnArrow} className='h-[17px] w-[18px]' />
                    </button>
                </div>
            </div>
            <img src={services[3].icon} alt={services[3].title} className="w-152 h-152 mb-6 self-end" />

          </div>
          <div className='flex gap-6'>
            {[services[1], services[2]].map((service, index) => (
              <div
                key={index}
                className="bg-black text-left text-white rounded-xl p-6 flex flex-col align-start min-h-[150px]"
              >
                <img src={service.icon} alt={service.title} className="w-115 h-115 mb-4 self-start" />

                <div>
                  <h3 className="text-lg font-semibold">{service.title}</h3>
                  <p className="text-sm">{service.desc}</p>
                 
                </div>
              </div>
            ))}
          </div>
            
          </div>

        </div>
      </div>
    </section>
  );
};

  return (
    <div className='bg-black' style={{ backgroundImage: `url(${heroImage})`  }}>
    <section className="relative text-white py-20 px-6 md:px-16 lg:px-24 h-[703px]"  style={{ backgroundImage: `url(${gradient})`,  }}>
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 max-w-7xl mx-auto" >
        {/* Left: Text content */}
        <div className="z-10 relative">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            We Build Mobile <br /> and Web Apps
          </h1>
          <p className="text-lg mt-6 text-gray-300 max-w-lg">
            For Startups & SMEs. Business-results oriented and AI-powered 🚀
          </p>
          
        </div>

      </div>
    </section>
      <AboutUs />
      <FeatureGrid />
      <IdeaCTA />
      <TechnologyStack />
      <IndustriesWeServe />
      <OurServices />
      <FaqContactSection />
      <ContactSection />
    </div>
  );
};

export default Hero;
