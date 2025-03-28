import React from "react";
import eq1 from "../../../assets/ag1.jpg";
import eq2 from "../../../assets/ag2.jpg";
import eq3 from "../../../assets/ag3.jpg";

const Tab5 = ({ label }) => {
  return (
    <div className="w-full grid gap-9 lg:py-20">
      <div className="grid gap-5">
        <div className="w-full  flex justify-start items-center">
          <p className="bg-[#95B28333] rounded-full px-6 py-3 text-base text-[#5C8A3F] font-[Averia Serif Libre] font-normal ">
            {label}
          </p>
        </div>
        <div className="w-full grid lg:grid-cols-5 gap-5 mt-10">
          <div className="lg:col-span-2 grid lg:gap-0 gap-3">
            <p className="text-[17px] text-[#1E1E1E] font-[DM Sans] font-normal">
              Henstock Foods is bridging the gap between large-scale suppliers
              and small-scale buyers
            </p>
            <div className="w-full grid lg:gap-0 gap-3">
              <div className="flex space-x-2">
                <div className="w-2.5 h-[5px] mt-2 rounded-full bg-black"></div>
                <p className="font-[DM Sans] font-normal text-[#1E1E1E] text-[17px]">
                  <span className="font-medium text-black">
                    Online Agro-Commodity Marketplace:
                  </span>{" "}
                   A convenient platform for small-scale buyers to purchase
                  high-quality agricultural products directly.
                </p>
              </div>
              <div className="flex space-x-2">
                <div className="w-2.5 h-[5px] mt-2 rounded-full bg-black"></div>
                <p className="font-[DM Sans] font-normal text-[#1E1E1E] text-[17px]">
                  <span className="font-medium text-black">
                    Subscription & Bulk Purchasing Plans:
                  </span>{" "}
                  Offering long-term supply contracts with discounts and
                  tailored deals for returning clients and high-volume buyers.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <img src={eq1} alt="" className=" w-full lg:h-[407px] rounded-xl" />
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

export default Tab5;
