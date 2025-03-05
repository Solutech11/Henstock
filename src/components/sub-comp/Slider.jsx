import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { EffectFade, Pagination, Autoplay } from "swiper/modules";
import { CustomBtn } from "../Button";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link as ScrollLink } from "react-scroll";

const Slider = ({ bg, btn }) => {
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
              className="w-full h-[100%] object-cover"
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
                <p className="font-[Averia Serif Libre] font-bold leading-[1.1] text-6xl text-[#ffffff] text-center">
                  Nourishing Lives, Empowering Farmers.
                </p>
                <p className="font-[DM Sans] font-medium text-[#ffffff] text-lg text-center">
                  Providing quality agro-commodity trade, food production, and
                  modern farm solutions.
                </p>

                {btn && (
                  <div className="w-full mt-5 flex justify-center items-center">
                    <ScrollLink
                      to="card-section"
                      spy={true}
                      smooth={true}
                      // offset={-10}
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
    </React.Fragment>
  );
};

export default Slider;
