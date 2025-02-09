import React, { useEffect } from "react";
import { BouncyDownArrow, Button, ContactBanner, Hero } from "../components";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { grid, nuts1 } from "../assets";

const About = () => {
  return <>
    <Hero bg={[nuts1]}>
      <h1 className="text-4xl font-extrabold text-white sm:text-5xl sm:leading-none">
        Who Are We
      </h1>
      <BouncyDownArrow classes="text-white mt-[2rem]" to="main"/>
    </Hero>
    <Main />
    <ContactBanner />
  </>;
};

const Main = () => {
  const controlsLeft = useAnimation();
  const controlsRight = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.5, 
  });

  useEffect(() => {
    if (inView) {
      controlsLeft.start({ opacity: 1, x: 0 });
      controlsRight.start({ opacity: 1, x: 0 });
    } else {
      controlsLeft.start({ opacity: 0, x: -50 });
      controlsRight.start({ opacity: 0, x: 50 });
    }
  }, [controlsLeft, controlsRight, inView]);

  return (
    <motion.section
      id="main"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }} 
      className="flex items-center justify-center py-[100px] px-10 bg-white"
      ref={ref}
    >
      <div className="max-w-[800px] flex flex-col md:flex-row space-x-10">
        <motion.div className="left flex-1 flex flex-col"
          initial={{ opacity: 0, x: -50 }}
          animate={controlsLeft}
          transition={{ duration: 1, ease: 'easeOut' }} 
        >
          <h3 className="text-28 leading-38 text-color-dark-1 text-left m-3 font-bold mx-0 mt-0">About Henstock Foods Limited</h3>
          <div className="text-18 leading-24 text-color-dark-2 flex flex-col space-y-5 mb-9">
            <p>Henstock Foods Limited is a leading provider of agricultural commodities, food manufacturing, and supply chain solutions based in Abuja, Nigeria. We are dedicated to sourcing and delivering high-quality products to our customers worldwide, with a focus on excellence and sustainability. The company was founded in september 2018 and commenced operation the same year.</p>
            <h3 className="text-28 leading-38 text-color-dark-1 text-left m-3 font-bold mx-0 mt-0">Our Mission</h3>
            <p>Our mission is to support farmers and communities by providing market access and fair trade opportunities. We aim to deliver exceptional agricultural products and services that meet the highest standards of quality and safety.</p>
          </div>
        </motion.div>
        <motion.div className="right flex-1"
          initial={{ opacity: 0, x: 50 }}
          animate={controlsRight}
          transition={{ duration: 1, ease: 'easeOut' }} 
        >
          <img src={grid} alt="" />
        </motion.div>
        <div></div>
      </div>
    </motion.section>
  );
};

export default About;