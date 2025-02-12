import React from "react";
import { BouncyDownArrow, ContactBanner, Hero } from "../components";
import { AgroExport, bg6, GrainsNew, services, VAP } from "../assets";

const Services = () => {
  return <>
    <Hero bg={[services]}>
      <h1 className="text-4xl font-extrabold text-white sm:text-5xl sm:leading-none">
        What We Do
      </h1>
      <BouncyDownArrow classes="text-white mt-[2rem]" to="main"/>
    </Hero>
    
    
    <section id="main" className="px-[10px]">

      <section id="distribution-exportation" className="flex items-center justify-center py-[100px] px-10 bg-gray-50">
        <div className="max-w-[1200px] w-full">
          {/* Section Title */}
          <h3 className="text-3xl md:text-4xl font-bold text-green-700 text-center mb-10">
            Distribution & Exportation of Agro-Semi Processed Commodities
          </h3>

          {/* Section Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Side: Description */}
            <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
              <h4 className="text-2xl font-bold text-green-700 mb-6">
                Global Reach, Local Impact
              </h4>
              <p className="text-gray-600 mb-6">
                At Henstock Foods Ltd, we specialize in the distribution and exportation of high-quality agro-semi-processed commodities. Our products, including neem seeds and cassia tora, are sourced from trusted local farmers and processed to meet international standards.
              </p>
              <p className="text-gray-600 mb-6">
                With a robust logistics network and strategic partnerships, we ensure timely delivery to global markets while supporting sustainable farming practices and empowering local communities.
              </p>
              <ul className="list-disc list-inside text-gray-600">
                <li className="mb-2">Sourcing from trusted local farmers</li>
                <li className="mb-2">Stringent quality control and organic certifications</li>
                <li className="mb-2">Efficient logistics for global distribution</li>
                <li className="mb-2">Commitment to sustainability and fair trade</li>
              </ul>
            </div>

            {/* Right Side: Image or Illustration */}
            <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200 flex items-center justify-center">
              <img
                src={AgroExport} // Replace with your image path
                alt="Agro-Semi Processed Commodities"
                className="rounded-lg w-full h-auto"
              />
            </div>
          </div>

          {/* Call-to-Action */}
          <div className="mt-12 text-center">
            <p className="text-lg text-gray-600 mb-6">
              Ready to partner with us? Contact us today to learn more about our agro-semi-processed commodities.
            </p>
            <a
              href="/contact" // Replace with your contact page link
              className="bg-green-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-800 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      <section id="food-processing-packaging" className="flex items-center justify-center py-[100px] px-10 bg-white">
        <div className="max-w-[1200px] w-full">
          {/* Section Title */}
          <h3 className="text-3xl md:text-4xl font-bold text-green-700 text-center mb-10">
            Food Processing and Packaging
          </h3>

          {/* Section Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Side: Image or Illustration */}
            <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200 flex items-center justify-center">
              <img
                src={GrainsNew} // Replace with your image path
                alt="Food Processing and Packaging"
                className="rounded-lg w-full h-auto"
              />
            </div>

            {/* Right Side: Description */}
            <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
              <h4 className="text-2xl font-bold text-green-700 mb-6">
                Delivering Quality and Convenience
              </h4>
              <p className="text-gray-600 mb-6">
                At Henstock Foods Ltd, we specialize in advanced food processing and packaging solutions. Our state-of-the-art facilities ensure that every product meets the highest standards of quality, safety, and convenience.
              </p>
              <p className="text-gray-600 mb-6">
                From raw materials to finished products, we handle every step of the process with precision and care, delivering products that are ready for retail and consumer use.
              </p>
              <ul className="list-disc list-inside text-gray-600">
                <li className="mb-2">Advanced food processing techniques</li>
                <li className="mb-2">Customized packaging solutions</li>
                <li className="mb-2">Compliance with food safety standards</li>
                <li className="mb-2">Efficient and sustainable practices</li>
              </ul>
            </div>
          </div>

          {/* Call-to-Action */}
          <div className="mt-12 text-center">
            <p className="text-lg text-gray-600 mb-6">
              Interested in our food processing and packaging services? Contact us today to learn more.
            </p>
            <a
              href="/contact" // Replace with your contact page link
              className="bg-green-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-800 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      <section id="agricultural-machinery" className="flex items-center justify-center py-[100px] px-10 bg-gray-50">
        <div className="max-w-[1200px] w-full">
          {/* Section Title */}
          <h3 className="text-3xl md:text-4xl font-bold text-green-700 text-center mb-10">
            Supply of Agricultural Machinery
          </h3>

          {/* Section Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Side: Description */}
            <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
              <h4 className="text-2xl font-bold text-green-700 mb-6">
                Modern Solutions for Modern Farming
              </h4>
              <p className="text-gray-600 mb-6">
                At Henstock Foods Ltd, we provide a wide range of modern agricultural machinery and equipment to enhance productivity and efficiency in farming operations. Our offerings are designed to meet the needs of both small-scale and large-scale farmers.
              </p>
              <p className="text-gray-600 mb-6">
                From tractors and harvesters to irrigation systems and processing equipment, we ensure that our machinery is reliable, efficient, and tailored to your specific requirements.
              </p>
              <ul className="list-disc list-inside text-gray-600">
                <li className="mb-2">Wide range of modern machinery</li>
                <li className="mb-2">Reliable and efficient equipment</li>
                <li className="mb-2">After-sales support and training</li>
                <li className="mb-2">Customized solutions for all farm sizes</li>
              </ul>
            </div>

            {/* Right Side: Image or Illustration */}
            <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200 flex items-center justify-center">
              <img
                src={bg6} // Replace with your image path
                alt="Agricultural Machinery"
                className="rounded-lg w-full h-auto"
              />
            </div>
          </div>

          {/* Call-to-Action */}
          <div className="mt-12 text-center">
            <p className="text-lg text-gray-600 mb-6">
              Looking for reliable agricultural machinery? Contact us today to explore our range of equipment.
            </p>
            <a
              href="/contact" // Replace with your contact page link
              className="bg-green-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-800 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      <section id="value-added-products" className="flex items-center justify-center py-[100px] px-10 bg-white">
        <div className="max-w-[1200px] w-full">
          {/* Section Title */}
          <h3 className="text-3xl md:text-4xl font-bold text-green-700 text-center mb-10">
            Value-Added Products
          </h3>

          {/* Section Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Side: Image or Illustration */}
            <div className="flex items-center justify-center">
              <img
                src={VAP} // Replace with your image path
                alt="Value-Added Products"
                className="rounded-lg w-full h-100"
              />
            </div>

            {/* Right Side: Description */}
            <div className="flex flex-col justify-center">
              <h4 className="text-2xl font-bold text-green-700 mb-6">
                Transforming Raw Materials into Premium Products
              </h4>
              <p className="text-gray-600 mb-6">
                At Henstock Foods Ltd, we go beyond raw agro-commodities to offer a range of high-quality value-added products. From neem oil and cassia tora powder to herbal extracts, our products are crafted to meet the diverse needs of industries such as agriculture, cosmetics, and pharmaceuticals.
              </p>
              <p className="text-gray-600 mb-6">
                Our value-added products are processed using advanced techniques to ensure purity, efficacy, and compliance with international standards. Whether you need organic pesticides, natural cosmetics, or herbal supplements, we have the right solutions for you.
              </p>
              <ul className="list-disc list-inside text-gray-600">
                <li className="mb-2">Neem oil for organic pesticides and cosmetics</li>
                <li className="mb-2">Cassia tora powder for industrial and herbal applications</li>
                <li className="mb-2">Herbal extracts for pharmaceuticals and supplements</li>
                <li className="mb-2">Customized solutions for specific industry needs</li>
              </ul>
            </div>
          </div>

          {/* Call-to-Action */}
          <div className="mt-12 text-center">
            <p className="text-lg text-gray-600 mb-6">
              Explore our range of value-added products and discover how they can benefit your business.
            </p>
            <a
              href="/contact" // Replace with your contact page link
              className="bg-green-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-800 transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

    </section>

    <ContactBanner />
  </>;
};

export default Services;