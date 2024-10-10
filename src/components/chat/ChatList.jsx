import React from "react";

const ChatList = () => {
  return (
    <div className="flex flex-col relative bg-[#FCFDFD] hover:shadow rounded overflow-hidden mt-8 mb-4 p-6 mx-auto">
      <div className=" flex justify-around whitespace-nowrap pb-2 border-b border-[#f4f4f4]">
        <p className="text-[12px] text-[#181818] font-[500]">VISITORS</p>
        <p className="text-[#0275B1] text-[12px] font-[500]">VIEW ALL</p>
      </div>
      <ul className="pt-2">
        {visitors.map((visitor, index) => (
          <li key={index} className="flex items-center  mb-3">
            <img
              className="w-[52px] h-[52px] rounded-full mr-3"
              src={visitor.profileImage}
              alt={visitor.name}
            />
            <div>
              <p className="text-[14px] font-bold text-[#181818]">
                {visitor.name}
              </p>
              <p className="text-[10px] text-[#181818]">
                {visitor.occupation.title}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChatList;
