import React, { useContext, useState } from "react";
import AppContext from "../../AppState";

const GroupsCard = ({ groups }) => {
  const [showAll, setShowAll] = useState(false);

  const handleToggle = () => {
    setShowAll(!showAll);
  };

  const displayedGroups = showAll ? groups : groups.slice(0, 3);

  return (
    <div className="flex flex-col relative bg-[#FCFDFD] rounded overflow-hidden mt-8 mb-4 p-6 mx-auto">
      <div className=" flex justify-around whitespace-nowrap pb-2 border-b border-[#f4f4f4]">
        <p className="text-[12px] text-[#181818] font-[500]">MY GROUPS</p>
        <p className="text-[#0275B1] text-[12px] font-[500]">EDIT LIST</p>
      </div>
      <ul className="pt-2 mt-4">
        {displayedGroups.map((group, index) => (
          <li
            key={index}
            className="flex bg-white rounded[6px] border border-[#F4F4F4] items-center  mb-3"
          >
            <img
              className="w-[52px] h-[52px] rounded-full mr-3"
              src={group.image}
              alt={group.name}
            />
            <div>
              <p className="text-[14px] font-bold text-[#181818]">
                {group.name}
              </p>
            </div>
          </li>
        ))}
      </ul>
      {!showAll && groups.length > 3 && (
        <p
          className="text-[12px] text-[#0275B1] leading-3 font-medium hover:cursor-pointer"
          onClick={handleToggle}
        >
          SHOW ALL ({groups.length})
        </p>
      )}
      {showAll && (
        <p
          className="text-[12px] text-[#0275B1] leading-3 font-medium hover:cursor-pointer"
          onClick={handleToggle}
        >
          Show less
        </p>
      )}
    </div>
  );
};

export default GroupsCard;
