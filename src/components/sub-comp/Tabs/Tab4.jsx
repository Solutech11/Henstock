import React from "react";
import bg6 from "../../../assets/bg6.jpg";

const Tab4 = ({ label }) => {
  return (
    <div className="w-full grid gap-9">
      <div className="grid gap-5">
        <div className="w-full  flex justify-start items-center">
          <p className="bg-[#95B28333] rounded-full px-6 py-3 text-base text-[#5C8A3F] font-[Averia Serif Libre] font-normal ">
            {label}
          </p>
        </div>
        <div>
          {/* <p className="text-lg text-[#1E1E1E] font-[DM Sans] font-medium">
            Exporting and distributing premium agro-commodities to global
            markets.
          </p> */}
          <p className="text-[17px] text-[#1E1E1E] font-[DM Sans] font-normal">
            At Henstock Foods Ltd, we go beyond raw agro-commodities to offer a
            range of high-quality value-added products. From neem oil and cassia
            tora powder to herbal extracts, our products are crafted to meet the
            diverse needs of industries such as agriculture, cosmetics, and
            pharmaceuticals.
          </p>
        </div>
      </div>
      <div className="w-full grid lg:grid-cols-2 gap-10">
        <img src={bg6} alt="" className=" w-full lg:h-[405px] rounded-3xl" />
        <img src={bg6} alt="" className="w-full lg:h-[405px] rounded-3xl" />
      </div>
      <div className="w-full">
        <div className="flex items-center space-x-2">
          <div className="p-[2.5px] rounded-full bg-black"></div>
          <p className="font-[DM Sans] font-normal text-[#1E1E1E] text-[17px]">
            Neem oil for organic pesticides and cosmetics
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <div className="p-[2.5px] rounded-full bg-black"></div>
          <p className="font-[DM Sans] font-normal text-[#1E1E1E] text-[17px]">
            Cassia tora powder for industrial and herbal applications
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <div className="p-[2.5px] rounded-full bg-black"></div>
          <p className="font-[DM Sans] font-normal text-[#1E1E1E] text-[17px]">
            Herbal extracts for pharmaceuticals and supplements
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <div className="p-[2.5px] rounded-full bg-black"></div>
          <p className="font-[DM Sans] font-normal text-[#1E1E1E] text-[17px]">
            Customized solutions for specific industry needs
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tab4;
