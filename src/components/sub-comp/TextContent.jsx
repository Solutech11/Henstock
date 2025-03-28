import React from "react";

const TextContent = ({
  right,
  firstTitle,
  secondTitle,
  ThirdTitle,
  lastTitle,
  seedName,
  subTrd1,
  subTrd2,
  subTrd3,
}) => {
  return (
    <div className="w-full bg-white">
      <div className="text-color-dark-2 text-justify flex flex-col space-y-5">
        <div className="w-full flex justify-start items-center">
          <div className={`${right === true && "flex justify-end w-full"}`}>
            <p
              className={`bg-[#95B28333] rounded-full px-5 py-3 text-base ${
                right === true
                  ? "text-[#5C8A3F] bg-[#95B28333]"
                  : " text-[#F16C21] bg-[#D79F8333]"
              } font-[Averia Serif Libre] font-normal`}
            >
              {seedName}
            </p>
          </div>
        </div>
        <p className="font-[DM Sans] font-normal text-[#1E1E1E] text-[17px] p-5 bg-[#AEAEAE1A] rounded-2xl">
          {firstTitle}
        </p>
        {seedName !== "Dried Split Ginger" ? (
          <p className="font-[DM Sans] font-normal text-[#1E1E1E] text-[17px] p-5 bg-[#AEAEAE1A] rounded-2xl">
            {secondTitle}
          </p>
        ) : (
          <p className="font-[DM Sans] font-normal text-[#1E1E1E] text-[17px] p-5 bg-[#AEAEAE1A] rounded-2xl">
            <p className="font-semibold pb-2">Health Benefits</p>
            <div>
              <span className="font-semibold">
                Anti-inflammatory powerhouse:
              </span>
              Eases nausea, muscle pain, and digestive issues.
            </div>
            <div>
              <span className="font-semibold">Immunity booster::</span>
              Supports cold and flu relief.
            </div>
            <div>
              <span className="font-semibold">Anti-cancer properties:</span>
              Packed with antioxidants like gingerol for cell protection.
            </div>
          </p>
        )}

        <p className="font-[DM Sans] font-normal text-[#1E1E1E] text-[17px] p-3 bg-[#AEAEAE1A] rounded-2xl">
          <span className="font-semibold">Uses:</span> {ThirdTitle}
        </p>
        <p className="font-[DM Sans] font-normal text-[#1E1E1E] text-[17px] p-4 bg-[#AEAEAE1A] rounded-2xl">
          <span className="font-semibold">Key Products:</span> {lastTitle}
        </p>
        <div className="w-full flex justify-start items-center"></div>
      </div>
    </div>
  );
};

export default TextContent;

export const ProductImage = ({ pic1, pic2, pic3, pic4, seedName }) => {
  return (
    <div className=" relative w-full bg-[#fff] lg:pt-20 pt-16">
      <div className="w-[90%] lg:w-[85%] mx-auto grid lg:grid-cols-3 gap-10">
        <div>
          <img
            src={pic1}
            alt="product_image"
            className="object-cover lg:h-[650px] rounded-md"
          />
        </div>
        <div className="grid lg:gap-1 gap-10">
          <img
            src={pic2}
            alt="product_image"
            className={`object-contain rounded-md ${
              seedName === "Cashew Nuts" || seedName === "Cocoa" ? "" : "md:h-[330px]"
            }`}
          />
          <img
            src={pic3}
            alt="product_image"
            className={`object-contain rounded-md ${
              seedName === "Cashew Nuts" || seedName === "Cocoa" ? "" : "md:h-[350px]"
            }`}
          />
        </div>
        <div>
          <img
            src={pic4}
            alt="product_image"
            className="object-cover lg:h-[650px] rounded-md "
          />
        </div>
      </div>
    </div>
  );
};
