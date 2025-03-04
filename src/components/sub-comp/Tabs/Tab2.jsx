import React from "react";
import bg6 from "../../../assets/bg6.jpg";
import imgT2 from "../../../assets/imgT2.jpg";
import imgT3 from "../../../assets/T2i.jpg";

const Tab2 = ({ label }) => {
  return (
    <div className="w-full grid gap-9">
      <div className="grid gap-5">
        <div className="w-full  flex justify-start items-center">
          <p className="bg-[#95B28333] rounded-full px-6 py-3 text-base text-[#5C8A3F] font-[Averia Serif Libre] font-normal ">
            {label}
          </p>
        </div>
        <div>
          <p className="text-lg text-[#1E1E1E] font-[DM Sans] font-medium">
            Providing top-tier food processing solutions with strict hygiene and
            safety protocols.
          </p>
          <p className="text-[17px] text-[#1E1E1E] font-[DM Sans] font-normal">
            We use cutting-edge technology to process and package agricultural
            products while maintaining high nutritional value. Our packaging
            solutions are designed to extend shelf life and meet both local and
            international market standards.
          </p>
        </div>
      </div>
      <div className="w-full grid lg:grid-cols-2 gap-10">
        <img src={imgT2} alt="" className=" w-full lg:h-[405px] rounded-3xl object-cover" />
        <img src={imgT3} alt="" className="w-full lg:h-[405px] rounded-3xl object-cover" />
      </div>
      <div className="w-full">
        <div className="flex items-center space-x-2">
          <div className="p-[2.5px] rounded-full bg-black"></div>
          <p className="font-[DM Sans] font-normal text-[#1E1E1E] text-[17px]">
            <span className="font-medium text-black">rocessing Services:</span> Rice Milling, Flour Production, Livestock Feed Manufacturing
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <div className="p-[2.5px] rounded-full bg-black"></div>
          <p className="font-[DM Sans] font-normal text-[#1E1E1E] text-[17px]">
            <span className="font-medium text-black">Packaging Solutions:</span> Eco-friendly, consumer-ready, and bulk packaging available
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <div className="p-[2.5px] rounded-full bg-black"></div>
          <p className="font-[DM Sans] font-normal text-[#1E1E1E] text-[17px]">
            <span className="font-medium text-black">Compliance:</span> Adheres to food safety regulations and best practices
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tab2;
