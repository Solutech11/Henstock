import React, { useEffect } from "react";
import { BouncyDownArrow, Button, ContactBanner, Hero } from "../components";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CRI, GLP, grid, NAQS, nuts1, OLC, SGS } from "../assets";

const About = () => {
  return <>
    <Hero bg={[nuts1]}>
      <h1 className="text-4xl font-extrabold text-white sm:text-5xl sm:leading-none">
        Who Are We
      </h1>
      <BouncyDownArrow classes="text-white mt-[2rem]" to="main"/>
    </Hero>
    <Main />
    <MissionVision />
    <CoreValues />
    <CertificationsPartnerships />
    <SustainabilityCommitment/>
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
            <p>HENSTOCK FOODS LTD was established to play a significant role in Nigeria’s agricultural industry. We are dedicated to agro-commodity trade, food processing, packaging, and the supply of modern agricultural machinery. Our expertise spans research, aggregation, and supply of rare agro-commodities, as well as large-scale farming and livestock feed production.</p>
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

const MissionVision = () => {
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
      <div className="max-w-[1200px] w-full">
        {/* Updated Title */}
        <h3 className="text-3xl md:text-4xl font-bold text-color-dark-1 text-center mb-10">
          Driving Sustainable Agro-Commodity Trade and Innovation
        </h3>

        {/* Mission and Vision Cards in a Row */}
        <div className="flex flex-col md:flex-row gap-8 justify-center">
          {/* Mission Card */}
          <motion.div
            className="flex-1 bg-white rounded-lg shadow-lg p-6 border border-gray-200"
            initial={{ opacity: 0, x: -50 }}
            animate={controlsLeft}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <h3 className="text-2xl font-bold text-green-700 mb-4">Our Mission</h3>
            <p className="text-gray-600">
              To produce and market superior-quality agro-allied products using the latest technology, investing in our people and environment, and providing attractive returns to all stakeholders.
            </p>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            className="flex-1 bg-white rounded-lg shadow-lg p-6 border border-gray-200"
            initial={{ opacity: 0, x: 50 }}
            animate={controlsRight}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <h3 className="text-2xl font-bold text-green-700 mb-4">Our Vision</h3>
            <p className="text-gray-600">
              To be a prominent player in the agro-allied industry and livestock production in Nigeria and beyond, driving sustainable growth and innovation.
            </p>
          </motion.div>
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
      transition={{ duration: 1, ease: 'easeOut' }}
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
            transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-green-700 mb-4">Integrity</h3>
            <p className="text-gray-600">
              We uphold the highest standards of honesty and transparency in all our dealings, building trust with our clients and partners.
            </p>
          </motion.div>

          {/* Value 2: Innovation */}
          <motion.div
            className="bg-white rounded-lg shadow-lg p-6 border border-gray-200"
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-green-700 mb-4">Innovation</h3>
            <p className="text-gray-600">
              We embrace creativity and technology to drive sustainable solutions and stay ahead in the agro-allied industry.
            </p>
          </motion.div>

          {/* Value 3: Teamwork */}
          <motion.div
            className="bg-white rounded-lg shadow-lg p-6 border border-gray-200"
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-green-700 mb-4">Teamwork</h3>
            <p className="text-gray-600">
              We believe in collaboration and mutual respect, working together to achieve shared goals and deliver exceptional results.
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
    { id: 1, logo: SGS, name: 'SGS Certification' },
    { id: 2, logo: NAQS, name: 'Nigerian Agricultural Quarantine Service' },
    { id: 3, logo: OLC, name: 'Organic Certification' },
  ];

  const partnerships = [
    { id: 1, logo: GLP, name: 'Global Logistics Partner' },
    { id: 2, logo: CRI, name: 'Agricultural Research Institute' },
    { id: 3, logo: SGS, name: 'Sustainability Organization' },
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
        transition={{ duration: 1, ease: 'easeOut' }}
        className="flex items-center justify-center py-[100px] px-10 bg-white"
        ref={ref}
      >
        <div className="max-w-[1200px] w-full">
          {/* Section Title */}
          <h3 className="text-3xl md:text-4xl font-bold text-color-dark-1 text-center mb-10">
            Certifications & Partnerships
          </h3>

          {/* Certifications Auto-Scrolling Carousel */}
          <motion.div
            className="overflow-hidden relative w-full mb-12"
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
          >
            <div className="flex animate-scroll">
              {[...certifications, ...certifications].map((cert, index) => (
                <div key={`${cert.id}-${index}`} className="flex-shrink-0 bg-white rounded-lg shadow-lg p-6 border border-gray-200 flex flex-col items-center mx-4">
                  <img src={cert.logo} alt={cert.name} className="w-24 h-24 mb-4" />
                  <p className="text-gray-600 text-center">{cert.name}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Partnerships Auto-Scrolling Carousel */}
          <motion.div
            className="overflow-hidden relative w-full"
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.4 }}
          >
            <div className="flex animate-scroll-reverse">
              {[...partnerships, ...partnerships].map((partner, index) => (
                <div key={`${partner.id}-${index}`} className="flex-shrink-0 bg-white rounded-lg shadow-lg p-6 border border-gray-200 flex flex-col items-center mx-4">
                  <img src={partner.logo} alt={partner.name} className="w-24 h-24 mb-4" />
                  <p className="text-gray-600 text-center">{partner.name}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
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
      transition={{ duration: 1, ease: 'easeOut' }}
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
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
        >
          {/* Card 1: Ethical Sourcing */}
          <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 flex flex-col items-center text-center">
            <h4 className="text-xl font-bold text-green-700 mb-4">
              Ethical Sourcing
            </h4>
            <p className="text-gray-600">
              We partner with local farmers and suppliers who share our commitment to fair trade and sustainable practices.
            </p>
          </div>

          {/* Card 2: Environmental Responsibility */}
          <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 flex flex-col items-center text-center">
            <h4 className="text-xl font-bold text-green-700 mb-4">
              Environmental Responsibility
            </h4>
            <p className="text-gray-600">
              Our operations are designed to minimize environmental impact, from reducing carbon emissions to optimizing resource use.
            </p>
          </div>

          {/* Card 3: Community Empowerment */}
          <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 flex flex-col items-center text-center">
            <h4 className="text-xl font-bold text-green-700 mb-4">
              Community Empowerment
            </h4>
            <p className="text-gray-600">
              We support local communities through education, training, and sustainable development initiatives.
            </p>
          </div>
        </motion.div>

        {/* Call-to-Action */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.4 }}
        >
          <p className="text-lg text-gray-600 mb-6">
            Join us in building a sustainable future. Together, we can make a difference.
          </p>
          <a
            href="/contact" // Replace with your contact page link
            className="bg-green-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-800 transition-colors"
          >
            Get Involved
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};




export default About;