import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Properties = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 2,
    slidesToScroll: 1, 
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    arrows: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 640, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  const properties = [
    { id: 1, title: "Luxury Villa", location: "Bangalore", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80" },
    { id: 2, title: "Modern Apartment", location: "Hyderabad", image: "https://images.unsplash.com/photo-1599427303058-f04cbcf4756f?auto=format&fit=crop&w=1000&q=80" },
    { id: 3, title: "Beach House", location: "Goa", image: "https://thumbs.dreamstime.com/b/luxury-beach-house-infinity-pool-sunrise-luxurious-beachfront-home-overlooking-ocean-features-modern-architecture-328123347.jpg?w=992" },
    { id: 4, title: "Smart Condo", location: "Mumbai", image: "https://smartcondoplans.com/images/smart-condo-plans/smart-condo-plans_0004_vertica.jpg" },
    { id: 5, title: "Hill View Home", location: "Pune", image: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?auto=format&fit=crop&w=1000&q=80" },
  ];

  return (
    <section id="properties" className="w-full h-auto grid  justify-center items-center  md:min-h-screen 2xl:min-h-0  text-white py-20 overflow-hidden p-4">
      <div className="md:max-w-6xl mx-auto px-4 ">
        <h2 className="text-xl md:text-4xl tracking-widest font-bold text-center text-[#FFCA66] mb-8  Abril">
        PROPERTIES WE WORK
        </h2>

        <Slider {...settings} className="property-slider">
          {properties.map((property) => (
            <div key={property.id} className="px-4">
              <div className="relative group  overflow-hidden   transition-all duration-300 ">
                <div className="rounded-3xl">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-[200px] md:h-[350px] border border-[#FFCA66]/20 object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                </div>
                <div className="  flex flex-col justify-end p-6">
                  <h3 className="text-lg md:text-2xl font-semibold text-white mb-1 tracking-[1px]">{property.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Custom CSS for Slick Dots */}
      <style jsx global>{`
        .slick-dots li button:before {
          font-size: 12px;
          color: white; /* inactive dots */
          opacity: 1;
          border: 1px solid #FFFFFF; 
          border-radius: 50%;
        }
        .slick-dots li.slick-active button:before {
          color: #FFCA66; /* active dot color */
          border: 1px solid #FFCA66; /* gold border for active */
          border-radius: 50%;
        }
      `}</style>
    </section>
  );
};

export default Properties;
