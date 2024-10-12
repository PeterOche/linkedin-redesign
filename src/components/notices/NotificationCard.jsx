import React from "react";

const NotificationCard = () => {
  return (
    <>
      <div className="flex bg-[#0275B1] items-start rounded-tl overflow-hidden">
        {/* Left blue border */}
        <div className="bg-[#0275B1] w-[10px] "></div>

        {/* Content */}
        <div className="flex  bg-white p-4 w-full">
          <h2 className="text-gray-500 text-[12px] font-semibold ml-3">
            NOTIFICATIONS
          </h2>
        </div>
      </div>
      <div className="flex  bg-white p-4 w-full mb-8">
        <h3 className="text-[#181818] text-[12px] font-semibold ml-3">
          NOTIFICATION SETTINGS
        </h3>
      </div>
    </>
  );
};

export default NotificationCard;
