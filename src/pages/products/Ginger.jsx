import React from "react";
import { Hero } from "../../components";
import ProdImage from "../../assets/prod.png";
import AnimatedText from "../../components/AnimatedText";
import TextContent from "../../components/sub-comp/TextContent";
import gingerImage from "../../assets/ginger.png";
import Flower from "../../assets/flower.png";
import { ProductImage } from "../../components/sub-comp/TextContent";
import g1 from "../../assets/g1.png";
import g2 from "../../assets/g2.png";
import g3 from "../../assets/g3.png";
import g4 from "../../assets/g4.png";

const Ginger = () => {
  return (
    <>
      {/* Mobile Hero Section */}
      <div className="w-full block lg:hidden">
        <Hero bg={[ProdImage]}>
          <AnimatedText text="DRIED SPLIT GINGER" />
          <p className="font-[DM Sans] font-medium text-[#ffffff] mt-5 text-lg text-center">
            We export top-grade dried split ginger, known for its strong aroma
            and high oil content, widely used in pharmaceuticals and food
            processing.
          </p>
        </Hero>
      </div>

      {/* Desktop Hero Section */}
      <div className="hidden lg:block">
        <Hero
          bg={[ProdImage]}
          btn={false}
          title="DRIED SPLIT GINGER"
          subTitle="We export top-grade dried split ginger, known for its strong aroma and high oil content, widely used in pharmaceuticals and food processing."
        />
      </div>

      {/* Product Details Section */}
      <div className="relative w-full bg-[#fff] lg:pt-36 pt-16">
        <div className="w-[90%] lg:w-[85%] mx-auto grid lg:grid-cols-2 gap-10">
          <TextContent
            right={false}
            firstTitle="Our ginger is carefully harvested, washed, sliced, and dried to lock in its natural aroma and medicinal properties. Popular in culinary, pharmaceutical, and herbal industries, our dried split ginger is sourced for both local and international markets."
            ThirdTitle="Spices, beverages, herbal remedies, and essential oils."
            lastTitle="Health Benefits"
            seedName="Dried Split Ginger"
          />
          <div>
            <img
              src={gingerImage}
              alt="dried-split-ginger"
              className="w-full lg:h-[570px] rounded-3xl object-cover"
            />
          </div>
        </div>

        {/* Decorative Flower Section */}
        <div className="lg:pt-26 pt-16 w-full">
          <img
            src={Flower}
            alt="flower-decoration"
            className="w-full h-[80px] object-cover"
          />
        </div>

        {/* Product Image Gallery */}
        <ProductImage
          pic1={g1}
          pic2={g2}
          pic3={g3}
          pic4={g4}
          seedName={"Dried Split Ginger"}
        />

        {/* Bottom Decorative Flower Section */}
        <div className="lg:pt-26 pt-16 w-full mb-10">
          <img
            src={Flower}
            alt="flower-decoration"
            className="w-full h-[80px] object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default Ginger;
