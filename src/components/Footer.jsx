import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";

const ExpressInterest = () => {
  return (
    <div className="bg-black text-white py-16 px-12  flex flex-col md:flex-row justify-between items-start md:items-center">
      {/* Left Side */}
      <div className="md:w-1/2 space-y-6 tracking-[2.25px]">
        <div>
          <h2 className="text-[#FFCA66] tracking-[3px]  text-start text-3xl font-serif leading-snug">
            EXPRESS <br /> YOUR <br /> INTEREST
          </h2>
        </div>
        <div className="tracking-[2.25px]">
          <p className="text-sm text-start uppercase font-light">
            Our Address
          </p>
          <p className="text-xs leading-relaxed mt-2 text-start text-gray-300">
            5th floor 304, Oxford Chambers, near Manipal Hospital Internal Road,
            Murgeshpalya, Bengaluru, Karnataka 560017
          </p>
        </div>
<div className="flex space-x-4 gap-2 mt-6 text-[#FFCA66]">
  {[
    { Icon: FaFacebookF },
    { Icon: FaInstagram },
    { Icon: FaYoutube },
    { Icon: FaLinkedinIn },
  ].map(({ Icon }, index) => (
    <div
      key={index}
      className="border-2 border-[#FFCA66] rounded-full w-8 h-8 flex items-center justify-center cursor-pointer hover:bg-[#FFCA66] hover:text-black transition duration-300"
    >
      <Icon className="w-4 h-4 " />
    </div>
  ))}
</div>

      </div>

      {/* Right Side */}
      <div className="md:w-1/2 mt-10 md:mt-0 md:pl-16 w-full">
        <form className="space-y-6 tracking-[1px]">
          <div >
            <label className="block text-sm text-[#FFCA66] text-start mb-2">
              Full Name*
            </label>
            <input
              type="text"
              className="w-full bg-transparent border-b border-[#FFCA66] focus:outline-none text-white py-2"
            />
          </div>
          <div>
            <label className="block text-sm text-start text-[#FFCA66] mb-2">
              Phone Number
            </label>
            <input
              type="text"
              className="w-full bg-transparent border-b border-[#FFCA66] focus:outline-none text-white py-2"
            />
          </div>
          <div>
            <label className="block text-sm text-start text-[#FFCA66] mb-2">
              Email Address*
            </label>
            <input
              type="email"
              className="w-full bg-transparent border-b border-[#FFCA66] focus:outline-none text-white py-2"
            />
          </div>
          <button
            type="submit"
            className="border border-[#FFCA66] text-[#FFCA66] px-6 py-2 mt-4 hover:bg-[#FFCA66] hover:text-black transition duration-300 tracking-[3px]"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ExpressInterest;
