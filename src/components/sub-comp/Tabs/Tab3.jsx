import React from "react";
import bg6 from "../../../assets/bg6.jpg";
import imgT3 from "../../../assets/T3.jpg";
import imgT4 from "../../../assets/T3i.jpg";
import { tab1_1, tab1_2, tab1_3 } from "../../../assets/supplies";


const Tab3 = ({ label }) => {
  return (
    <div className="max-w bg-whiterounded-lg p-6 w-full flex flex-col sm:flex-row gap-6 relative">
                    {/* Left Side Content */}
                    <div className="sm:w-2/3">
                        <div className="bg-green-100 text-green-800 px-4 py-2 rounded-lg font-semibold mb-4 w-fit">
                            {label}
                        </div>
                        <p className="text-gray-700 mb-4">
                        We handle the complexities of international trade so our partners can focus on their business. From documentation to global shipping, Henstock Foods ensures a seamless export process, with compliance and warehousing support every step of the way.
                        </p>
                        <ul className="list-disc list-inside text-gray-700 mb-4 space-y-8">
                            <li><strong>International Shipping & Freight Forwarding:</strong> Managing export logistics, documentation, and customs clearance, ensuring timely delivery.</li>
                            <li><strong>Trade Compliance & Certification:</strong> Assisting clients in acquiring essential certifications such as HACCP, NAFDAC, FDA, and EU Export Standards.</li>
                            <li><strong>Warehousing & Distribution:</strong> Offering safe storage facilities and distribution networks to support local and international delivery.</li>
                            
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

export default Tab3;
