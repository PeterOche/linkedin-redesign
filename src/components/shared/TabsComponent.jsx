import React, { useState } from "react";

// general Tab Component
const Tabs = ({ tabs, selectedTab, onTabClick }) => {
  return (
    <div className="flex border-b border-gray-200 overflow-x-auto">
      {tabs.map((tab, index) => (
        <div
          key={tab.label}
          onClick={() => onTabClick(index)}
          className={`cursor-pointer  font-[400] text-[12px] py-2 px-12 relative ${
            selectedTab === index
              ? "rounded bg-gradient-to-r from-[#0077B5] to-[#0E6795] hover:bg-gradient-to-l  text-white font-semibold px-8"
              : "rounded text-[#181818] bg-[#FFFFFF] mt-2 border-[#E7E7E7]"
          }`}
        >
          {tab.label}
        </div>
      ))}
    </div>
  );
};

const TabComponent = ({ tabs }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  const ActiveComponent = tabs[selectedTab].component;

  return (
    <div className="container mx-auto ">
      <Tabs tabs={tabs} selectedTab={selectedTab} onTabClick={setSelectedTab} />
      <div className="py-6 shrink">
        <ActiveComponent />
      </div>
    </div>
  );
};
export default TabComponent;
