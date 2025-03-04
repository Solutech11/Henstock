import React, { useEffect } from "react";
import { BouncyDownArrow, Button, ContactBanner, Hero } from "../components";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CRI, GLP, grid, bg6, NAQS, nuts1, OLC, SGS } from "../assets";
import { Link } from "react-router-dom";
import { PATH_HOME } from "../routes/paths";
import Flower from "../assets/flower.png";
import Sprinkle from "../assets/Sprinkle.svg";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";
import Certificate from "../components/sub-comp/Certificate";

const About = () => {
  return (
    <>
      <Hero bg={[nuts1]} btn={false} />
      <Main />
      <MissionVision />
      <Certificate/>
      {/* <CoreValues /> */}
      {/* <CertificationsPartnerships />
      <SustainabilityCommitment /> */}
      {/* <ContactBanner /> */}
    </>
  );
};

const Main = () => {
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

  const OurGoals = [
    {
      id: Math.floor(Math.random() * 10000),
      title: "Our Mission",
      meg: "Our mission is to support farmers and communities by providing market access and fair trade opportunities. We aim to deliver exceptional agricultural products and services that meet the highest standards of quality and safety.",
    },
    {
      id: Math.floor(Math.random() * 10000),
      title: "Our Vision",
      meg: "To be a prominent player in the agro-allied industry and livestock production in Nigeria and beyond, driving sustainable growth and innovation.",
    },
  ];

  return (
    <motion.section
      id="main"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="pt-[100px] bg-white"
      ref={ref}
    >
      <div className="w-[90%] lg:w-[85%] mx-auto grid lg:grid-cols-2 gap-10">
        <motion.div
          className="w-full"
          initial={{ opacity: 0, x: -50 }}
          animate={controlsLeft}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="w-full grid gap-10">
            <div className="grid gap-5">
              <div className="w-full flex justify-start items-center">
                <p className="bg-[#D79F8333] rounded-full px-5 py-3 text-base text-[#F16C21] font-[Averia Serif Libre] font-normal ">
                  About Henstock Foods Limited
                </p>
              </div>
              <p className="text-[17px] font-[DM Sans] font-normal lg:pr-10">
                HENSTOCK FOODS LTD was established to play a significant role in
                Nigeria’s agricultural industry. We are dedicated to
                agro-commodity trade, food processing, packaging, and the supply
                of modern agricultural machinery. Our expertise spans research,
                aggregation, and supply of rare agro-commodities, as well as
                large-scale farming and livestock feed production.
              </p>
            </div>

            <div className="grid gap-5">
              {OurGoals.map((data, id) => (
                <div key={data.id || id} className="w-full grid gap-4 lg:pr-5">
                  <div className="">
                    <p className="font-[Averia Serif Libre] font-bold text-[32px] text-[#1E1E1E]">
                      {data.title}
                    </p>
                  </div>
                  <p className="font-[DM Sans] font-normal text-[17px] text-[#28282B]">
                    {data.meg}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
        <motion.div
          className="w-full"
          initial={{ opacity: 0, x: 50 }}
          animate={controlsRight}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <img
            src={bg6}
            alt="crop-image"
            className="w-full lg:h-[586px] rounded-3xl"
          />
        </motion.div>
      </div>
      <img src={Flower} alt="flower-image" className="w-full h-[80px] object-cover mt-10" />
    </motion.section>
  );
};

const MissionVision = () => {
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

  const InfoData = [
    {
      id: Math.floor(Math.random() * 10000),
      nub: icon1,
      title: "Customers First",
      meg: "At Henstock Foods Ltd., our customers are at the heart of everything we do. We strive to provide high-quality products and services that meet global standards, ensuring reliability and satisfaction. Our customer support team is always available to assist, fostering trust and long-term relationships.",
    },
    {
      id: Math.floor(Math.random() * 10000),
      nub: icon2,
      title: "Teamwork",
      meg: "We believe that success is built on collaboration, and we foster a culture of teamwork across all levels of our business. Our dedicated professionals work closely with farmers, suppliers, and stakeholders to ensure seamless operations and high-quality results.",
    },
    {
      id: Math.floor(Math.random() * 10000),
      nub: icon3,
      title: "Innovation",
      meg: "We embrace new technologies and modern practices to enhance agricultural efficiency and productivity. By investing in research and development, we continuously improve our farming techniques, food processing, and supply chain management.",
    },
    {
      id: Math.floor(Math.random() * 10000),
      nub: icon4,
      title: "Sustainability",
      meg: "Sustainability is at the core of our operations, guiding how we grow, process, and distribute agricultural products. We implement eco-friendly farming practices, reduce waste, and prioritize recyclable packaging to minimize our environmental footprint. ",
    },
  ];

  return (
    <motion.section
      id="main"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="py-[100px] "
      ref={ref}
    >
      <img
        src={Sprinkle}
        alt=""
        className="absolute z-[2] top-10 right-20 mr-20 w-[100px] opacity-80"
      />

      <div className="w-[90%] lg:w-[85%] mx-auto grid gap-12">
        <div className="grid gap-5 lg:w-[50%]">
          <div className="w-full  flex justify-start items-center">
            <p className="bg-[#95B28333] rounded-full px-5 py-3 text-base text-[#5C8A3F] font-[Averia Serif Libre] font-normal ">
              Our Core Values
            </p>
          </div>
          <p className="text-[17px] text-[#1E1E1E] font-[DM Sans] font-normal lg:pr-2">
            At Henstock Foods Ltd., our values shape every aspect of our
            operations, ensuring we remain committed to quality, innovation,
            teamwork, and sustainability. These principles guide our
            decision-making, customer relationships, and long-term growth.
          </p>
        </div>

        <div className="w-full grid lg:grid-cols-2 gap-8">
          {InfoData.map((data, id) => (
            <div
              key={data.id || id}
              className="w-full grid gap-7 bg-[#AEAEAE1A] p-5 rounded-2xl"
            >
              <div className="flex justify-between items-center">
                <p className="font-[Averia Serif Libre] font-bold text-[19px] text-[#1E1E1E]">
                  {data.title}
                </p>
                <img src={data.nub} alt="icon" className="w-[45px] h-[47px]" />
              </div>
              <p className="font-[DM Sans] font-normal text-[17px] text-[#28282B]">
                {data.meg}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

const CoreValues = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
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
    <motion.section
      id="core-values"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="flex items-center justify-center py-[100px] px-10 bg-gray-50"
      ref={ref}
    >
      <div className="max-w-[1200px] w-full">
        {/* Section Title */}
        <h3 className="text-3xl md:text-4xl font-bold text-color-dark-1 text-center mb-10">
          Our Core Values
        </h3>

        {/* Core Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Value 1: Integrity */}
          <motion.div
            className="bg-white rounded-lg shadow-lg p-6 border border-gray-200"
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-green-700 mb-4">
              Integrity
            </h3>
            <p className="text-gray-600">
              We uphold the highest standards of honesty and transparency in all
              our dealings, building trust with our clients and partners.
            </p>
          </motion.div>

          {/* Value 2: Innovation */}
          <motion.div
            className="bg-white rounded-lg shadow-lg p-6 border border-gray-200"
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-green-700 mb-4">
              Innovation
            </h3>
            <p className="text-gray-600">
              We embrace creativity and technology to drive sustainable
              solutions and stay ahead in the agro-allied industry.
            </p>
          </motion.div>

          {/* Value 3: Teamwork */}
          <motion.div
            className="bg-white rounded-lg shadow-lg p-6 border border-gray-200"
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-green-700 mb-4">Teamwork</h3>
            <p className="text-gray-600">
              We believe in collaboration and mutual respect, working together
              to achieve shared goals and deliver exceptional results.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

const CertificationsPartnerships = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 50 });
    }
  }, [controls, inView]);

  // Dummy data for certifications and partnerships
  const certifications = [
    { id: 1, logo: SGS, name: "SGS Certification" },
    { id: 2, logo: NAQS, name: "Nigerian Agricultural Quarantine Service" },
    { id: 3, logo: OLC, name: "Organic Certification" },
  ];

  const partnerships = [
    { id: 1, logo: GLP, name: "Global Logistics Partner" },
    { id: 2, logo: CRI, name: "Agricultural Research Institute" },
    { id: 3, logo: SGS, name: "Sustainability Organization" },
  ];

  return (
    <>
      {/* Add CSS for auto-scrolling carousel */}
      <style>
        {`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          @keyframes scroll-reverse {
            0% {
              transform: translateX(-50%);
            }
            100% {
              transform: translateX(0);
            }
          }

          .animate-scroll {
            animation: scroll 20s linear infinite;
            display: flex;
            width: max-content;
          }

          .animate-scroll-reverse {
            animation: scroll-reverse 20s linear infinite;
            display: flex;
            width: max-content;
          }
        `}
      </style>

      <motion.section
        id="certifications-partnerships"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="py-[20px] bg-[#5C8A3F4D]"
        ref={ref}
      >
        <div className="lg:w-[85%] mx-auto w-full py-20">
          <div className="w-full flex justify-start items-center">
            <p className="bg-[#FFF1EA1A] rounded-full px-5 py-3 text-base text-[#1E1E1E] shadow font-[Averia Serif Libre] font-normal ">
            Partnership & Certification
            </p>
          </div>

          {/* Partnerships Auto-Scrolling Carousel */}
          {/* <motion.div
            className="overflow-hidden relative w-full"
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          >
            <div className="flex animate-scroll-reverse">
              {[...partnerships, ...partnerships].map((partner, index) => (
                <div
                  key={`${partner.id}-${index}`}
                  className="flex-shrink-0 bg-white rounded-lg shadow-lg p-6 border border-gray-200 flex flex-col items-center mx-4"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-24 h-24 mb-4"
                  />
                  <p className="text-gray-600 text-center">{partner.name}</p>
                </div>
              ))}
            </div>
          </motion.div> */}
        </div>

        <motion.div
          className="overflow-hidden relative w-full mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          <div className="flex animate-scroll">
            {[...certifications, ...certifications].map((cert, index) => (
              <div
                key={`${cert.id}-${index}`}
                className="flex-shrink-0 rounded-lg  p-6 flex flex-col items-center mx-4"
              >
                <img
                  src={cert.logo}
                  alt={cert.name}
                  className="w-24 h-24 mb-4"
                />
                <p className="text-gray-600 text-center">{cert.name}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.section>
    </>
  );
};

const SustainabilityCommitment = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
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
    <motion.section
      id="sustainability"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="flex items-center justify-center py-[100px] px-10 bg-white"
      ref={ref}
    >
      <div className="max-w-[1200px] w-full">
        {/* Section Title */}
        <h3 className="text-3xl md:text-4xl font-bold text-color-dark-1 text-center mb-10">
          Our Commitment to Sustainability
        </h3>

        {/* Sustainability Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          {/* Card 1: Ethical Sourcing */}
          <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 flex flex-col items-center text-center">
            <h4 className="text-xl font-bold text-green-700 mb-4">
              Ethical Sourcing
            </h4>
            <p className="text-gray-600">
              We partner with local farmers and suppliers who share our
              commitment to fair trade and sustainable practices.
            </p>
          </div>

          {/* Card 2: Environmental Responsibility */}
          <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 flex flex-col items-center text-center">
            <h4 className="text-xl font-bold text-green-700 mb-4">
              Environmental Responsibility
            </h4>
            <p className="text-gray-600">
              Our operations are designed to minimize environmental impact, from
              reducing carbon emissions to optimizing resource use.
            </p>
          </div>

          {/* Card 3: Community Empowerment */}
          <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 flex flex-col items-center text-center">
            <h4 className="text-xl font-bold text-green-700 mb-4">
              Community Empowerment
            </h4>
            <p className="text-gray-600">
              We support local communities through education, training, and
              sustainable development initiatives.
            </p>
          </div>
        </motion.div>

        {/* Call-to-Action */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
        >
          <p className="text-lg text-gray-600 mb-6">
            Join us in building a sustainable future. Together, we can make a
            difference.
          </p>

          <Link to={PATH_HOME.general.contact}>
            <a className="bg-green-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-800 transition-colors">
              Get Involved
            </a>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
