import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import { cutout1, cutout2, cutout3, vignette } from "../assets";
import ImageCarousel from "./Carousel";
import Slider from "./sub-comp/Slider";

const HeroSection = ({ bg, btn }) => {
  return (
    <React.Fragment>
      <div className="w-full h-[84vh] lg:h-[100vh] border border-[#1E1E1E] bg-[#1E1E1E]  ">
        <div className="lg:w-[90%] h-[80vh] lg:h-[80vh] lg:rounded-[50px] mt-[6.5%] mx-auto relative overflow-hidden ">
          <Slider bg={bg} btn={btn} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default HeroSection;
