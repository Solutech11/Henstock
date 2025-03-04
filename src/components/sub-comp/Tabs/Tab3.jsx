import React from "react";
import bg6 from "../../../assets/bg6.jpg";
import imgT3 from "../../../assets/T3.jpg";
import imgT4 from "../../../assets/T3i.jpg";


const Tab3 = ({ label }) => {
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
            Offering modern agricultural machinery to enhance productivity and
            efficiency.
          </p>
          <p className="text-[17px] text-[#1E1E1E] font-[DM Sans] font-normal">
            We provide farmers with high-quality tools and equipment that make
            farming easier and more efficient. Our range includes everything
            from small-scale farm tools to large industrial-grade machinery.
          </p>
        </div>
      </div>
      <div className="w-full grid lg:grid-cols-2 gap-10">
        <img src={imgT3} alt="" className=" w-full lg:h-[405px] rounded-3xl" />
        <img src={imgT4} alt="" className="w-full lg:h-[405px] rounded-3xl" />
      </div>
      <div className="w-full">
        <div className="flex items-center space-x-2">
          <div className="p-[2.5px] rounded-full bg-black"></div>
          <p className="font-[DM Sans] font-normal text-[#1E1E1E] text-[17px]">
            <span className="font-medium text-black">Equipments:</span> Tractors, Planters, Harvesters, Irrigation Systems
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <div className="p-[2.5px] rounded-full bg-black"></div>
          <p className="font-[DM Sans] font-normal text-[#1E1E1E] text-[17px]">
            <span className="font-medium text-black">Additional Services:</span> Installation, Maintenance, and Training
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <div className="p-[2.5px] rounded-full bg-black"></div>
          <p className="font-[DM Sans] font-normal text-[#1E1E1E] text-[17px]">
            <span className="font-medium text-black">Support:</span>{" "}
            Ongoing customer service for troubleshooting and repairs
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tab3;
