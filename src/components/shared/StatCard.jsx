import React from "react";

const StatCard = () => {
  return (
    <div className="flex flex-col relative bg-white shadow rounded overflow-hidden  mb-4 px-6 py-8 md:py-12 mx-auto">
      <div className="mx-auto flex space-x-[27px] pb-2 whitespace-nowrap border-b border-[#F4F4F4]">
        <p className="text-[12px] leading-[11px] text-[#181818] font-[500]">
          YOUR DASHBOARD
        </p>
        <p className="text-[#0275B1] text-[12px] font-[500] leading-[11px]">
          GO TO STAT
        </p>
      </div>
      <div className="pt-6">
        <h2 className="text-[52px] leading-[49px] text-[#0275B1] font-[500]">
          367
        </h2>
        <p className="text-[14px] text-[#181818] leading-[21px]">views today</p>
      </div>
      <div className="pt-6">
        <h2 className="text-[52px] leading-[49px] text-[#0275B1] font-[500]">
          15
        </h2>
        <p className="text-[14px] text-[#181818] leading-[21px]">posts views</p>
      </div>
      <div className="pt-6">
        <h2 className="text-[52px] leading-[49px] text-[#0275B1] font-[500]">
          9
        </h2>
        <p className="text-[14px] text-[#181818] leading-[21px]">
          search appearances
        </p>
      </div>
    </div>
  );
};

export default StatCard;
