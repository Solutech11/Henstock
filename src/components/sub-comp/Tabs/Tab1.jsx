import React from "react";
import bg6 from "../../../assets/bg6.jpg";
import imgT1 from "../../../assets/imgT1.jpg";
import imgT2 from "../../../assets/imgT1i.jpg";
import sec from "../../../assets/sec.jpg";

const Tab1 = ({ label }) => {
  return (
    <div className="w-full grid gap-9 lg:py-20">
      <div className="grid gap-5">
        <div className="w-full  flex justify-start items-center">
          <p className="bg-[#95B28333] rounded-full px-6 py-3 text-base text-[#5C8A3F] font-[Averia Serif Libre] font-normal ">
            {label}
          </p>
        </div>
        <div className="w-full grid lg:grid-cols-5 gap-5 mt-10">
          <div className="lg:col-span-2 grid gap-3">
            <p className="text-[17px] text-[#1E1E1E] font-[DM Sans] font-normal">
              At Henstock Foods Ltd., we ensure a steady supply of high-quality
              agro-commodities by working directly with farmers and trusted
              suppliers. From bulk supply to custom orders, our sourcing and
              distribution system guarantees freshness, traceability, and
              reliability for manufacturers and exporters.
            </p>
            <div className="w-full grid gap-3">
              <div className="flex space-x-2">
                <div className="w-3.5 h-[5px] mt-2 rounded-full bg-black"></div>
                <p className="font-[DM Sans] font-normal text-[#1E1E1E] text-[17px]">
                  <span className="font-medium text-black">Bulk Supply & Wholesale Distribution:</span> Neem
                  Delivering premium Neem Seeds, Casia Tora, Cashew Nuts, Ginger, and Sesame Seeds in large quantities for manufacturers and exporters.
                </p>
              </div>
              <div className="flex space-x-2">
                <div className="w-2.5 h-[5px] mt-2 rounded-full bg-black"></div>
                <p className="font-[DM Sans] font-normal text-[#1E1E1E] text-[17px]">
                  <span className="font-medium text-black">Contract Farming & Direct Sourcing:</span>{" "}
                  Partnering with local farmers to guarantee consistent supply, traceability, and ethical sourcing.
                </p>
              </div>
              <div className="flex space-x-2">
                <div className="w-2.5 h-[5px] mt-2 rounded-full bg-black"></div>
                <p className="font-[DM Sans] font-normal text-[#1E1E1E] text-[17px]">
                  <span className="font-medium text-black">
                  Customized Orders: 
                  </span>{" "}
                  Offering personalized specifications on quality grades, moisture content, and processing standards to meet clients' specific needs.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <img
              src={imgT1}
              alt=""
              className=" w-full lg:h-[405px] rounded-xl"
            />
          </div>

          <div className="grid lg:gap-3 gap-5">
            <img
              src={imgT2}
              alt=""
              className="w-full md:h-[200px] rounded-xl object-cover"
            />
            <img
              src={sec}
              alt=""
              className="w-full md:h-[200px] rounded-xl object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tab1;
