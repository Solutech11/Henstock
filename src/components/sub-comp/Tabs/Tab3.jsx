import React from "react";
import bg6 from "../../../assets/bg6.jpg";
import imgT3 from "../../../assets/T3.jpg";
import imgT4 from "../../../assets/T3i.jpg";
import eq1 from "../../../assets/eq1.jpg";
import eq2 from "../../../assets/eq2.jpg";
import eq3 from "../../../assets/eq3.jpg";

const Tab3 = ({ label }) => {
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
              We handle the complexities of international trade so our partners
              can focus on their business. From documentation to global
              shipping, Henstock Foods ensures a seamless export process, with
              compliance and warehousing support every step of the way.
            </p>
            <div className="w-full grid gap-3">
              <div className="flex space-x-2">
                <div className="w-3.5 h-[5px] mt-2 rounded-full bg-black"></div>
                <p className="font-[DM Sans] font-normal text-[#1E1E1E] text-[17px]">
                  <span className="font-medium text-black">
                    International Shipping & Freight Forwarding:
                  </span>{" "}
                  Managing export logistics, documentation, and customs
                  clearance, ensuring timely delivery.
                </p>
              </div>
              <div className="flex space-x-2">
                <div className="w-2.5 h-[5px] mt-2 rounded-full bg-black"></div>
                <p className="font-[DM Sans] font-normal text-[#1E1E1E] text-[17px]">
                  <span className="font-medium text-black">
                    Trade Compliance & Certification:
                  </span>{" "}
                  Assisting clients in acquiring essential certifications such
                  as HACCP, NAFDAC, FDA, and EU Export Standards.
                </p>
              </div>
              <div className="flex space-x-2">
                <div className="w-2.5 h-[5px] mt-2 rounded-full bg-black"></div>
                <p className="font-[DM Sans] font-normal text-[#1E1E1E] text-[17px]">
                  <span className="font-medium text-black">
                    Warehousing & Distribution:
                  </span>{" "}
                   Offering safe storage facilities and distribution networks to
                  support local and international delivery.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <img
              src={eq1}
              alt=""
              className=" w-full lg:h-[405px] rounded-xl"
            />
          </div>

          <div className="grid lg:gap-3 gap-5">
            <img
              src={eq2}
              alt=""
              className="w-full md:h-[200px] rounded-xl object-cover"
            />
            <img
              src={eq3}
              alt=""
              className="w-full md:h-[200px] rounded-xl object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tab3;
