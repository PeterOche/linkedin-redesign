import React from "react";
import link from "../../assets/link.svg";
import disc from "../../assets/disc.svg";
import archive from "../../assets/archive.svg";
import layers from "../../assets/layers.svg";
import group from "../../assets/group.svg";
import hash from "../../assets/hash.svg";

const LeftCard = () => {
  return (
    <div className="w-full max-w-xs mb-4 bg-white rounded">
      <ul className="menu py-4 text-[12px]">
        <li className="flex justify-between items-center border-b py-2">
          <div className="flex w-full px-4 items-center justify-between">
            <div className="flex items-center gap-1">
              <img src={link} alt="" />
              <span className="font-semibold">CONNECTIONS</span>
            </div>
            <span className="font-bold">1,038</span>
          </div>
        </li>
        <li className="flex justify-between items-center border-l-[10px] border-[#0275B1] py-2">
          <div className="flex w-full px-4 items-center justify-between">
            <div className="flex items-center gap-1">
              <img src={disc} alt="" />
              <span className="font-light">INVITATIONS</span>
            </div>
            <div className="flex items-center">
              <span className="font-bold text-[#FFB75E]">2</span>
              <span className="w-3 h-3 bg-[#FFB75E] rounded-full ml-1"></span>
            </div>
          </div>
        </li>
        <li className="flex justify-between items-center border-t py-2">
          <div className="flex w-full px-4 items-center justify-between">
            <div className="flex items-center gap-1">
              <img src={archive} alt="" />
              <span className="font-semibold">TEAMMATES</span>
            </div>
          </div>
        </li>
        <li className="flex justify-between items-center border-t py-2">
          <div className="flex w-full px-4 items-center justify-between">
            <div className="flex items-center gap-1">
              <img src={group} alt="" />
              <span className="font-semibold">GROUPS</span>
            </div>
            <span className="font-bold">6</span>
          </div>
        </li>
        <li className="flex justify-between items-center border-t py-2">
          <div className="flex w-full px-4 items-center justify-between">
            <div className="flex items-center gap-1">
              <img src={link} alt="" />
              <span className="font-semibold">Pages</span>
            </div>
            <span className="font-bold">28</span>
          </div>
        </li>
        <li className="flex justify-between items-center border-t py-2">
          <div className="flex w-full px-4 items-center justify-between">
            <div className="flex items-center gap-1">
              <img src={link} alt="" />
              <span className="font-semibold">HASHTAGS</span>
            </div>
            <span className="font-bold">8</span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default LeftCard;
