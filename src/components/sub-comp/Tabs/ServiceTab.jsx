import React from "react";
import Tab1 from "./Tab1";
import Tab2 from "./Tab2";
import Tab3 from "./Tab3";
import Tab4 from "./Tab4";

const Tabs = [
  { label: "Agro-Commodity Trade", key: "tab1", component: Tab1 },
  { label: "Food Processing & Packaging", key: "tab2", component: Tab2 },
  { label: "Farm Equipment Supply", key: "tab3", component: Tab3 },
  { label: "Value-Added Products", key: "tab4", component: Tab4 },
];

const ServiceTab = () => {
  const [activeTab, setActiveTab] = React.useState("tab1");

  return (
    <div className="w-full">
      <section className="w-full">
        <div className="lg:w-[80%] mx-auto my-10">
          <h2 className="text-black text-center text-[48px] font-bold font-[Averia Serif Libre]">
            Our Services
          </h2>
          <p className="text-[17px] text-[#1E1E1E] font-normal text-center font-[DM Sans] mt-3">
            At Henstock Foods Ltd., our values shape every aspect of our
            operations, ensuring we remain committed to quality, innovation,
            teamwork, and sustainability. These principles guide our
            decision-making, customer relationships, and long-term growth.
          </p>
        </div>
        <div className="w-full mt-16 grid gap-10">
          <div className="flex justify-center items-center mb-14">
            <ul className="rounded-[4px] flex flex-wrap gap-5 lg:gap-10">
              {Tabs.map(({ label, key }) => (
                <li key={key} className="text-sm cursor-pointer ">
                  <button
                    className={`px-8 rounded-full py-3 text-base font-normal shadow-sm ${
                      activeTab === key
                        ? "bg-[#5C8A3F] text-[#FFFFFF]"
                        : "text-[#1E1E1E] bg-[#F5F5F5]"
                    }`}
                    onClick={() => setActiveTab(key)}
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full">
            {Tabs.map(
              ({ key, component: Component, label }) =>
                activeTab === key && <Component key={key} label={label} />
            )}
          </div>
        </div>

      </section>
    </div>
  );
};

export default ServiceTab;
