import React from "react";
import NetworkTabs from "../components/network/NetworkTabs";
import StatCard from "../components/shared/StatCard";
import NotificationCard from "../components/notices/NotificationCard";

const Notices = () => {
  return (
    <div className="container lg:grid grid-cols-4 lg:gap-[40px] mx-auto px-8 md:px-24 mt-[40px]">
      <div className="">
        <NotificationCard />
        <StatCard />
      </div>
      <div className="col-span-3 space-y-4">
        <NetworkTabs />
      </div>
    </div>
  );
};

export default Notices;
