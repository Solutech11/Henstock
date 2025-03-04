import React from "react";
import part1 from "../../assets/part1.png";
import part2 from "../../assets/part2.png";
import part3 from "../../assets/part3.png";
import part4 from "../../assets/part4.png";
import part5 from "../../assets/part5.png";
import line1 from "../../assets/Line1.svg";
import line2 from "../../assets/Line2.svg";
import { Link } from "react-scroll";

const Certificate = () => {
  const images = [
    {
      id: 2,
      url: part1,
      title: "Global Logistics partner",
    },
    {
      id: 3,
      url: part2,
      title: "Agricultural Research Institute",
    },
    {
      id: 4,
      url: part4,
      title: "Organic Certification",
    },
    {
      id: 5,
      url: part3,
      title: "Nigeria Agricultural Quarantine Service",
    },

    {
      id: 6,
      url: part5,
      title: "Sustainability Certification",
    },
  ];

  const duplicatedImages = [
    ...images,
    ...images,
    ...images,
    ...images,
    ...images,
    ...images,
    ...images,
    ...images,
    ...images,
    ...images,
  ];

  return (
    <React.Fragment>
      <div className="w-full bg-[#5C8A3F4D] py-14 block relative overflow-hidden">
        <div className="w-[90%] lg:w-[85%] mx-auto flex justify-start items-center">
          <p className="bg-[#FFF1EA1A] rounded-full px-5 py-3 text-base text-[#1E1E1E] shadow font-[Averia Serif Libre] font-normal ">
            Partnership & Certification
          </p>
        </div>
        <div className="wrapper">
          <div className="scroller">
            {duplicatedImages.map((image, index) => (
              <div key={`${image.id}-${index}`} className="item">
                <img
                  src={image.url}
                  alt={`support-${image.id}`}
                  className="w-[100px] h-[100px] mx-auto "
                />
                <p className="font-[DM Sans] font-medium text-base text-center mt-4">
                  {image.title}
                </p>
              </div>
            ))}
          </div>
        </div>
        <img
          src={line1}
          alt=""
          className="absolute z-[2] top-0 right-0 w-[500px] hidden lg:block opacity-80"
        />
        <img
          src={line2}
          alt=""
          className="absolute z-[2] bottom-0 left-0 w-[500px] hidden lg:block opacity-80"
        />

      </div>
    </React.Fragment>
  );
};

export default Certificate;
