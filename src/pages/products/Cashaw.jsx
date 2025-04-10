import React from "react";
import { Hero } from "../../components";
import ProdImage from "../../assets/prod.png";
import AnimatedText from "../../components/AnimatedText";
import TextContent from "../../components/sub-comp/TextContent";
import cashewSeed from "../../assets/cashew.png";
import Flower from "../../assets/flower.png";
import { ProductImage } from "../../components/sub-comp/TextContent";
import c1 from "../../assets/c1.png";
import c2 from "../../assets/c2.png";
import c3 from "../../assets/c3.png";
import c4 from "../../assets/c4.png";
import CH from "../../assets/cashewH.jpg";

const Cashaw = () => {
  return (
    <>
      <div className="w-full block lg:hidden">
        <Hero bg={[CH]}>
          <AnimatedText text="RAW CASHEW NUTS" />
          <p className="font-[DM Sans] font-medium text-[#ffffff] mt-5 text-lg text-center">
            Our raw cashew nuts are carefully selected from Nigeria’s best
            farms, ensuring freshness, high kernel yield, and export-grade
            quality.
          </p>
        </Hero>
      </div>
      <div className="hidden lg:block">
        <Hero
          bg={[CH]}
          btn={false}
          title="RAW CASHEW NUTS"
          subTitle="Our raw cashew nuts are carefully selected from Nigeria’s best farms, ensuring freshness, high kernel yield, and export-grade quality."
        />
      </div>
      <div className="relative w-full bg-[#fff] lg:pt-36 pt-16">
        <div className="w-[90%] lg:w-[85%] mx-auto grid lg:grid-cols-2 gap-10">
          <div>
            <img
              src={cashewSeed}
              alt="crop-image"
              className="w-full lg:h-[570px] rounded-3xl"
            />
          </div>

          <TextContent
            right={true}
            firstTitle={
              "Our cashew nuts are sourced from trusted local farms, ensuring premium quality for both domestic and international markets. Renowned for their rich, buttery taste, our cashews undergo careful processing to maintain freshness, texture, and flavor — ready for food production, snacks, and by-products."
            }
            secondTitle={
              "Cashew nuts are one of the most traded nuts globally, with high demand across Europe, Asia, and North America. Nigeria ranks among the leading cashew-producing countries, making it a valuable export crop that supports local farmers and boosts the economy."
            }
            ThirdTitle={
              "Snacks, bakery products, dairy alternatives, and cashew butter."
            }
            lastTitle={"Raw cashew nuts, cashew kernels, cashew butter."}
            seedName={"Cashew Nuts"}
          />
        </div>
        <div className="lg:pt-26 pt-16 w-full">
          <img
            src={Flower}
            alt="flower-image"
            className="w-full h-[80px] object-cover"
          />
        </div>

        <ProductImage pic1={c1} pic2={c2} pic3={c3} pic4={c4} seedName={"Cashew Nuts"}/>
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

export default Cashaw;
