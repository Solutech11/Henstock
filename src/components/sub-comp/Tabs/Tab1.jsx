import React from "react";
import bg6 from "../../../assets/bg6.jpg";
import imgT1 from "../../../assets/imgT1.jpg";
import imgT2 from "../../../assets/imgT1i.jpg";

const Tab1 = ({label}) => {
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
            Exporting and distributing premium agro-commodities to global
            markets.
          </p>
          <p className="text-[17px] text-[#1E1E1E] font-[DM Sans] font-normal">
            We specialize in sourcing, processing, and exporting high-quality
            agricultural products that meet international standards. By working
            closely with farmers, we ensure that our commodities are fresh,
            well-packaged, and ready for export.
          </p>
        </div>
      </div>
      <div className="w-full grid lg:grid-cols-2 gap-10">
        <img src={imgT1} alt="" className=" w-full lg:h-[405px] rounded-3xl" />
        <img src={imgT2} alt="" className="w-full lg:h-[405px] rounded-3xl object-cover" />
      </div>
      <div className="w-full">
        <div className="flex items-center space-x-2">
          <div className="p-[2.5px] rounded-full bg-black"></div>
          <p className="font-[DM Sans] font-normal text-[#1E1E1E] text-[17px]">
            <span className="font-medium text-black">Products:</span> Neem
            Seeds, Cassia Tora, Soya Beans, Sesame, Groundnuts
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <div className="p-[2.5px] rounded-full bg-black"></div>
          <p className="font-[DM Sans] font-normal text-[#1E1E1E] text-[17px]">
            <span className="font-medium text-black">Markets:</span> India, China, UAE, USA
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <div className="p-[2.5px] rounded-full bg-black"></div>
          <p className="font-[DM Sans] font-normal text-[#1E1E1E] text-[17px]">
            <span className="font-medium text-black">Quality Assurance:</span>{" "}
            Compliant with global safety and trade regulations
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tab1;
