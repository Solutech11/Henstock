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

    <section id="contact" className="flex items-center justify-center py-[100px] px-10 bg-gray-50">
      <div className="max-w-[1200px] w-full">
        {/* Section Title */}
        <h3 className="text-3xl md:text-4xl font-bold text-green-700 text-center mb-10">
          Contact Us
        </h3>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Side: Contact Details */}
          <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
            <h4 className="text-2xl font-bold text-green-700 mb-6">
              Get in Touch
            </h4>
            <p className="text-gray-600 mb-6">
              We’d love to hear from you! Whether you have a question about our products, services, or partnerships, our team is here to help.
            </p>
            <div className="space-y-4">
              {/* Office Address */}
              <div>
                <h5 className="text-lg font-semibold text-green-700">Office Address</h5>
                <p className="text-gray-600">
                  No. 18, Huambo Crescent Street, Zone 7, FCT-Abuja, Nigeria.
                </p>
              </div>

              {/* Phone Numbers */}
              <div>
                <h5 className="text-lg font-semibold text-green-700">Phone Numbers</h5>
                <p className="text-gray-600">
                  07082222184, 08118684626
                </p>
              </div>

              {/* Email */}
              <div>
                <h5 className="text-lg font-semibold text-green-700">Email</h5>
                <p className="text-gray-600">
                  info@henstockfoods.com
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Map */}
          <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200 flex items-center justify-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.715279714835!2d7.469290315316821!3d9.012061893547007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMDAnNDMuNCJOIDfCsDI4JzE2LjgiRQ!5e0!3m2!1sen!2sng!4v1633024000000!5m2!1sen!2sng"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>

        {/* Call-to-Action */}
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600 mb-6">
            Reach out to us today for inquiries, partnerships, or support. We’re here to help!
          </p>
          <a
            href="mailto:info@henstockfoods.com"
            className="bg-green-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-800 transition-colors"
          >
            Email Us
          </a>
        </div>
      </div>
    </section>

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