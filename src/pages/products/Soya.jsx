import React from "react";
import { Hero } from "../../components";
import ProdImage from "../../assets/prod.png";
import AnimatedText from "../../components/AnimatedText";
import TextContent from "../../components/sub-comp/TextContent";
import soya from "../../assets/soya.png";
import Flower from "../../assets/flower.png";
import { ProductImage } from "../../components/sub-comp/TextContent";
import c1 from "../../assets/sy1.png";
import c2 from "../../assets/sy2.png";
import c3 from "../../assets/sy3.png";
import c4 from "../../assets/sy4.png";

const Soya = () => {
  return (
    <>
      <div className="w-full block lg:hidden">
        <Hero bg={[ProdImage]}>
          <AnimatedText text="SOYA BEANS" />
          <p className="font-[DM Sans] font-medium text-[#ffffff] mt-5 text-lg text-center">
            Our non-GMO soybeans are perfect for both local consumption and
            international processing into soy-based products.
          </p>
        </Hero>
      </div>
      <div className="hidden lg:block">
        <Hero
          bg={[ProdImage]}
          btn={false}
          title="SOYA BEANS"
          subTitle="Our non-GMO soybeans are perfect for both local consumption and international processing into soy-based products."
        />
      </div>
      <div className="relative w-full bg-[#fff] lg:pt-36 pt-16">
        <div className="w-[90%] lg:w-[85%] mx-auto grid lg:grid-cols-2 gap-10">
          <TextContent
            right={false}
            firstTitle={
              "Soya beans are a nutrient-packed, high-protein legume with widespread applications in food processing, animal feed, and industrial production. Henstock Foods delivers non-GMO, export-grade soya beans to meet international standards and ensure consistent quality."
            }
            secondTitle={
              "Soya beans play a vital role in global food security, with strong demand from China, Europe, and the US for protein-rich food products and animal feed. Nigeria's expanding production offers significant export potential, providing income for smallholder farmers and large-scale producers alike."
            }
            ThirdTitle={
              "Protein-Rich Food Production, Animal feed, cooking oil, industrial use."
            }
            lastTitle={
              "Whole soya beans, soya meal, soya oil, soya flour."
            }
            seedName={"Soya Beans"}
          />

          <div>
            <img
              src={soya}
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

export default Soya;
