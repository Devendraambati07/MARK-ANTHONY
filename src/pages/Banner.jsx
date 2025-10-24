import React from "react";
import video from "../assets/videoplayback.mp4"


const Banner = () => {
  return (
    <section id="home" className="relative h-[28rem] md:h-[35rem] w-full overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={video} 
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 p-4 md:p-12 space-y-4 flex flex-col justify-center items-center md:items-start h-full">
        <h1 className="text-[#FFCA66] text-3xl md:text-5xl font-bold Abril">MARK ANTHONY</h1>
        <p className="text-white text-lg">WE ARE THE DIFFERENCES</p>
        <p className="text-white text-md">
          At Mark Anthony, Trust isn't Promised, It's Practiced
        </p>
      </div>
    </section>
  );
};

export default Banner;