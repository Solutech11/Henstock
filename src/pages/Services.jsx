import React, { useRef, useState, useEffect } from "react";
import { BouncyDownArrow, ContactBanner, Hero } from "../components";
import { AgroExport, bg6, GrainsNew, services, VAP } from "../assets";
import { Link } from "react-router-dom";
import { PATH_HOME } from "../routes/paths";
import ServiceTab from "../components/sub-comp/Tabs/ServiceTab";
import Flower from "../assets/flower.png";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Services = () => {

  return (
    <>
      <Hero bg={[services]} btn={false} />

      <section id="main" className="pt-10 bg-white ">
        <div className="w-[90%] lg:w-[85%] mx-auto">
          <ServiceTab />
        </div>
        <img src={Flower} alt="flower-image" className="w-full h-[80px] object-cover mt-10" />
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

       
      </section>

    </>
  );
};

export default Services;
