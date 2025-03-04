import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Button = ({ width, children }) => {
  return (
    <div
      className={`md:w-${
        width ? width : "auto"
      } cursor-pointer bg-[#fbe22f] hover:bg-color-dark-2 hover:text-white text-color-dark-1 font-bold py-2 px-4 flex flex-row justify-center items-center rounded-full`}
    >
      {children} <FaLongArrowAltRight className="ml-3" />
    </div>
  );
};

export const CustomBtn = ({title}) => {
  return (
    <div
      type="button"
      className={`cursor-pointer bg-[#5C8A3F] hover:bg-[#446f29] text-white text-base font-[DM Sans] font-medium py-3 px-10 flex flex-row justify-center items-center rounded-full`}
    >
      {title} <FaArrowRight size={20} className="ml-3" />
    </div>
  );
};

export default Button;
