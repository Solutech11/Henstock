import React from "react";
import bg6 from "../../../assets/bg6.jpg";
import imgT2 from "../../../assets/imgT2.jpg";
import imgT3 from "../../../assets/T2i.jpg";
import { tab2_1, tab2_2, tab2_3 } from "../../../assets/supplies";

const Tab2 = ({ label }) => {
  return (
    <div className="max-w bg-whiterounded-lg p-6 w-full flex flex-col sm:flex-row gap-6 relative">
                {/* Left Side Content */}
                <div className="sm:w-2/3">
                    <div className="bg-green-100 text-green-800 px-4 py-2 rounded-lg font-semibold mb-4 w-fit">
                        Processing & Value Addition
                    </div>
                    <p className="text-gray-700 mb-4">
                        Henstock Foods goes beyond raw supply — we add value to agro-commodities through advanced cleaning, grading, and processing techniques.
                    </p>
                    <ul className="list-disc list-inside text-gray-700 mb-4">
                        <li><strong>Cleaning, Sorting, and Grading:</strong> Enhancing raw agro-products to meet global export requirements, ensuring purity and consistency.</li>
                    </ul>
                    <h3 className="font-semibold text-lg text-gray-800 mb-2">Value-Added Products:</h3>
                    <ul className="list-disc list-inside text-gray-700 mb-4">
                        <li><strong>Neem:</strong> Neem Oil & Neem Cake for agriculture, cosmetics, and biopesticides.</li>
                        <li><strong>Cashew:</strong> Cashew Kernels & Cashew Butter for food and snack production.</li>
                        <li><strong>Ginger:</strong> Ginger Powder & Dried Ginger for spices and medicinal products.</li>
                        <li><strong>Sesame:</strong> Sesame Paste (Tahini) for food production and culinary uses.</li>
                    </ul>
                    <h3 className="font-semibold text-lg text-gray-800 mb-2">Private & White Label Packaging:</h3>
                    <p className="text-gray-700 mb-4">Providing ready-to-sell packaged products, customized for retailers under their own branding.</p>
                </div>
                
                {/* Right Side Images - Adjusted Layout */}
                <div className="sm:w-1/3 flex flex-col gap-4">
                    <img src={tab2_1} alt="Processing Image" className="w-full h-64 object-cover rounded-lg shadow" />
                    <div className="flex gap-4">
                        <img src={tab2_2} alt="Processing Image" className="w-1/2 h-40 object-cover rounded-lg shadow" />
                        <img src={tab2_3} alt="Processing Image" className="w-1/2 h-40 object-cover rounded-lg shadow" />
                    </div>
                </div>
                
                {/* Top Right Decorative Icon */}
                <div className="absolute top-2 right-4 text-gray-400 text-2xl">〰️〰️〰️</div>
            </div>
  );
};

export default Tab2;
