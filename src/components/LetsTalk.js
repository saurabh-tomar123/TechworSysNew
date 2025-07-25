import React from "react";
import { Link } from "react-router-dom";

const LetsTalk = () => {
  return (
    <section className="bg-[#121b1e] py-16 px-4">
      <div className="max-w-6xl mx-auto  text-white rounded-xl p-10 text-center shadow-md"
      style={{
    background: 'linear-gradient(93.33deg, #3D454C 2.34%, #1B262A 51.17%, #424C53 100%)',
  }}>
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Let’s talk</h2>
        <p className="text-gray-300 mb-6 text-sm md:text-base">
          Let’s chat to find out how we can help you achieve your goals.
        </p>
        <button className="bg-yellow-300 hover:bg-yellow-400 text-black font-medium px-6 py-2 rounded-full transition">
         <Link to='/contactus'> Contact us </Link>
        </button>
      </div>
    </section>
  );
};

export default LetsTalk;
