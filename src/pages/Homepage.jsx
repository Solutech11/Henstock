import React, { useEffect } from "react";
import { Button, Hero, ImageCard, Testimonials } from "../components";
import { Link as ScrollLink } from "react-scroll";
import { 
  bags_o_grains, bg1, bg2, bg3, bg4, bg5, bg6, 
  charcoal, grains, grid, guy, hangfruits, heavytruck, image, 
  logistics, oils, packages, packaging, spices, vinesCutout,grill
} from "../assets";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AnimatedText from "../components/AnimatedText";
import { PATH_HOME } from "../routes/paths";
import { BsFlower1 } from "react-icons/bs";
import { Link } from "react-router-dom";

const bgArray = [
  bg1, bg2, bg3, bg4, bg5, bg6
]

const Homepage = () => {
  return <>
    <Hero bg={bgArray}>
      <AnimatedText text="Welcome to Henstock Foods" />
      <p className="mt-4 text-18 leading-28 text-color-dark-5">
      Driving Sustainable Agro-Commodity Trade and Innovation.
      </p>
      <div className="mt-8">
        <ScrollLink
          to="card-section"
          spy={true}
          smooth={true}
          // offset={-10}
          duration={1000}
        >
          <Button>Learn more</Button>
        </ScrollLink>
      </div>
    </Hero>

    {/* card section */}

    <CardSection />

    {/* detials 1 */}
    
    <Info1 />

    <Info2 />

    <Info3 />

    {/* <Testimonials /> */}
  </>;
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
    <section id="card-section" className="relative flex items-center justify-center py-[100px]  max-w-[100vw]">
      <img src={vinesCutout} alt="" className="absolute z-[0] w-[300px] -left-[100px] bottom-0 opacity-80" />
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
            <ImageCard bg={packaging}>Food Manufacturing and Packaging</ImageCard>
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
    triggerOnce: false,
    threshold: 0.5, // Adjust this threshold as needed
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
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }} 
      className="relative flex  items-center justify-center py-[100px] bg-[#faf8ec] max-w-[100vw]"
      ref={ref}
    >      <div className="max-w-[800px] flex flex-col md:flex-row">
        <motion.div className="left md:p-[40px] flex justify-center items-center"
          initial={{ opacity: 0, x: -50 }}
          animate={controlsLeft}
          transition={{ duration: 1, ease: 'easeOut' }} 
        >
          <img src={guy} alt="" className="w-[90%]"/>
        </motion.div>
        <motion.div className="right flex flex-col justify-center items-center px-[40px]"
          initial={{ opacity: 0, x: 50 }}
          animate={controlsRight}
          transition={{ duration: 1, ease: 'easeOut' }} 
        >
          <h3 className="text-28 leading-38 text-color-dark-1 text-left m-3 font-bold mt-[20px] mx-0 md:mt-0">Harvesting Success Together</h3>
          <div className="text-color-dark-2 text-justify flex flex-col space-y-5">
            <p>HENSTOCK FOODS LTD is a leading agro-commodity trading and food processing company based in Nigeria. We specialize in the distribution and exportation of high-quality neem seeds, cassia tora seeds, and value-added agro-products. Our commitment to sustainability, quality, and innovation drives our operations.</p>
          </div>
        </motion.div>
        <div></div>
      </div>
    </motion.section>
  );
};

const Info2 = () => {
  const controlsLeft = useAnimation();
  const controlsRight = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.5, // Adjust this threshold as needed
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
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }} // Soft and longer transition
      className="relative flex items-center  justify-center py-[100px] bg-white max-w-[100vw]"
      ref={ref}
    >
      <img src={hangfruits} alt="" className="absolute z-[2] top-0 right-5 w-[200px] opacity-80" />
      <div className="max-w-[800px] flex flex-col md:flex-row md:px-[40px] z-[2]">
        <motion.div className="left flex-1 flex flex-col p-[40px]"
          initial={{ opacity: 0, x: -50 }}
          animate={controlsLeft}
          transition={{ duration: 1, ease: 'easeOut' }} // Soft and longer transition
        >
          <h3 className="text-28 leading-38 text-color-dark-1 text-left m-3 font-bold mx-0 mt-0">Fueling Food Innovation</h3>
          <div className="text-color-dark-2 flex flex-col space-y-5 mb-9">
            <p>Henstock Foods Ltd specializes in agro-commodities, food processing, and modern farming solutions. We prioritize sustainability and quality, offering ethical sourcing, advanced water treatment, and innovative packaging to meet your needs.</p>
            <p>With a focus on global reach and certified quality, we provide tailored services—from premium seeds to supply chain support—to help your business thrive. Contact us today to discover how we can partner with you.</p>
          </div>
          <Link
            to={PATH_HOME.general.contact}
          >
            <Button width={"[50%]"}>Contact us</Button>
          </Link>
        </motion.div>
        <motion.div className="right flex-1 pt-[40px] flex justify-center items-center"
          initial={{ opacity: 0, x: 50 }}
          animate={controlsRight}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <img src={grid} alt="" className=""/>
        </motion.div>
      </div>
    </motion.section>
  );
};

