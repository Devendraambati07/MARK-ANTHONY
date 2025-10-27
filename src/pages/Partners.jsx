import React from "react";
import image1 from "../assets/Mask-group.webp";
import image2 from "../assets/Mask-group-1.webp";
import image3 from "../assets/Mask-group-2.webp";
import image4 from "../assets/Mask-group-3.webp";
import image5 from "../assets/Mask-group-4.webp";
import image6 from "../assets/Adarsh.webp";
import image7 from "../assets/Lodha.webp";
import image8 from "../assets/Sowparnika.webp";
import bg from "../assets/Bg-2.webp";

const Partners = () => {
  const Images = [
    { id: 1, image: image1 },
    { id: 2, image: image2 },
    { id: 3, image: image3 },
    { id: 4, image: image4 },
    { id: 5, image: image5 },
    { id: 6, image: image6 },
    { id: 7, image: image7 },
    { id: 8, image: image8 },
  ];

  return (
    <section id="partners" className="w-full flex flex-col h-auto md:min-h-screen 2xl:min-h-0 justify-center items-center py-10 space-y-8 px-4 md:px-12" >
      {/* Header Section */}
      <div className=" space-y-4 md:max-w-6xl">
        <h1 className="text-xl md:text-4xl text-[#FFCA66] font-semibold Abril tracking-[6px]">
          PARTNERS
        </h1>
        <p className="text-base  font-normal text-[#FFFFFF]  text-center leading-12 mt-6  tracking-wider">
          Built on Professionalism, Accountability, and Collaboration, we take pride in operating with integrity and precision—ensuring every partnership creates measurable value and mutual growth.
        </p>
        <p className="text-base  font-normal text-[#FFFFFF]  text-center leading-12 mt-5 tracking-wider">
          We don't just execute sales we build long-term partnerships founded on trust, performance, and a shared vision of success.
        </p>
      </div>

      {/* Partners Logos */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 justify-center items-center gap-12 mt-6 md:max-w-6xl">
        {Images.map((item) => (
          <img
            key={item.id}
            src={item.image}
            alt={`Partner ${item.id}`}
            className="w-44 md:h-28 object-contain rounded-xl hover:scale-110 transition-transform duration-300"
          />
        ))}
      </div>
    </section>
  );
};

export default Partners;
