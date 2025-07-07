import React from 'react';

const ContactSection = () => {
  return (
    <section
      className="py-16 px-6 md:px-16 lg:px-24 flex gap-1"
      style={{
        backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/your-image.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl mx-auto text-white w-[40%]">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Get in Touch to Discuss <br /> Your Idea
        </h2>

        <p className="text-sm md:text-base mb-8 max-w-2xl text-gray-300">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries.
        </p>
        </div>
        {/* Form */}
        <div className="max-w-7xl ml-auto text-white w-[50%]">
        <form className="grid md:grid-cols-2 gap-4 text-black">
          <input
            type="text"
            placeholder="Name"
            className="p-3 rounded-md w-full"
          />
          <input
            type="email"
            placeholder="Email"
            className="p-3 rounded-md w-full"
          />

          {/* Phone Input with Country Code */}
          <div className="flex items-center bg-white rounded-md p-2">
            <span className="mr-2 text-sm text-gray-600">🇮🇳 +91</span>
            <input
              type="text"
              placeholder="Enter Contact Number"
              className="outline-none flex-1 text-sm"
            />
          </div>

          <input
            type="text"
            placeholder="Interested Services"
            className="p-3 rounded-md w-full"
          />

          {/* Full width textarea */}
          <textarea
            placeholder="Write Query"
            rows="4"
            className="p-3 rounded-md md:col-span-2 w-full"
          ></textarea>

          {/* Submit button */}
          <div className="md:col-span-2">
            <button
              type="submit"
              className="bg-white text-black px-8 py-2 rounded-full font-medium hover:bg-gray-200 transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
