import React from "react";
import NotificationItem from "./NotificationItem";
import NotificationList from "./NotificationList";

const NotificationItems = () => {
  return (
    <div>
      <div className="divider text-[#181818] text-[12px] mb-8">
        <span className="font-medium">RECENT</span>
      </div>
      <NotificationList />
      <div className="divider text-[#181818] text-[12px] mt-8">
        <span className="font-medium">Earlier</span>
      </div>
    </div>
  );
};

export default NotificationItems;
