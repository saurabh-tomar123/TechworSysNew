import React from 'react';
import contactGradient from '../images/contactGradient.png'
import phoneLogo  from '../images/phoneLogo.png'
import locationLogo  from '../images/locationLogo.svg'
import emailLogo  from '../images/emailLogo.svg'

const ContactSection = () => {
 
 function ContactUs(){
  return(
    <div className="w-full py-12 px-4 md:px-10 bg-gray-50 flex flex-col items-center" >
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-6">
        {/* Left Box - Contact Info */}
        <div className="bg-white p-6 rounded-md border">
          <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
          <p className="text-gray-500 text-[44px] mb-6">
            We are always ready to help you and answer your questions
          </p>

          <div className=" flex items-center">
            <div className='flex items-baseline flex-wrap gap-3 space-y-6"'>

    
            {/* Phone */}
            <div className="flex items-start gap-3">
              <div className="text-white bg-blue-100 text-blue-600 p-2 rounded-full">
                {/* <FaPhoneAlt /> */}
                <img src={phoneLogo} />
              </div>
              <div>
                <p className="font-medium">Call Us</p>
                <p className="text-gray-600 text-sm">+91 1234567891</p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-3">
              <div className="text-white bg-blue-100 text-blue-600 p-2 rounded-full">
                <img src={locationLogo} />
              </div>
              <div>
                <p className="font-medium">Address</p>
                <p className="text-gray-600 text-sm">
                  Noida One sec62 Noida 201301
                </p>
              </div>
            </div>

            {/* Email 1 */}
            <div className="flex items-start gap-3">
              <div className="text-white bg-blue-100 text-blue-600 p-2 rounded-full">
                <img src={emailLogo} />
              </div>
              <div>
                <p className="font-medium">Email Us</p>
                <p className="text-gray-600 text-sm">Support@networsys.com</p>
              </div>
            </div>
            </div>

          </div>
        </div>

        {/* Right Box - Form */}
        <div className="bg-white p-6 rounded-md border">
          <h2 className="text-xl font-semibold text-blue-900 mb-1">Get In Touch</h2>
          <p className="text-sm text-gray-500 mb-6">
            Fill out the form, and we’ll contact you
          </p>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name*"
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
            <input
              type="text"
              placeholder="Phone Number*"
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
            <input
              type="email"
              placeholder="Email*"
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
            <textarea
              rows="4"
              placeholder="Message*"
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
            ></textarea>

            <button
              type="submit"
              className="bg-yellow-400 text-black font-medium px-6 py-2 rounded-full hover:bg-yellow-500 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
 }
  return (
    <div>
      {/* <Header /> */}
    <div className="w-full py-16 px-6  rounded-md" style={{ backgroundImage: `url(${contactGradient})`  }}>
      <p className="text-[50px] text-black mb-2">Contact Us</p>
      <h1 className="text-3xl  md:text-[80px] font-bold text-black ">
        We are here To{" "}
        <span className="text-yellow-400 text-[80px]">help you</span>
      </h1>
    </div>
    <ContactUs />
    </div>
  );

};

export default ContactSection;
