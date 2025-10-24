// App.js or Layout.jsx
import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./pages/Banner";
import About from "./pages/About";
import Ourculture from "./pages/Ourculture";
import "./App.css"
import Partners from "./pages/Partners";
import Properties from "./pages/Properties";
import Joinus from "./pages/Joinus";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <div className="w-full  min-h-screen shadow-sm z-50 ">
        <Navbar />
        <main className="mt-10">
          <Banner/>
          <About />
          <Ourculture/>
          <Partners/>
          <Properties/>
          <Joinus/>
        </main>
        <Footer/>
      </div>
    </div>
  );
};

export default App;
