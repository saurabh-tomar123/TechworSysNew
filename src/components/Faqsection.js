import React, { useState } from "react";
import plusImage from '../images/plusIcon.svg'
import minusImage from '../images/minusIcon.svg'
import gardient from '../images/faqGradient.png'


const faqs = [
  {
    question: "What is UX design?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since...",
  },
  {
    question: "What is UX design?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since...",
  },
  {
    question: "What is UX design?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since...",
  },
  {
    question: "What is UX design?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since...",
  },
];

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div  
      style={{
        background: `linear-gradient(135deg, rgba(255,255,255,0.9), rgba(230,240,255,0.9)), url('../Images/gradient.png') no-repeat`,
        backgroundSize: "cover"}}>

    <section
    className="py-20 px-6 md:px-16 lg:px-24"
     style={{
        backgroundImage: `url(${gardient})`,
        width:"100%"
      }}
    >
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Left Text Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 bg-gradient-to-r from-black to-[#68A9F5] bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 mt-4 leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry’s standard dummy text
            ever since the Lorem Ipsum is simply dummy text of the printing and
            typesetting industry.
          </p>
          <button className=" mt-6 px-6 py-2 w-[218.33px] h-[53px] rounded-[32px] border-2 bg-white backdrop-blur-[6px] border-white border-gradient-button text-black font-medium">
  Let’s talk
</button>
        </div>

        {/* Right Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-#F1F4F7 shadow-md rounded-lg p-4 border transition-all duration-300"
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleAccordion(idx)}
              >
                <h3 className="font-semibold text-sm md:text-base">{faq.question}</h3>
                <span className="text-xl text-gray-500">
                  {activeIndex === idx ? <img src={minusImage} /> : <img src={plusImage} />}
                </span>
              </div>
              {activeIndex === idx && (
                <p className=" bg-white mt-2 text-sm text-gray-600 p-5 rounded-[20px]">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>

  );
};

export default FaqSection;
