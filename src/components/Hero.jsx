import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { EffectFade, Pagination, Autoplay } from "swiper/modules";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link as ScrollLink } from "react-scroll";
import { CustomBtn } from "./Button";
import { cutout1, cutout2, cutout3, vignette } from "../assets";
import ImageCarousel from "./Carousel";
import Slider from "./sub-comp/Slider";

const HeroSection = ({ bg = [], title = "", subTitle = "", btn, children }) => {
  console.log("passed prop:", title, subTitle);

  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 50 });
    }
  }, [controls, inView]);

  return (
    <React.Fragment>
      <div className="w-full h-[84vh] hidden lg:block lg:h-[100vh] border border-[#1E1E1E] bg-[#1E1E1E]  ">
        <div className="lg:w-[90%] h-[80vh] lg:h-[80vh] lg:rounded-[50px] mt-[6.5%] mx-auto relative overflow-hidden ">
          <Swiper
            direction={"vertical"}
            slidesPerView={1}
            spaceBetween={30}
            effect={"fade"}
            loop={true}
            pagination={{
              clickable: true,
            }}
            centeredSlides={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[EffectFade, Pagination, Autoplay]}
            className="mySwiper"
          >
            {bg.map((image, index) => (
              <SwiperSlide key={index} className="relative">
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white lg:px-4">
                  <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={controls}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="lg:max-w-[967px] mx-auto lg:p-10 grid gap-3"
                  >
                    <p className="font-[Averia Serif Libre] font-bold leading-[1.1] text-5xl lg:text-6xl text-[#ffffff] text-center">
                      {title}
                    </p>
                    <p className="font-[DM Sans] font-medium text-[#ffffff] text-lg text-center">
                      {subTitle}
                    </p>

                    {btn && (
                      <div className="w-full mt-5 flex justify-center items-center">
                        <ScrollLink
                          to="card-section"
                          spy={true}
                          smooth={true}
                          duration={1000}
                        >
                          <CustomBtn title="Learn more" />
                        </ScrollLink>
                      </div>
                    )}
                  </motion.div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div
        className={`relative py-24 block lg:hidden px-4 sm:px-6 lg:px-8 box-border h-[100vh] text-center overflow-hidden`}
      >
        <div className="absolute z-[0] inset-0 bg-gradient-to-b from-color-moss to-color-darkGreen opacity-30 w-full h-full"></div>
        <div className="absolute z-[2] inset-0 bg-gradient-to-b from-transparent to-black w-full h-full"></div>
        <img
          src={vignette}
          className="absolute z-[2] bg-cover h-full w-full top-0 left-0 opacity-20"
        />

        {bg.length === 1 ? (
          <div
            style={{
              backgroundImage: `url(${bg})`,
            }}
            className="absolute inset-0 bg-cover z-[0] bg-center bgCarousel"
          ></div>
        ) : (
          <ImageCarousel
            classes="absolute inset-0 z-[0]"
            images={bg}
            interval={5000}
          />
        )}

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
    </React.Fragment>
  );
};

export default HeroSection;
