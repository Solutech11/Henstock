import React from "react";
import { Hero } from "../../components";
import ProdImage from "../../assets/prod.png";
import AnimatedText from "../../components/AnimatedText";
import TextContent from "../../components/sub-comp/TextContent";
import cassia from "../../assets/cassia.png";
import Flower from "../../assets/flower.png";
import { ProductImage } from "../../components/sub-comp/TextContent";
import c1 from "../../assets/ca1.png";
import c2 from "../../assets/ca2.png";
import c3 from "../../assets/ca3.png";
import c4 from "../../assets/ca4.png";
import cH from "../../assets/cc1.png";

const Cassia = () => {
  return (
    <>
      <div className="w-full block lg:hidden">
        <Hero bg={[cH]}>
          <AnimatedText text="CASSIA TORA" />
          <p className="font-[DM Sans] font-medium text-[#ffffff] mt-5 text-lg text-center">
            A valuable herb used in food and medicinal industries, Cassia Tora
            is sourced from trusted farms to meet export quality standards.
          </p>
        </Hero>
      </div>
      <div className="hidden lg:block">
        <Hero
          bg={[cH]}
          btn={false}
          title="CASSIA TORA"
          subTitle="A valuable herb used in food and medicinal industries, Cassia Tora is sourced from trusted farms to meet export quality standards."
        />
      </div>
      <div className="relative w-full bg-[#fff] lg:pt-36 pt-16">
        <div className="w-[90%] lg:w-[85%] mx-auto grid lg:grid-cols-2 gap-10">
          <div>
            <img
              src={cassia}
              alt="crop-image"
              className="w-full lg:h-[570px] rounded-3xl"
            />
          </div>

          <TextContent
            right={false}
            firstTitle={
              "Cassia Tora is a highly versatile, fast-growing legume widely recognized for its use in food production, animal feed, pharmaceuticals, and natural thickeners. Sourced directly from farmers, our Cassia Tora seeds are cleaned, graded, and processed to maintain optimal purity and quality for diverse industrial uses."
            }
            secondTitle={
              "Cassia Tora has a strong foothold in global trade, especially for the production of Cassia Gum, a natural thickening agent used in food and pet food manufacturing. Countries like China, India, and the US rely on this commodity for industrial and nutritional purposes. Farmers benefit from Cassia Tora’s drought resistance, making it a reliable crop in semi-arid regions."
            }
            ThirdTitle={
              "Food additives, medicines, animal feed, and thickening agents"
            }
            lastTitle={"Cassia gum powder, animal feed supplements, herbal extracts."}
            seedName={"Cassia Tora"}
          />
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

export default Cassia;
