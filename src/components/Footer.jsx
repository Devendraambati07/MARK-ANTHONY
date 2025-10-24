import React, { useState } from "react";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaInstagram , FaFacebookF } from "react-icons/fa";
import { FaYoutube, FaXTwitter  } from "react-icons/fa6";
import axios from "axios";



const Footer =()=>{
    const [formData, setFormData]=useState({
        name:"",
        phone:"",
        email:"",
    });

    const [loading , setLoading] = useState(false);
    const [success , setSuccess] = useState("");
    
    const handleChange =(e)=>{
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const handleSubmit = async(e)=>{
        e.preventDefault();
        setLoading(true);
        setSuccess("");

        try{
            const response = await axios.post("",formData);
            setSuccess("Form submitted successfully!");
            setFormData({name:"",phone:"",email:""});
        }catch(error){
                  console.error(error);
      setSuccess("Failed to submit form. Try again.");

        }finally{
            setLoading(false);
        }

    };

    return(
        <footer id="contact" className="bg-[#000000] py-5 px-4 md:px-12">
            <p className="font-normal text-lg md:text-3xl text-start text-[#FFCA66] Abril">EXPRESS YOUR INTEREST</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full  ">
                    <div className="w-full md:order-2">
                    <from className="flex flex-col gap-4 max-w-md mx-auto" onSubmit={handleSubmit}>
                        <input  
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Full Name"
                        className=" border-b border-[#FFCA66] text-white py-2 px-1 focus:outline-none"
                        required />
                        <input 
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter Email"
                        className=" border-b border-[#FFCA66] text-white py-2 px-1 focus:outline-none"
                        required />
                        <input
                        type="number"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter Phone Number"
                        className="border-b border-[#FFCA66] text-white py-2 px-1 focus:outline-none"
                        required />
                        <button
                        type="submit"
                        className="border border-[#FFCA66] text-[#FFCA66] py-2 px-6 mt-4 hover:bg-[#FFCA66] hover:text-black transition"
                        disabled={loading}>
                        {loading ? "Submitting..." : "Submit"}
                        </button>
                        {success && <p className="text-green-500 mt-2">{success}</p>}
                    </from>

                </div>
                <div className="grid justify-items-start md:order-1">
                    <p className="font-bold text-lg ms:text-2xl mt-8 Abril">Our Address</p>
                    <p className="font-bold text-base ms:text-xl text-start">5th floor 304, Oxford Chambers, near Manipal Hospital Internal Road, Murugeshpalya, Bengaluru, Karnataka 560017</p>
                    <div className="grid grid-flow-col gap-3">
                        <TiSocialLinkedin  className="border rounded-full p-1 h-8 w-8"/>
                        <FaInstagram className="border rounded-full p-1 h-8 w-8"/>
                        <FaFacebookF className="border rounded-full p-1 h-8 w-8" />
                        <FaYoutube className="border rounded-full p-1 h-8 w-8"/>
                        <FaXTwitter className="border rounded-full p-1 h-8 w-8"/>
                    </div>
                </div>

            </div>
        </footer>
    )
}

export default Footer;