import React from "react";
import { grapescutout, henstockLogo, henstockLogoCircle } from "../assets";
import { Link } from "react-router-dom";
import { FaSquareFacebook, FaSquareXTwitter } from "react-icons/fa6";
import { PiInstagramLogoFill } from "react-icons/pi";
import { PATH_HOME } from "../routes/paths";
import { FaPhone, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="relative bg-footer-gradient py-4 flex justify-center items-center px-[40px]">
      <img src={grapescutout} alt="" className="absolute z-[0] h-full left-0 opacity-20 hidden md:block" />
      <div className="w-[800px] z-[2] flex flex-col justify-center items-center text-color-foot text-14 leading-26">
        <div className="py-8 flex flex-col md:flex-row gap-10 py-[35px]">
          <div className="flex-1 grid grid-rows gap-4 grid-cols-2">
            <div>
              <h4 className="text-15 leading-28 text-color-secondary-1">Quick links</h4>
              <ul>
                <li><Link to={PATH_HOME.general.home} className="hover:text-color-dark-7">Home</Link></li>
                <li><Link to={PATH_HOME.general.services} className="hover:text-color-dark-7">Services</Link></li>
                <li><Link to={PATH_HOME.general.about} className="hover:text-color-dark-7">About</Link></li>
                <li><Link to={PATH_HOME.general.contact} className="hover:text-color-dark-7">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-15 leading-28 text-color-secondary-1">Contact us</h4>
              <ul>
                <li>18 Huambo Crescent, Wuse Zone 7 Abuja </li>
                <li className="flex flex-row items-center">support@henstockfoods.com</li>
                <li className="flex flex-row items-center"><FaPhone className="mr-4" /> 08118684626</li>
                <li className="flex flex-row items-center"><FaWhatsapp className="mr-4" /> 07082222184</li>
              </ul>
            </div>
          </div>
          <div className="flex-1 flex flex-col space-y-5">
            <Link to={PATH_HOME.general.home}><img src={'/logo.png'} alt="" className="w-[100px] rounded-full"/></Link>
            <p className="text-18">Henstock Foods Limited.</p>
          
            <p>Your Partner in Agricultural Commodities and Food Solutions</p>
            {/* <div className="flex flex-row space-x-5">
              <FaSquareFacebook size={25} className="hover:text-color-dark-7"/>
              <FaSquareXTwitter size={25} className="hover:text-color-dark-7"/>
              <PiInstagramLogoFill size={25} className="hover:text-color-dark-7"/>
            </div> */}
          </div>
        </div>
        <div className="w-[100%] mx-auto px-4 flex flex-row justify-center items-center border-t-2 pt-3 border-color-border mt-5">
          <p className="text-center text-color-foot text-14 leading-26">
            &copy; 2024 Henstock Limited. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
