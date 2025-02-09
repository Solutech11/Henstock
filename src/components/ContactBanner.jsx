import React from 'react';
import { pattern } from '../assets';
import { PATH_HOME } from '../routes/paths';
import { Link } from 'react-router-dom';

const ContactBanner = () => {
  return (
    <div className="relative bg-[#f0f5fc] py-16 px-6 text-center">
      <div className="relative z-[2] max-w-[800px] m-auto opacity-1">
        <h2 className="text-48 text-color-dark-2 font-bold mb-6">Contact Us Today!</h2>
        <p className="text-lg md:text-xl text-color-dark-2 mb-8">Need agricultural commodities or food manufacturing services? Contact Henstock Foods Limited today!</p>
        <Link to={PATH_HOME.general.contact}>
          <button className="bg-white text-blue-500 hover:bg-blue-500 hover:text-white py-3 px-8 rounded-full font-semibold text-lg transition duration-300">Get in Touch</button>
        </Link>
      </div>
      <div style={{ background: `url(${pattern})`}} className="absolute h-full w-full inset-0 opacity-10 z-[0]"></div>
    </div>
  );
};

export default ContactBanner;
