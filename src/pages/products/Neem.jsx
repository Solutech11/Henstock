import React from "react";
import { Hero } from "../../components";
import ProdImage from "../../assets/prod.png";
import AnimatedText from "../../components/AnimatedText";
import TextContent from "../../components/sub-comp/TextContent";
import neem from "../../assets/Neem.png";
import Flower from "../../assets/flower.png";
import { ProductImage } from "../../components/sub-comp/TextContent";
import c1 from "../../assets/n1.png";
import c2 from "../../assets/n2.png";
import c3 from "../../assets/n3.png";
import c4 from "../../assets/n4.jpg";
import NeemH from "../../assets/n2.png";

const Neem = () => {
  return (
    <>
      <div className="w-full block lg:hidden">
        <Hero bg={[NeemH]}>
          <AnimatedText text="NEEM SEEDS" />
          <p className="font-[DM Sans] font-medium text-[#ffffff] mt-5 text-lg text-center">
            Known for their pesticidal and medicinal properties, our neem seeds
            are sourced from organic farms and processed with precision.
          </p>
        </Hero>
      </div>
      <div className="hidden lg:block">
        <Hero
          bg={[NeemH]}
          btn={false}
          title="NEEM SEEDS"
          subTitle="Known for their pesticidal and medicinal properties, our neem seeds are sourced from organic farms and processed with precision."
        />
      </div>
      <div className="relative w-full bg-[#fff] lg:pt-36 pt-16">
        <div className="w-[90%] lg:w-[85%] mx-auto grid lg:grid-cols-2 gap-10">
          <TextContent
            right={false}
            firstTitle={
              "Neem seeds (Azadirachta indica) are a powerful, multi-purpose agro-commodity with widespread applications across agriculture, health, cosmetics, and even industrial sectors. Sourced from trusted farmers and processed to retain maximum potency, our neem seeds ensure high oil content and purity for diverse uses."
            }
            secondTitle={
              "Neem seeds serve as a reliable source of income for rural farmers and exporters. With growing global demand, especially for neem-based products like oil and cake, they contribute significantly to foreign exchange earnings. Industries including agrochemicals, pharmaceuticals, and cosmetics rely on neem for its versatile properties — making it a key player in international markets​"
            }
            ThirdTitle={
              "Biopesticides, fertilizers, skincare, medicinal oils, and livestock feed."
            }
            lastTitle={"Neem Oil, Neem Cake, Neem-based pesticides, biofuel."}
            seedName={"Neem Seeds"}
          />

          <div>
            <img
              src={neem}
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

export default Neem;
