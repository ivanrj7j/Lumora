import React from "react";
import lumora26 from "../../assets/title.png";
import gurl from "../../assets/gurl.png";
import happy from "../../assets/happy.png";
import ppl from "../../assets/ppl.png";
import DevfolioButton from '../../Components/DevfolioButton';

const Hero = () => {
  return (
    <section
      id="home"
      // CHANGE HERE: min-h-[70svh] is for mobile, md:min-h-[100svh] overrides it for desktop/browser
      className="relative min-h-[70svh] md:min-h-[100svh] flex items-center justify-center overflow-hidden"
    >
      {/* Decorative Circles and Rectangles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large Blue Circle - Top Left */}
        <div
          className="absolute rounded-full opacity-40"
          style={{
            top: "5%",
            left: "3%",
            width: "200px",
            height: "200px",
            background: "#4285f4",
            filter: "blur(40px)",
          }}
        />

        {/* Coral Red Rounded Rectangle - Top Center */}
        <div
          className="absolute rounded-[30%] opacity-35"
          style={{
            top: "8%",
            left: "35%",
            width: "180px",
            height: "150px",
            background: "#ff6b6b",
            filter: "blur(35px)",
            transform: "rotate(25deg)",
          }}
        />

        {/* Orange Circle - Overlapping Coral */}
        <div
          className="absolute rounded-full opacity-40"
          style={{
            top: "12%",
            left: "42%",
            width: "140px",
            height: "140px",
            background: "#ff9800",
            filter: "blur(30px)",
          }}
        />

        {/* Teal Circle - Top Right */}
        <div
          className="absolute rounded-full opacity-30"
          style={{
            top: "10%",
            right: "8%",
            width: "120px",
            height: "120px",
            background: "#14b8a6",
            filter: "blur(25px)",
          }}
        />

        {/* Blue Circle - Top Right */}
        <div
          className="absolute rounded-full opacity-25"
          style={{
            top: "15%",
            right: "12%",
            width: "100px",
            height: "100px",
            background: "#4285f4",
            filter: "blur(20px)",
          }}
        />

        {/* Green Rounded Rectangle - Top Right */}
        <div
          className="absolute rounded-[25%] opacity-30"
          style={{
            top: "8%",
            right: "15%",
            width: "80px",
            height: "80px",
            background: "#34a853",
            filter: "blur(18px)",
            transform: "rotate(45deg)",
          }}
        />

        {/* Large Orange Circle - Bottom Right */}
        <div
          className="absolute rounded-full opacity-35"
          style={{
            bottom: "8%",
            right: "5%",
            width: "220px",
            height: "220px",
            background: "#ff9800",
            filter: "blur(45px)",
          }}
        />

        {/* Coral Circle - Overlapping Orange */}
        <div
          className="absolute rounded-full opacity-30"
          style={{
            bottom: "12%",
            right: "8%",
            width: "160px",
            height: "160px",
            background: "#ff6b6b",
            filter: "blur(35px)",
          }}
        />

        {/* Blue Circle - Bottom Left */}
        <div
          className="absolute rounded-full opacity-30"
          style={{
            bottom: "15%",
            left: "8%",
            width: "180px",
            height: "180px",
            background: "#4285f4",
            filter: "blur(40px)",
          }}
        />

        {/* Teal Circle - Center Left */}
        <div
          className="absolute rounded-full opacity-25"
          style={{
            top: "50%",
            left: "2%",
            width: "150px",
            height: "150px",
            background: "#14b8a6",
            filter: "blur(35px)",
            transform: "translateY(-50%)",
          }}
        />

        {/* Pink Rounded Rectangle - Center Right */}
        <div
          className="absolute rounded-[35%] opacity-30"
          style={{
            top: "55%",
            right: "10%",
            width: "160px",
            height: "140px",
            background: "#ec4899",
            filter: "blur(38px)",
            transform: "translateY(-50%) rotate(-20deg)",
          }}
        />

        {/* Light Blue Circle - Center */}
        <div
          className="absolute rounded-full opacity-20"
          style={{
            top: "45%",
            left: "50%",
            width: "100px",
            height: "100px",
            background: "#60a5fa",
            filter: "blur(25px)",
            transform: "translate(-50%, -50%)",
          }}
        />
      </div>

    {/* Girl Image - Desktop Only */}
<img
  src={gurl}
  alt="Illustration"
  className="
    hidden sm:block
    absolute bottom-0 left-0
    w-[260px]
    md:w-[300px]
    lg:w-[340px]
    opacity-95
    pointer-events-none
    select-none
    z-0
  "
/>

{/* People Image - Mobile Only */}
<img
  src={ppl}
  alt="People illustration"
  className="
    sm:hidden
    absolute
    bottom-0
    left-1/2
    -translate-x-1/2
    w-[280px]
    opacity-90
    pointer-events-none
    select-none
    z-0
  "
/>


      {/* Happy Image - Desktop Only */}
      <img
        src={happy}
        alt="Happy illustration"
        className="
    hidden sm:block
    absolute
    right-[-1rem]
    top-1/2
    -translate-y-1/2
    w-[260px]
    md:w-[340px]
    lg:w-[380px]
    opacity-90
    pointer-events-none
    select-none
    z-0
  "
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
        <img
          src={lumora26}
          alt="LUMORA 26"
          className="
            w-[240px]
            sm:w-[420px]
            md:w-[560px]
            lg:w-[640px]
            mb-6
            drop-shadow-lg
          "
        />
        <div className="text-white text-center mb-10">
          <h2 className="text-lg sm:text-xl md:text-2xl font-medium tracking-wider">
            <span className="text-[#39a85b]">DESIGN</span>
            <span className="mx-2 opacity-50 text-black">•</span>
            <span className="text-[#ecb22e]">INNOVATE</span>
            <span className="mx-2 opacity-50 text-black">•</span>
            <span className="text-[#e94235]">ILLUMINATE</span>
          </h2>
        </div>

        <button className="bg-black text-white px-8 py-3 rounded-full text-sm font-medium hover:scale-105 transition-transform shadow-lg">
          Register Now
        </button>
        {/* <DevfolioButton /> */}
      </div>
    </section>
  );
};

export default Hero;