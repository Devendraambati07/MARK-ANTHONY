import React from "react";
import img from "../assets/burj.webp"

const About = () => {

  return (
    <div
       id="about-us"
      className="h-auto z-20 px-4 py-14 font-exodus w-full flex flex-col justify-center items-center text-white relative md:p-12"
      style={{ position: "relative", overflow: "hidden" }}
    >
      <div className="z-10 grid justify-center items-center  w-full">
        <h1 className="text-xl md:text-4xl font-bold pb-8 text-[#FFCA66] Abril ">ABOUT US</h1>
        <p className="text-sm md:text-xl mb-2 md:max-w-5xl" >We are Mark Anthony - a dedicated real estate advisory firm with deep expertise in bangalore marketand an expanding footprint in Pune and Dubai</p>
      </div>
     <div className="z-10 grid grid-cols-1 md:grid-cols-2 gap-4 justify-center items-center md:max-w-4xl">
            <p className="text-base md:text-4xl ">Our Foundation Rests on three ‘T’ Principles</p>
            <div className=" space-y-3">
                <p className="flex flex-row gap-2 text-base "><img src={img} alt="" className="w-6 h-6"/> 01 Trust</p>
                <p className="text-sm Montserrat  ">We build lasting relationship by keeping our Promises and delivering consistent results</p>
                <p className="flex flex-row gap-2"><img src={img} alt="" className="w-6 h-6"/> 02 Transparancy</p>
                <p className="text-sm Montserrat">Every Step, Every Detail - Clear , Open and honest Communication is at the heart</p>
                <p className="flex flex-row gap-2"><img src={img} alt="" className="w-6 h-6"/> 03 Truth</p>
                <p className="text-sm Montserrat">We Belive in presenting facts as they are ensuring our customers make informed, confident decisions.</p>
 
            </div>
     </div>

    </div>
  );
};

export default About;
