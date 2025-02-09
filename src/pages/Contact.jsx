import React from "react";
import { BouncyDownArrow, ContactForm, Hero } from "../components";
import { contact, email } from "../assets";

const Contact = () => {
  return <>
    <Hero bg={[contact]}>
      <h1 className="text-4xl font-extrabold text-white sm:text-5xl sm:leading-none">
        Contact Us
      </h1>
      <BouncyDownArrow classes="text-white mt-[2rem]" to="main"/>
    </Hero>

    <section id="main" className="flex flex-col justify-center py-[100px] max-w-[800px] px-[10px] mx-auto">
      <p className="relative w-full text-color-dark-2 text-center mx-auto mb-[40px] font-bold text-48 leading-58">
        Let us Know How We can Serve You
      </p>
      <div className="flex flex-col justify-center md:flex-row items-center">
        <div className="md:w-[50%] hidden md:flex justify-center items-center p-[90px] ">
          <img src={email} alt="" className=""/>
        </div>
        <div className="md:flex-grow flex justify-center items-center w-full">
          <ContactForm/>
        </div>
      </div>
    </section>
  </>;
};


export default Contact;