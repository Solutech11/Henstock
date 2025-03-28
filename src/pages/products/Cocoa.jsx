import React from "react";
import { Hero } from "../../components";
import ProdImage from "../../assets/prod.png";
import AnimatedText from "../../components/AnimatedText";
import TextContent from "../../components/sub-comp/TextContent";
import cocoa from "../../assets/cocoa.png";
import Flower from "../../assets/flower.png";
import { ProductImage } from "../../components/sub-comp/TextContent";
import c1 from "../../assets/cc1.png";
import c2 from "../../assets/cc2.png";
import c3 from "../../assets/cc3.png";
import c4 from "../../assets/cc4.png";

const Cocoa = () => {
  return (
    <>
      <div className="w-full block lg:hidden">
        <Hero bg={[ProdImage]}>
          <AnimatedText text="COCOA" />
          <p className="font-[DM Sans] font-medium text-[#ffffff] mt-5 text-lg text-center">
            Nigeria’s high-quality cocoa beans are renowned for their rich
            flavor and ideal fat content, making them highly sought after in the
            global chocolate industry.
          </p>
        </Hero>
      </div>
      <div className="hidden lg:block">
        <Hero
          bg={[ProdImage]}
          btn={false}
          title="COCOA"
          subTitle="Nigeria’s high-quality cocoa beans are renowned for their rich flavor and ideal fat content, making them highly sought after in the global chocolate industry."
        />
      </div>
      <div className="relative w-full bg-[#fff] lg:pt-36 pt-16">
        <div className="w-[90%] lg:w-[85%] mx-auto grid lg:grid-cols-2 gap-10">
          <TextContent
            right={false}
            firstTitle={
              "Cocoa beans — the foundation of chocolate production — are one of the most sought-after agricultural commodities globally. Henstock Foods sources premium-grade cocoa from local farmers, ensuring rich flavor, high butter content, and optimal fermentation for the food, cosmetics, and pharmaceutical industries."
            }
            secondTitle={
              "Cocoa is a major export product in West Africa, with Nigeria among the top producers. The global chocolate market fuels continuous demand, providing sustainable income for farmers and strengthening the national economy."
            }
            ThirdTitle={
              "Chocolate production, beverages, cosmetic products, pharmaceuticals."
            }
            lastTitle={
              "Raw cocoa beans, cocoa powder, cocoa butter, cocoa nibs."
            }
            seedName={"Cocoa"}
          />

          <div>
            <img
              src={cocoa}
              alt="crop-image"
              className="w-full lg:h-[570px] rounded-3xl"
            />
          </div>
        </div>
        <div className="lg:pt-26 pt-16 w-full">
          <img
            src={Flower}
            alt="flower-image"
            className="w-full h-[80px] object-cover"
          />
        </div>

        <ProductImage
          pic1={c1}
          pic2={c2}
          pic3={c3}
          pic4={c4}
          seedName={"Cashew Nuts"}
        />
        <div className="lg:pt-26 pt-16 w-full mb-10">
          <img
            src={Flower}
            alt="flower-image"
            className="w-full h-[80px] object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default Cocoa;
