import React from "react";
import LeftCard from "../components/network/LeftCard";
import NetworkTabs from "../components/network/NetworkTabs";

const Network = () => {
  return (
    <div className="container lg:grid grid-cols-4 lg:gap-[40px] mx-auto px-8 md:px-24 mt-[40px] mb-12">
      <div className="">
        <LeftCard />
      </div>
      <div className="col-span-3 space-y-4">
        <NetworkTabs />
      </div>
    </div>
  );
};

export default Network;
