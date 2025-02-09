import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { BsArrowDown } from "react-icons/bs";

const BouncyDownArrow = ({ to, classes }) => {
  return (
    <div className={`flex justify-center items-center ${classes}`}>
      <ScrollLink to={to} spy={true} offset={-70} smooth={true} duration={500}>
        <div className="animate-bounce cursor-pointer">
          <BsArrowDown className="text-4xl" />
        </div>
      </ScrollLink>
    </div>
  );
};

export default BouncyDownArrow;
