import React, { useRef, useState, useEffect } from "react";
import { BouncyDownArrow, ContactBanner, Hero } from "../components";
import { AgroExport, bg6, GrainsNew, services, VAP } from "../assets";
import { Link } from "react-router-dom";
import { PATH_HOME } from "../routes/paths";
import ServiceTab from "../components/sub-comp/Tabs/ServiceTab";
import Flower from "../assets/flower.png";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AnimatedText from "../components/AnimatedText";
import ServiceImg from "../assets/serviceImg.jpg";

const Services = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.set({ opacity: 0, y: 50 });
    }
  }, [controls, inView]);

  return (
    <>
      <div className="w-full block lg:hidden">
        <Hero bg={[ServiceImg]}>
          <AnimatedText text="Empowering Agriculture, One Innovation at a Time" />
          <p className="font-[DM Sans] font-medium text-[#ffffff] mt-5 text-lg text-center">
            From farm to factory to freight — Henstock Foods delivers more than
            commodities.
          </p>
        </Hero>
      </div>
      <div className="hidden lg:block">
        <Hero
          bg={[ServiceImg]}
          btn={false}
          title="Empowering Agriculture, One Innovation at a Time"
          subTitle="From farm to factory to freight — Henstock Foods delivers more than commodities."
        />
      </div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        transition={{ duration: 0.8, ease: "easeOut" }}
        id="main"
        className="pt-10 bg-white "
      >
        <div className="w-[90%] lg:w-[85%] mx-auto">
          <ServiceTab />
        </div>
        <img
          src={Flower}
          alt="flower-image"
          className="w-full h-[80px] object-cover mt-10"
        />
        <div className="w-full h-[600px]">
          <iframe
            width="100%"
            height="600px"
            src="https://www.youtube.com/embed/z4R8o5tBRoA?si=bm7uURWmxcg9ltY1"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </motion.div>
    </>
  );
};

export default Services;
