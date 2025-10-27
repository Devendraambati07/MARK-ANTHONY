import React from "react";
import img from "../assets/burj.webp";

const About = () => {
  return (
    <div
      id="about-us"
      className=" h-auto md:min-h-screen 2xl:min-h-0  z-20 px-4 py-14 font-exodus w-full flex flex-col justify-center items-center text-white relative md:px-12"
      style={{ overflow: "hidden" }}
    >
      {/* Heading Section */}
      <div className="z-10 text-center md:max-w-6xl">
        <h1 className="text-2xl  md:text-4xl font-bold pb-6 text-[#FFCA66] Abril tracking-[6px]">
          ABOUT US
        </h1>
        <p className="text-base  font-normal text-[#FFFFFF] mt-6 leading-12 mb-4 tracking-wider">
          We are <span className="text-[#FFCA66] font-semibold">Mark Anthony</span> — 
          a dedicated real estate advisory firm with deep expertise in the 
          Bangalore market <br/> and an expanding footprint in Pune and Dubai.
        </p>
      </div>

      {/* Content Section */}
      <div className="z-10 grid grid-cols-1 md:grid-cols-2 md:max-w-6xl gap-8 justify-center items-center  mt-12">
        <p className="text-xl md:text-5xl  font-semibold leading-snug text-start md:text-left tracking-wider">
          Our Foundation<br/> Rests on Three <br/> ‘T’ Principles
        </p>

        <div className="space-y-8 text-start">
          <div className="space-y-5 ">
            <p className="flex items-center gap-2 text-base font-medium tracking-[0.5px]">
              <img src={img} alt="" className="w-5 h-5" /> 01 Trust
            </p>
            <p className="text-sm opacity-90 tracking-widest">
              We build lasting relationships by keeping our promises and delivering consistent results.
            </p>
          </div>

          <div className="space-y-3">
            <p className="flex items-center gap-2 text-base font-medium tracking-[0.5px]">
              <img src={img} alt="" className="w-5 h-5" /> 02 Transparency
            </p>
            <p className="text-sm opacity-90 tracking-widest">
              Every step, every detail — clear, open, and honest communication is at the heart of what we do.
            </p>
          </div>

          <div className="space-y-3">
            <p className="flex items-center gap-2 text-base font-medium tracking-[0.5px] ">
              <img src={img} alt="" className="w-5 h-5" /> 03 Truth
            </p>
            <p className="text-sm opacity-90 tracking-widest">
              We believe in presenting facts as they are, ensuring our customers make informed, confident decisions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
