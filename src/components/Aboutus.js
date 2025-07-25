import React from "react";
import aboutusImage from '../images/aboutusImage.svg'
import aboutImg  from '../images/contentImage.svg'
import visionImg  from '../images/visionImage.svg'
import developmentImg  from '../images/developmentImage.svg'
import FaqSection from './Faqsection'
import LetsTalk from "./LetsTalk";


const About = () => {

const MissionVisionSection = () => {
  return (
    <section className="bg-[#f9f9f9] py-16 px-4 md:px-12">
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Networsys is committed to delivering
        </h2>
        <p className="text-gray-500 mt-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's standard dummy text ever since the
        </p>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 mb-10">
        {/* Left Image */}
        <div className="w-full lg:w-1/2">
          <img
            src={aboutImg} // replace with your image path
            alt="Team"
            className="rounded-2xl border-8 border-[#ffecec] object-cover w-[622px] h-[439px]"
          />
        </div>

        {/* Right Text */}
        <div className="w-full lg:w-1/2">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Our <span className="bg-gradient-to-r from-[#F84E37] to-[#333333] bg-clip-text text-transparent">Mission</span>
          </h3>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley. Lorem Ipsum is simply dummy text of the.
          </p>
          <button className="bg-yellow-300 hover:bg-yellow-400 text-gray-800 font-medium py-2 px-6 rounded-full shadow-md transition">
            Let’s talk
          </button>
        </div>
      </div>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        {/* Right Text */}
        <div className="w-full lg:w-1/2">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Our <span className="bg-gradient-to-r from-[#F84E37] to-[#333333] bg-clip-text text-transparent">Vision</span>
          </h3>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley. Lorem Ipsum is simply dummy text of the.
          </p>
          <button className="bg-yellow-300 hover:bg-yellow-400 text-gray-800 font-medium py-2 px-6 rounded-full shadow-md transition">
            Let’s talk
          </button>
        </div>
         {/* Left Image */}
        <div className="w-full lg:w-1/2">
          <img
            src={visionImg} // replace with your image path
            alt="Team"
            className="rounded-2xl object-cover w-[622px] h-[439px]"
          />
        </div>

      </div>
    </section>
  );
};

const DevelopmentProcess = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          Process of Development
        </h2>
        <p className="text-gray-500 mt-2 max-w-xl mx-auto text-sm">
          Your Project is our responsibility : We are the team of technology
          experts that care for your business. We will share our best ideas for
          the amazing project delivery.
        </p>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-6">
     <img src={developmentImg} className="w-[1219px] h-[230px]"/>
      </div>
    </section>
  );
};


  return (
    <div>
    <section className="w-full h-[400px] relative">
      <div className="absolute inset-0 bg-black bg-opacity-70 z-10"  />
      <img
        src={aboutusImage}
        alt="Team working"
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 z-20 flex items-center px-10 lg:px-20">
        <div className="text-white max-w-xl">
          <h2 className="text-4xl font-bold mb-4">About us</h2>
          <p className="text-gray-300 leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an.
          </p>
        </div>
      </div>
    </section>
    <MissionVisionSection />
    <DevelopmentProcess />
    <FaqSection />
    <LetsTalk />
    </div>
  );
};

export default About;