const Info3 = () => {
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const [ref1, inView1] = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });
  const [ref2, inView2] = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });
  const [ref3, inView3] = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView1) {
      controls1.start({
        opacity: 1,
        x: 0,
        transition: { duration: 1, ease: 'easeOut' },
      });
    } else {
      controls1.start({
        opacity: 0,
        x: -50,
        transition: { duration: 1, ease: 'easeOut' },
      });
    }
  }, [controls1, inView1]);

  useEffect(() => {
    if (inView2) {
      controls2.start({
        opacity: 1,
        x: 0,
        transition: { duration: 1, ease: 'easeOut' },
      });
    } else {
      controls2.start({
        opacity: 0,
        x: -30,
        transition: { duration: 1, ease: 'easeOut' },
      });
    }
  }, [controls2, inView2]);

  useEffect(() => {
    if (inView3) {
      controls3.start({
        opacity: 1,
        x: 0,
        transition: { duration: 1, ease: 'easeOut' },
      });
    } else {
      controls3.start({
        opacity: 0,
        x: -20,
        transition: { duration: 1, ease: 'easeOut' },
      });
    }
  }, [controls3, inView3]);

  return (
    <section id="services  max-w-[100vw]">
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="flex  items-center justify-center py-[80px] bg-[#fafef6]"
        ref={ref1}
      >
        <div className="max-w-[800px] flex flex-col">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <motion.div className="left flex-1 px-[40px]"
              initial={{ opacity: 0, x: -50 }}
              animate={controls1}
            >
              <img src={image} alt="" />
            </motion.div>
            <motion.div className="right flex-1 px-[40px]"
              initial={{ opacity: 0, x: 50 }}
              animate={controls1}
            >
              <p className="flex flex-row items-center space-x-5"><span className="text-48 text-color-acsent-1">01</span><h3 className="text-28 leading-38">Quality Assurance</h3></p>
              <ul className="list-none flex flex-col space-y-3 mb-10">
                <li className="flex items-center">
                  <span className="bg-color-secondary-1 min-w-2 min-h-2 mr-3 rounded-full"></span>
                  We enforce rigorous quality checks at every stage to ensure top-tier products.
                </li>
                <li className="flex items-center">
                  <span className="bg-color-secondary-1 min-w-2 min-h-2 mr-3 rounded-full"></span>
                  Our seeds are certified organic by SGS and Nigerian Agricultural Quarantine Service.
                </li>
                <li className="flex items-center">
                  <span className="bg-color-secondary-1 min-w-2 min-h-2 mr-3 rounded-full"></span>
                  We provide full traceability from farm to market for complete transparency.
                </li>
              </ul>
              <Link to={PATH_HOME.general.about}>
                <Button width={"[50%]"}>Learn more</Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="flex  items-center justify-center py-[80px] bg-[#fafef6]"
        ref={ref2}
      >
        <div className="max-w-[800px] flex flex-col">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <motion.div className="left flex-1"
              initial={{ opacity: 0, x: -30 }}
              animate={controls2}
            >
              <p className="flex flex-row items-center space-x-5"><span className="text-48 text-color-acsent-1">02</span><h3 className="text-28 leading-38">Sustainability</h3></p>
              <ul className="list-none flex flex-col space-y-3 mb-10">
                <li className="flex items-center">
                  <span className="bg-color-secondary-1 min-w-2 min-h-2 mr-3 rounded-full"></span>
                  We source products responsibly, supporting fair trade and local farmers.
                </li>
                <li className="flex items-center">
                  <span className="bg-color-secondary-1 min-w-2 min-h-2 mr-3 rounded-full"></span>
                  Our operations prioritize reducing environmental impact and promoting sustainability.
                </li>
                <li className="flex items-center">
                  <span className="bg-color-secondary-1 min-w-2 min-h-2 mr-3 rounded-full"></span>
                  We empower local communities through ethical partnerships and initiatives.
                </li>
              </ul>
              <Link to={PATH_HOME.general.about}>
                <Button width={"[50%]"}>Learn more</Button>
              </Link>
            </motion.div>
            <motion.div className="right flex-1 px-[40px]"
              initial={{ opacity: 0, x: 50 }}
              animate={controls2}
            >
              <img src={packages} alt="" />
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="flex  items-center justify-center py-[80px] bg-[#fafef6]"
        ref={ref3}
      >
        <div className="max-w-[800px] flex flex-col">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <motion.div className="left flex-1"
              initial={{ opacity: 0, x: -20 }}
              animate={controls3}
            >
              <img src={heavytruck} alt="" />
            </motion.div>
            <motion.div className="right flex-1 px-[40px]"
              initial={{ opacity: 0, x: 40 }}
              animate={controls3}
            >
              <p className="flex flex-row items-center space-x-5"><span className="text-48 text-color-acsent-1">03</span><h3 className="text-28 leading-38">Global Reach</h3></p>
              <ul className="list-none flex flex-col space-y-3 mb-10">
                <li className="flex items-center">
                  <span className="bg-color-secondary-1 min-w-2 min-h-2 mr-3 rounded-full"></span>
                  We partner with leading logistics firms for seamless global delivery.
                </li>
                <li className="flex items-center">
                  <span className="bg-color-secondary-1 min-w-2 min-h-2 mr-3 rounded-full"></span>
                  Our products are exported to key markets like India, China, and beyond.
                </li>
                <li className="flex items-center">
                  <span className="bg-color-secondary-1 min-w-2 min-h-2 mr-3 rounded-full"></span>
                  We use sea freight for cost-effective and timely international shipments.
                </li>
              </ul>
              <Link to={PATH_HOME.general.about}>
                <Button width={"[50%]"}>Learn more</Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </ section>
  );
};


export default Homepage;