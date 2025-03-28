import React from "react";
import { Hero } from "../../components";
import ProdImage from "../../assets/prod.png";
import AnimatedText from "../../components/AnimatedText";
import TextContent from "../../components/sub-comp/TextContent";
import SemameSeed from "../../assets/sesame.png";
import Flower from "../../assets/flower.png";
import { ProductImage } from "../../components/sub-comp/TextContent";
import S1 from "../../assets/s1.png";
import S2 from "../../assets/s2.png";
import S3 from "../../assets/s3.png";
import S4 from "../../assets/s4.png";

const Sesame = () => {
  return (
    <>
      <div className="w-full block lg:hidden">
        <Hero bg={[ProdImage]}>
          <AnimatedText text="SESAME SEEDS" />
          <p className="font-[DM Sans] font-medium text-[#ffffff] mt-5 text-lg text-center">
            One of Nigeria’s top export crops, sesame seeds are known for their
            high oil content and nutritional benefits. We supply premium-grade
            sesame seeds for both local processing and international export.
          </p>
        </Hero>
      </div>
      <div className="hidden lg:block">
        <Hero
          bg={[ProdImage]}
          btn={false}
          title="SESAME SEEDS"
          subTitle="One of Nigeria’s top export crops, sesame seeds are known for their high oil content and nutritional benefits. We supply premium-grade sesame seeds for both local processing and international export."
        />
      </div>
      <div className="relative w-full bg-[#fff] lg:pt-36 pt-16">
        <div className="w-[90%] lg:w-[85%] mx-auto grid lg:grid-cols-2 gap-10">
          <TextContent
            right={false}
            firstTitle={
              "Sesame seeds are among the oldest cultivated oilseeds, valued for their nutty flavor and oil content. Henstock Foods provides premium-grade sesame seeds, ideal for food production, oil extraction, and snacks."
            }
            secondTitle={
              "With growing demand from Asia, the Middle East, and Europe, sesame seeds are a profitable cash crop supporting farmers and contributing to export revenue."
            }
            ThirdTitle={
              "Edible oil production, tahini, bakery products, and snacks."
            }
            lastTitle={"Raw sesame seeds, sesame oil, sesame paste (tahini)."}
            seedName={"Sesame Seeds"}
          />
          <div>
            <img
              src={SemameSeed}
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

        <ProductImage pic1={S1} pic2={S2} pic3={S3} pic4={S4} />
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

export default Sesame;
