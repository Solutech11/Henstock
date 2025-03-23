import React from "react";
import bg6 from "../../../assets/bg6.jpg";
import { tab4_1, tab4_2, tab4_3 } from "../../../assets/supplies";

const Tab5 = ({ label }) => {
  return (
    <div className="max-w bg-whiterounded-lg p-6 w-full flex flex-col sm:flex-row gap-6 relative">
                        {/* Left Side Content */}
                        <div className="sm:w-2/3">
                            <div className="bg-green-100 text-green-800 px-4 py-2 rounded-lg font-semibold mb-4 w-fit">
                                {label}
                            </div>
                            <p className="text-gray-700 mb-4">
                            Henstock Foods is bridging the gap between large-scale suppliers and small-scale buyers
                            </p>
                            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-8">
                                <li><strong>Online Agro-Commodity Marketplace:</strong> A convenient platform for small-scale buyers to purchase high-quality agricultural products directly.</li>
                                <li><strong>Subscription & Bulk Purchasing Plans:</strong> Offering long-term supply contracts with discounts and tailored deals for returning clients and high-volume buyers.</li>
                            </ul>
                            
                        </div>
                        
                        {/* Right Side Images - Adjusted Layout */}
                        <div className="sm:w-1/2 flex flex-col gap-4">
                            <img src={tab4_1}alt="Processing Image" className="w-full h-64 object-cover rounded-lg shadow" />
                            <div className="flex gap-4">
                                <img src={tab4_2} alt="Processing Image" className="w-1/2 h-40 object-cover rounded-lg shadow" />
                                <img src={tab4_3} alt="Processing Image" className="w-1/2 h-40 object-cover rounded-lg shadow" />
                            </div>
                        </div>
                        
                        {/* Top Right Decorative Icon */}
                        <div className="absolute top-2 right-4 text-gray-400 text-2xl">〰️〰️〰️</div>
                    </div>
  );
};

export default Tab5;
