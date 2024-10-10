import React, { useContext, useState } from "react";
import disabledBell from "../../assets/bell-off.svg";
import bell from "../../assets/bell.svg";

const MySearch = ({ groups }) => {
  return (
    <div className="flex flex-col relative bg-[#FFFFFF] rounded overflow-hidden mt-8 mb-4 p-6 mx-auto">
      <div className=" flex justify-around whitespace-nowrap pb-2 border-b border-[#f4f4f4]">
        <p className="text-[12px] text-[#181818] font-[500]">MY SEARCHES</p>
        <p className="text-[#0275B1] text-[12px] font-[500]">EDIT LIST</p>
      </div>
      <ul className="pt-2 mt-4">
        <li className="flex justify-between bg-[#E9F0F8] rounded border border-[#E9F0F8] p-3 items-center  mb-3">
          <div>
            <p className="text-[12px] font-bold text-[#181818]">
              UX/UI designer <span className="text-[#02B033]">+240</span>
            </p>
            <p className="text-[10px] font-light text-[#181818]">Remote</p>
          </div>
          <div>
            <img src={disabledBell} className="w-[16px] h-[16px]" />
          </div>
        </li>
        <li className="flex justify-between bg-[#E9F0F8] rounded[6px] border border-[#E9F0F8] rounded p-3 items-center  mb-3">
          <div>
            <p className="text-[12px] font-bold text-[#181818]">Web designer</p>
            <p className="text-[10px] font-light text-[#181818]">
              Los-Angeles, CA
            </p>
          </div>
          <div>
            <img src={bell} className="w-[16px] h-[16px]" />
          </div>
        </li>
        <li className="flex justify-between bg-[#E9F0F8] rounded[6px] border border-[#E9F0F8] rounded p-3 items-center  mb-3">
          <div>
            <p className="text-[12px] font-bold text-[#181818]">
              Graphic designer
            </p>
            <p className="text-[10px] font-light text-[#181818]">
              Malaysia, Kuala Lumpur
            </p>
          </div>
          <div>
            <img src={bell} className="w-[16px] h-[16px]" />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default MySearch;
