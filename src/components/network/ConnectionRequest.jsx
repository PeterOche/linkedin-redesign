import React from "react";

const ConnectionRequest = ({ visitors }) => {
  return (
    <div>
      {visitors.map((visitor, index) => (
        <div className="grid grid-cols-5">
          <div>
            <img
              className="w-[52px] h-[52px] rounded-full mr-3"
              src={visitor.profileImage}
              alt={visitor.name}
            />
          </div>
          <div>
            <p className="text-[14px] font-bold text-[#181818]">
              {visitor.name}
            </p>
            <p className="text-[10px] text-[#181818]">
              {visitor.occupation.title}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ConnectionRequest;
