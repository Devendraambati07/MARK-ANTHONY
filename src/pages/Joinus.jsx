import React from "react";
import image1 from "../assets/office2.webp";
import image2 from "../assets/office.webp";
import image3 from "../assets/office1.webp";
import image4 from "../assets/office3.webp";


const Joinus =()=>{

      const Images = [
        { id: 1, image: image1 },
        { id: 2, image: image2 },
        { id: 3, image: image3 },
        { id: 4, image: image4 },
      ];

    return(
    <>
    <section id="joinTheSquad" className="w-full h-auto md:min-h-screen 2xl:min-h-0 flex flex-col justify-center items-center py-10 mb-12 space-y-8 px-4 md:px-10">
      <div className="w-full md:max-w-6xl text-center space-y-4">
        <h2 className="text-xl md:text-4xl text-[#FFCA66] font-semibold Abril  tracking-[6px]">
         JOIN US
        </h2>
        <p className="text-base  font-normal text-[#FFFFFF] mt-6 leading-12 tracking-wider">At Heart, We are People-first organization, Equally committed to our employees and customers. Guided by strong values and integrity, we go beyond advisory services to provide informed, Ethical and Enduring Real estate solutions.        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6 ">
        {Images.map((item) => (
          <img
            key={item.id}
            src={item.image}
            alt={`Partner ${item.id}`}
            className="w-60 h-auto object-contain rounded-xl hover:scale-110 transition-transform duration-300"
          />
        ))}
      </div>

      <button className="font-normal text-base md:text-xl text-[#FFCA66] border-2 border-[#FFCA66] px-4 py-2 tracking-[3px]">Join The Squad</button>
    </section>
    </>
    )
}

export default Joinus;