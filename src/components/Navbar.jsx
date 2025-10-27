import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../assets/Logo.webp"

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  const menuItems = [
    { name: "HOME", link: "#home" },
    { name: "ABOUT US", link: "#about-us" },
    { name: "OUR CULTURE", link: "#ourculture" },
    { name: "PARTNERS", link: "#partners" },
    { name: "PROPERTIES", link:"#properties"},
    { name: "JOIN THE SQUAD", link: "#joinTheSquad" },
  ];

  const handleScroll = (e, link) => {
    e.preventDefault();
    const target = document.querySelector(link);
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setOpen(false);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 } 
    );

    menuItems.forEach((item) => {
      const section = document.querySelector(item.link);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="w-full bg-[#1D1D1D] max-w-[1440px] mx-auto fixed top-0 z-50 shadow-lg">
      <div className="flex items-center justify-between px-6 md:px-12 py-3">
        <img src={Logo} alt="Mark Anthony" className="w-16 h-12" />

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex gap-8">
            {menuItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.link}
                  onClick={(e) => handleScroll(e, item.link)}
                  className={`text-sm font-normal tracking-[2.25px] font-Exodus relative transition-all duration-500 pb-1 Abril
                    ${
                      activeSection === item.link.slice(1)
                        ? "text-white after:w-full"
                        : "text-[#FFCA66] hover:text-white after:w-0"
                    }
                    after:absolute  after:left-0 after:-bottom-[2px] after:h-[2px] after:bg-[#FFCA66] after:transition-all after:duration-500
                  `}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          className="lg:hidden flex flex-col gap-[5px] p-2 transition relative z-50"
        >
          {open ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-[#FFCA66]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <>
              <span className="h-[2px] w-6 bg-[#FFCA66]"></span>
              <span className="h-[2px] w-6 bg-[#FFCA66]"></span>
              <span className="h-[2px] w-6 bg-[#FFCA66]"></span>
            </>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-[#1D1D1D] z-40 flex flex-col justify-start items-start space-y-6 text-center"
          >
            <ul className="flex flex-col gap-4 text-base font-normal text-start p-4">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.link}
                    onClick={(e) => handleScroll(e, item.link)}
                    className={`font-Exodus transition relative pb-1 Abril
                      ${
                        activeSection === item.link.slice(1)
                          ? "text-white after:w-full"
                          : "text-[#FFCA66] hover:text-white after:w-0"
                      }
                      after:absolute after:left-0 after:-bottom-[2px] after:h-[2px] after:bg-[#FFCA66] after:transition-all after:duration-500
                    `}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
