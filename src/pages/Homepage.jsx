import React, { useEffect } from "react";
import { Button, Hero, ImageCard, Testimonials } from "../components";
import { Link as ScrollLink } from "react-scroll";
import {
  bags_o_grains,
  bg1,
  bg2,
  bg3,
  bg4,
  bg5,
  bg6,
  charcoal,
  grains,
  grid,
  guy,
  hangfruits,
  heavytruck,
  image,
  logistics,
  oils,
  packages,
  packaging,
  spices,
  vinesCutout,
  grill,
  nuts1,
} from "../assets";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AnimatedText from "../components/AnimatedText";
import { PATH_HOME } from "../routes/paths";
import { BsFlower1 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { CustomBtn } from "../components/Button";
import Flower from "../assets/flower.png";
import Sprinkle from "../assets/Sprinkle.svg";
import Stable from "../assets/stable.png";
import global from "../assets/global.png";
import Field from "../assets/field.png";

const bgArray = [bg1, bg2, bg3, bg6];

const Homepage = () => {
  return (
    <>
      <Hero bg={bgArray} btn={true} />
      {/* card section */}

      {/* <CardSection /> */}

      {/* detials 1 */}

      <Info1 />

      <Info2 />

      <Info3 />

      {/* <Testimonials /> */}
    </>
  );
};

// card section component

const CardSection = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const flowerVariant = {
    hidden: { scale: 0.3, rotate: 45, transformOrigin: "center" },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
    transformOrigin: "center",
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const cardItemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="card-section"
      className="relative flex items-center justify-center py-[100px]  max-w-[100vw]"
    >
      <img
        src={vinesCutout}
        alt=""
        className="absolute z-[0] w-[300px] -left-[100px] bottom-0 opacity-80"
      />
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={flowerVariant}
        className="text-color-dark-4 absolute top-[35px] left-[calc(50% - 75px)] z-[0] text-[150px] z-[2]"
      >
        <BsFlower1 />
      </motion.div>
      <div className="max-w-[800px] z-[2]">
        <p className="text-center italic text-color-acsent-1">Explore</p>
        <h3 className="text-28 leading-38 text-center m-3">
          We <span className="font-semibold">Offer</span>
        </h3>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={cardVariants}
          className="grid flex flex-col md:grid-cols-3 md:grid-rows-2 gap-5 mt-10 items-center justify-center"
        >
          <motion.div variants={cardItemVariants} className="image-card">
            <ImageCard bg={grains}>Grains and Pulses</ImageCard>
          </motion.div>
          <motion.div variants={cardItemVariants} className="image-card">
            <ImageCard bg={spices}>Spices and Culinary Ingredients</ImageCard>
          </motion.div>
          <motion.div variants={cardItemVariants} className="image-card">
            <ImageCard bg={oils}>Oils and Cooking Essentials</ImageCard>
          </motion.div>
          <motion.div variants={cardItemVariants} className="image-card">
            <ImageCard bg={grill}>Grilled and Barbecue Supplies</ImageCard>
          </motion.div>
          <motion.div variants={cardItemVariants} className="image-card">
            <ImageCard bg={packaging}>
              Food Manufacturing and Packaging
            </ImageCard>
          </motion.div>
          <motion.div variants={cardItemVariants} className="image-card">
            <ImageCard bg={logistics}>Supply Chain Solutions</ImageCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const Info1 = () => {
  const controlsLeft = useAnimation();
  const controlsRight = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
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
      id="card-section"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="relative w-full pt-[100px] bg-[#fff]"
      ref={ref}
    >
      {" "}
      <div id="card-section" className="w-[90%] lg:w-[85%] mx-auto flex flex-col md:flex-row">
        <motion.div
          className="flex items-center w-full lg:h-[600px] relative "
          initial={{ opacity: 0, x: -50 }}
          animate={controlsLeft}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <img
            src={guy}
            alt=""
            className="lg:w-[90%] mx-auto lg:h-[600px] rounded-3xl"
          />
          <span className="text-black font-[DM Sans] font-medium text-center text-base px-5 py-1.5 rounded-full absolute top-10 right-3 lg:right-[-1%] shadow-md bg-white/10 backdrop-blur-sm">
            10+ years
          </span>
        </motion.div>
        <motion.div
          className="w-full flex flex-col justify-center items-center  lg:px-[40px]"
          initial={{ opacity: 0, x: 50 }}
          animate={controlsRight}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="w-full">
            <div className="text-color-dark-2 text-justify flex flex-col space-y-5">
              <h3 className="text-[32px] font-[Averia Serif Libre] font-bold leading-38 text-color-dark-1 text-left m-3 mt-[16px] mx-0 md:mt-0">
                Harvesting Success Together
              </h3>
              <p className="font-[DM Sans] font-normal text-[#1E1E1E] text-[17px] p-5 bg-[#AEAEAE1A] rounded-2xl">
                Henstock Foods Ltd. is a leading player in Nigeria’s
                agricultural industry, dedicated to agro-commodity trade, food
                production & packaging, modern farm equipment supply, and
                agricultural consultancy. Our goal is to enhance food security,
                reduce imports, and empower farmers with cutting-edge
                technology.
              </p>
              <p className="font-[DM Sans] font-normal text-[#1E1E1E] text-[17px] p-3 bg-[#AEAEAE1A] rounded-2xl">
                Export Markets: China, India, UAE
              </p>
              <p className="font-[DM Sans] font-normal text-[#1E1E1E] text-[17px] p-4 bg-[#AEAEAE1A] rounded-2xl">
                Products: Rice, Neem Seeds, Cassia Tora, Sesame, Soya Beans
              </p>
              <div className="w-full flex justify-start items-center">
                <CustomBtn title="Read more" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <img
        src={Flower}
        alt="flower-image"
        className="w-full h-[80px] object-cover mt-10"
      />
    </motion.section>
  );
};

const Info2 = () => {
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

  const InfoData = [
    {
      id: Math.floor(Math.random() * 10000),
      nub: "01",
      title: "Agro-Commodity Trade",
      meg: "We specialize in sourcing, processing, and exporting high-quality agricultural products that meet international standards. By working closely with farmers, we ensure that our commodities are fresh, well-packaged, and ready for export.",
    },
    {
      id: Math.floor(Math.random() * 10000),
      nub: "02",
      title: "Food Processing & Packaging",
      meg: "We use cutting-edge technology to process and package agricultural products while maintaining high nutritional value. Our packaging solutions are designed to extend shelf life and meet both local and international market standards.",
    },
    {
      id: Math.floor(Math.random() * 10000),
      nub: "03",
      title: "Farm Equipment Supply",
      meg: "We provide farmers with high-quality tools and equipment that make farming easier and more efficient. Our range includes everything from small-scale farm tools to large industrial-grade machinery.",
    },
    {
      id: Math.floor(Math.random() * 10000),
      nub: "04",
      title: "Agricultural Consultancy & Training",
      meg: "Our team of agricultural experts provides professional guidance on best practices, innovative techniques, and sustainable solutions to improve productivity and profitability. ",
    },
  ];

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 1, ease: "easeOut" }}
      className="relative w-full py-[100px] bg-[#fff]"
    >
      <img
        src={Sprinkle}
        alt=""
        className="absolute hidden lg:block z-[2] top-10 right-20 mr-20 w-[100px] opacity-80"
      />
      <div className="w-[90%] lg:w-[85%] mx-auto flex flex-col md:flex-row">
        <motion.div
          className="w-full relative grid gap-6"
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="w-full grid gap-5">
            <div className="w-full flex justify-start items-center">
              <p className="bg-[#D79F8333] rounded-full px-5 py-3 text-base text-[#F16C21] font-[Averia Serif Libre] font-normal ">
                What we do best
              </p>
            </div>
            <p className="text-[17px] font-[DM Sans] font-normal lg:pr-10">
              Henstock Foods Ltd specializes in agro-commodities, food
              processing, and modern farming solutions. We prioritize
              sustainability and quality, offering ethical sourcing, advanced
              water treatment, and innovative packaging to meet your needs.
            </p>
          </div>

          <img
            src={bg6}
            alt=""
            className="lg:w-[90%] lg:h-[523px] rounded-3xl"
          />
        </motion.div>

        <motion.div
          className="w-full flex flex-col lg:px-[40px] gap-11 lg:gap-8 mt-16"
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 1, ease: "easeOut" }} // Soft and longer transition
        >
          {InfoData.map((data, id) => (
            <div key={data.id || id} className="w-full grid gap-5">
              <div className="flex justify-between items-center">
                <p className="font-[Averia Serif Libre] font-bold text-[19px] text-[#1E1E1E]">
                  {data.title}
                </p>
                <p className="font-[Averia Serif Libre] font-bold text-[19px] text-[#5C8A3F]">
                  {data.nub}
                </p>
              </div>
              <p className="font-[DM Sans] font-normal text-[17px] text-[#28282B]">
                {data.meg}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

const Info3 = () => {
  // const controls = useAnimation();
  // const [ref, inView] = useInView({
  //   triggerOnce: true,
  //   threshold: 0.5,
  // });

  // useEffect(() => {
  //   if (inView) {
  //     controls.start({ opacity: 1, y: 0 });
  //   } else {
  //     controls.start({ opacity: 0, y: 50 });
  //   }
  // }, [controls, inView]);

  const InfoData = [
    {
      id: Math.floor(Math.random() * 10000),
      url: nuts1,
      title: "Quality Assurance",
      meg: "We adhere to the highest agricultural standards, ensuring all our products meet international safety and quality regulations.",
    },
    {
      id: Math.floor(Math.random() * 10000),
      url: Stable,
      title: "Sustainability",
      meg: "Our processes prioritize eco-friendly practices, reducing waste and promoting responsible farming.",
    },
    {
      id: Math.floor(Math.random() * 10000),
      url: global,
      title: "Global Reach",
      meg: "We have established strong partnerships across international and local markets, making us a reliable agro-export partner.",
    },
  ];

  return (
    <motion.section
      // ref={ref}
      // initial={{ opacity: 0, y: 50 }}
      // animate={controls}
      // transition={{ duration: 1, ease: "easeOut" }}
      className="relative w-full bg-[#fff] "
    >
      <img
        src={Sprinkle}
        alt=""
        className="absolute z-[2] hidden lg:block top-10 right-20 mr-36 w-[100px] opacity-80"
      />
      <div className="w-[90%] lg:w-[85%] mx-auto">
        <motion.div
          className="w-full lg:w-[50%] relative grid"
          // ref={ref}
          // initial={{ opacity: 0, y: 50 }}
          // animate={controls}
          // transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="w-full grid gap-5">
            <div className="w-full flex justify-start items-center">
              <p className="bg-[#95B28333] rounded-full px-5 py-3 text-base text-[#5C8A3F] font-[Averia Serif Libre] font-normal ">
                Why choose us?
              </p>
            </div>
            <p className="text-[17px] font-[DM Sans] font-normal lg:pr-10">
              Trusted by farmers, businesses, and global partners, Henstock
              Foods Ltd. is committed to delivering excellence in agriculture.
              Our dedication to quality, sustainability, and innovation sets us
              apart in the industry.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16"
          // ref={ref}
          // initial={{ opacity: 0, y: 50 }}
          // animate={controls}
          // transition={{ duration: 1, ease: "easeOut" }}
        >
          {InfoData.map((data, id) => (
            <div
              key={data.id || id}
              className="w-full grid border rounded-3xl shadow-sm hover:shadow-xl hover:drop-shadow-xl"
            >
              <div className="flex justify-between items-center">
                <img
                  src={data.url}
                  alt="card-image"
                  className="w-full h-[300px] lg:h-[350px] rounded-t-3xl "
                />
              </div>
              <div className="w-full grid gap-3 p-5">
                <p className="font-[Averia Serif Libre] font-bold text-[19px] text-[#1E1E1E]">
                  {data.title}
                </p>
                <p className="font-[DM Sans] font-normal text-[17px] text-[#28282B]">
                  {data.meg}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          className="w-full relative grid pt-[100px]"
          // ref={ref}
          // initial={{ opacity: 0, y: 50 }}
          // animate={controls}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="bg-img w-full h-[700px] lg:h-[400px] lg:rounded-[50px]">
            <div className="w-full lg:w-[60%] mx-auto p-10 grid gap-5">
              <p className="font-[Averia Serif Libre] tracking-widest font-bold text-4xl lg:text-[48px] text-center text-[#fff]">
                Ready to Grow with Us?
              </p>
              <p className="font-[DM Sans] font-normal text-[17px] text-center text-[#fff]">
                Get in touch today for inquiries, partnerships, and product
                orders.
              </p>
              <div className="w-full justify-center items-center mt-10">
                <div className="lg:w-[466px] mx-auto flex justify-between items-center bg-white/10 backdrop-blur-sm rounded-full">
                  <input
                    type="email"
                    name=""
                    id=""
                    placeholder="Enter your email address"
                    className="p-3.5 w-full font-[DM Sans] outline-none text-[#fff] bg-transparent border-none"
                  />
                  <button
                    className="font-[DM Sans] font-medium text-base text-white rounded-full bg-[#5C8A3F] px-8 py-3.5"
                    type="button"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Homepage;
