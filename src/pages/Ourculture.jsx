import React from "react";

import bg from "../assets/Bg-1.webp";


const Ourculture=()=>{
    return(<>
    <section id="ourculture" style={{backgroundImage:`url(${bg})`,backgroundSize: "cover", backgroundPosition:'center', width:"100%", height:"auto"}}>
        <div className="flex flex-col space-y-3 justify-center items-center py-6 md:py-20 px-4">
        <p className="font-normal text-xl md:text-4xl text-[#FFCA66] Abril">OUR CULTURE</p>
        <p className="text-base md:text-xl font-normal text-[#FFFFFF] max-w-5xl text-center">At Mark Anthony, Our Culture is built on a Foundation of Integrity, Collaboration and Growth.

Every member of our organization is driven by a shared commitment to Honesty, Hard work and delivering real values.

Our Team blends market expertise with a people first approach, ensuring every interaction is guided by respect and purpose.

At the Core, We don't Just builds deals, we build Trust, Relationship and Long lasting Impact.

</p>
<div className="grid md:grid-flow-col gap-6 w-full mt-6 ">
    <div className="grid justify-center gap-4 items-center">
    <p className="font-normal text-xl md:text-5xl text-[#FFCA66]">1,000 +</p>
    <p className="font-normal text-sm md:text-base text-[#FFFFFF] ">Happy costumers</p>
    </div>
        <div className="grid gap-4">
    <p className="font-normal text-xl md:text-5xl text-[#FFCA66]">10,00,000 +</p>
    <p className="font-normal text-sm md:text-base text-[#FFFFFF] ">SQ. Ft. sold</p>
    </div>
        <div className="grid gap-4">
    <p className="font-normal text-xl md:text-5xl text-[#FFCA66]">3 +</p>
    <p className="font-normal text-sm md:text-base text-[#FFFFFF] ">Cities served</p>
    </div>
    
</div>
<p className="font-normal text-sm md:base text-white pt-5">Ranked Among India's <span className="text-[#FFCA66] text-base md:text-xl">Top 10</span> Performing Real Estate Brokerage Firm</p>
        </div>
    </section>
    </>)
}

export default Ourculture; 