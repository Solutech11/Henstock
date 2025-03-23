import React from "react";
import bg6 from "../../../assets/bg6.jpg";
import imgT1 from "../../../assets/imgT1.jpg";
import imgT2 from "../../../assets/imgT1i.jpg";
import { tab1_1, tab1_2, tab1_3 } from "../../../assets/supplies";

const Tab1 = ({label}) => {
  return (
    // <div className="bg-gray-100 p-4 min-h-screen flex justify-center">
            <div className="max-w bg-whiterounded-lg p-6 w-full flex flex-col sm:flex-row gap-6 relative">
                {/* Left Side Content */}
                <div className="sm:w-2/3">
                    <div className="bg-green-100 text-green-800 px-4 py-2 rounded-lg font-semibold mb-4 w-fit">
                        {label}
                    </div>
                    <p className="text-gray-700 mb-4">
                    At Henstock Foods Ltd., we ensure a steady supply of high-quality agro-commodities by working directly with farmers and trusted suppliers. From bulk supply to custom orders, our sourcing and distribution system guarantees freshness, traceability, and reliability for manufacturers and exporters.                    
                    </p>
                    <ul className="list-disc list-inside text-gray-700 mb-4">
                        <li><strong>Bulk Supply & Wholesale Distribution:</strong> Delivering premium Neem Seeds, Casia Tora, Cashew Nuts, Ginger, and Sesame Seeds in large quantities for manufacturers and exporters.</li>
                        <li><strong>Contract Farming & Direct Sourcing:</strong> Partnering with local farmers to guarantee consistent supply, traceability, and ethical sourcing.</li>
                        <li><strong>Customized Orders:</strong> Offering personalized specifications on quality grades, moisture content, and processing standards to meet clients' specific needs.</li>
                        
                    </ul>
                    
                </div>
                
                {/* Right Side Images - Adjusted Layout */}
                <div className="sm:w-1/2 flex flex-col gap-4">
                    <img src={tab1_1}alt="Processing Image" className="w-full h-64 object-cover rounded-lg shadow" />
                    <div className="flex gap-4">
                        <img src={tab1_2} alt="Processing Image" className="w-1/2 h-40 object-cover rounded-lg shadow" />
                        <img src={tab1_3} alt="Processing Image" className="w-1/2 h-40 object-cover rounded-lg shadow" />
                    </div>
                </div>
                
                {/* Top Right Decorative Icon */}
                <div className="absolute top-2 right-4 text-gray-400 text-2xl">〰️〰️〰️</div>
            </div>
  );
};

export default Tab1;
