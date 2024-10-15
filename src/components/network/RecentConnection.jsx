import React from "react";

const RecentConnection = ({ visitors }) => {
  return (
    <div className="md:grid grid-cols-2 relative bg-[#F7F9FB] rounded overflow-hidden mt-8 mb-4 p-6 gap-4 mx-auto">
      {visitors.map((visitor, index) => (
        <div
          key={index}
          className="md:flex items-center justify-center bg-[#FFFFFF] p-5 rounded mb-3"
        >
          <img
            className="w-[52px] h-[52px] rounded-full mr-3"
            src={visitor.profileImage}
            alt={visitor.name}
          />
          <div className="flex-1 flex flex-col justify-between">
            <div className="space-y-1">
              <p className="text-[14px] font-bold text-[#181818]">
                {visitor.name}
              </p>
              <p className="text-[10px] text-[#181818]">
                {visitor.occupation.title}
              </p>
            </div>
            <div className="self-end">
              <p className="text-[10px] text-[#181818]">Yesterday, 14:30</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecentConnection;
