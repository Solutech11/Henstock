import React from "react";
import { motion } from "framer-motion";
import { cutout1, cutout2, cutout3, vignette } from "../assets";
import ImageCarousel from "./Carousel";

const HeroSection = ({ bg, children }) => {
  return (
    <div className={`relative py-24 px-4 sm:px-6 lg:px-8 box-border h-[100vh] text-center overflow-hidden`}>
      <div className="absolute z-[0] inset-0 bg-gradient-to-b from-color-moss to-color-darkGreen opacity-30 w-full h-full"></div>
      <div className="absolute z-[2] inset-0 bg-gradient-to-b from-transparent to-black w-full h-full"></div>
      <img src={vignette} className="absolute z-[2] bg-cover h-full w-full top-0 left-0 opacity-20"/>

      {
        bg.length === 1 ? 
        <div style={{
              backgroundImage: `url(${bg})`,
            }}
            className="absolute inset-0 bg-cover inset-0 z-[0] bg-center bgCarousel"
        > 
        </div> : <ImageCarousel classes="absolute inset-0 z-[0]" images={bg} interval={5000}/>
      }

      <motion.img
        src={cutout1}
        alt=""
        className="absolute z-[1] w-[30%] -top-[80px] -left-[100px] rotate-[162deg]"
        whileHover={{ scale: 1.5 }}
        transition={{ duration: 0.5 }}
      />
      <motion.img
        src={cutout2}
        alt=""
        className="absolute z-[1] w-[50%] right-[200px] bottom-[-360px] -rotate-[5deg]"
        whileHover={{ scale: 1.5 }}
        transition={{ duration: 0.5 }}
      />
      <motion.img
        src={cutout3}
        alt=""
        className="absolute z-[1] w-[50%] -right-20 bottom-[-250px] -rotate-[20deg]"
        whileHover={{ scale: 1.5 }}
        transition={{ duration: 0.5 }}
      />

      {/*  */}
      <div className="relative z-[3] md:max-w-[50%] mx-auto flex flex-col h-[100%] items-center justify-center overflow-hidden">
        {children}
      </div>
    </div>
  );
};

export default HeroSection;
