import React from "react";
import { henstockLogo } from "../assets";
import Logo from "../assets/HFLogo2.png";

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col justify-center items-center bg-white">
      <div className="relative w-24 h-24">
        <div className="absolute inset-0 border-4 border-t-[#F16C21] border-r-[#F16C21] border-b-transparent border-l-transparent rounded-full animate-spin"></div>

        <div className="absolute inset-0 flex justify-center items-center">
          <img
            src={Logo}
            alt="Henstock Logo"
            className="w-20 h-20 object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
