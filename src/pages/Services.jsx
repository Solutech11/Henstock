import React from "react";
import { BouncyDownArrow, ContactBanner, Hero } from "../components";
import { services } from "../assets";

const Services = () => {
  return <>
    <Hero bg={[services]}>
      <h1 className="text-4xl font-extrabold text-white sm:text-5xl sm:leading-none">
        What We Do
      </h1>
      <BouncyDownArrow classes="text-white mt-[2rem]" to="main"/>
    </Hero>
    
    <section id="main" className="px-[10px]">
      <div className="max-w-[800px] mt-[120px] m-auto mb-[20px] text-18 leading-24 text-color-dark-2">
        <p className="text-24">At Henstock Foods Limited, we offer a wide range of services to meet the needs of our customers:</p>
        <span className="h-[40px] block"></span>
        <h3 className="text-24 leading-28 text-color-dark-1 text-left m-3 font-bold mx-0 mt-0">Food Processing:</h3>
        <p>Our Food Processing services transform raw agricultural products into market-ready goods. Utilizing state-of-the-art technology and adhering to the highest standards of quality and safety, we ensure that our products meet global market requirements. Our services include cleaning, sorting, milling, packaging, and preserving a wide variety of grains, pulses, and other food items to retain their nutritional value and extend shelf life.</p>
        <h3 className="text-24 leading-28 text-color-dark-1 text-left m-3 font-bold mx-0 mt-4">Climate Smart Agro Project Designs and Setup:</h3>
        <p>We offer comprehensive Climate Smart Agro Project Designs and Setup services aimed at enhancing agricultural productivity while mitigating environmental impact. Our projects incorporate innovative practices and technologies that promote sustainable farming, water conservation, and soil health. Our expert team collaborates with you to design and implement tailored solutions that address climate change challenges, ensuring long-term agricultural sustainability and resilience.</p>
        <h3 className="text-24 leading-28 text-color-dark-1 text-left m-3 font-bold mx-0 mt-4">Sustainable Agro Commodity Trade & Export:</h3>
        <p>Our Sustainable Agro Commodity Trade & Export services facilitate the international trade of high-quality agricultural products. We are committed to promoting sustainability throughout the supply chain, from farm to market. Our rigorous quality control measures and ethical sourcing practices ensure that our commodities meet international standards, providing our clients with reliable and sustainable products. We handle all aspects of the export process, including documentation, logistics, and compliance with global trade regulations.</p>
      
        <h3 className="text-24 leading-28 text-color-dark-1 text-left m-3 font-bold mx-0 mt-4">Consultancy Services:</h3>
        <p>Our Consultancy Services offer expert advice and solutions tailored to the agricultural and food processing industries. With a team of seasoned professionals, we provide strategic guidance on project management, supply chain optimization, market analysis, and regulatory compliance. Whether you are looking to expand your operations, improve efficiency, or navigate complex market dynamics, our consultancy services are designed to help you achieve your business goals and drive growth.</p>
      
      </div> 

      <div className="max-w-[800px] m-auto mb-[20px] text-18 leading-24 text-color-dark-2">
        <h3 className="text-28 leading-38 text-color-dark-1 text-left m-3 font-bold mx-0 mt-0">Our Commitment to Quality</h3>
        <p>At Henstock Foods Limited, quality is our top priority. We adhere to strict quality control measures at every stage of the production process to ensure that our products meet international standards.</p>
        <span className="h-[40px] block"></span>
      </div> 
      <div className="max-w-[800px] m-auto mb-[120px] text-18 leading-24 text-color-dark-2">

        <h3 className="text-28 leading-38 text-color-dark-1 text-left m-3 font-bold mx-0 mt-0">Our Impact</h3>
        <p>We are committed to making a positive impact on the communities we serve. Through our partnerships with farmers and suppliers, we are able to create sustainable livelihoods and promote economic development in Nigeria and beyond.</p>
        <span className="h-[40px] block"></span>
      </div> 
    </section>

    <ContactBanner />
  </>;
};

export default Services;