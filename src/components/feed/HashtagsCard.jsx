import React from "react";

const HashtagsCard = () => {
  return (
    <div className="flex flex-col relative bg-[#FCFDFD] rounded overflow-hidden mt-8 mb-4 p-6 mx-auto">
      <div className="  whitespace-nowrap pb-2 border-b border-[#f4f4f4]">
        <p className="text-[12px] text-[#181818] font-[500]">
          FOLLOWED HASHTAGS
        </p>
      </div>
      <div className="grid grid-cols-3 gap-[10px]">
        <div className="p-2 bg-[#E9F0F8] rounded items-center hover:shadow">
          <p className="mx-auto text-[12px]">#work</p>
        </div>
        <div className="p-2 bg-[#E9F0F8] rounded items-center hover:shadow">
          <p className="mx-auto text-[12px]">#business</p>
        </div>
        <div className="p-2 bg-[#E9F0F8] rounded items-center hover:shadow">
          <p className="mx-auto text-[12px]">#hr</p>
        </div>
        <div className="p-2 bg-[#E9F0F8] rounded items-center col-span-2 hover:shadow">
          <p className="mx-auto text-[12px]">#userinterface</p>
        </div>
        <div className="p-2 bg-[#E9F0F8] rounded items-center hover:shadow">
          <p className="mx-auto text-[12px]">#digital</p>
        </div>
        <div className="p-2 bg-[#E9F0F8] rounded items-center col-span-2 hover:shadow">
          <p className="mx-auto text-[12px]">#userexperiecnce</p>
        </div>
        <div className="p-2 bg-[#E9F0F8] rounded items-center hover:shadow">
          <p className="mx-auto text-[12px]">#ux</p>
        </div>
        <div className="p-2 bg-[#E9F0F8] rounded items-center hover:shadow">
          <p className="mx-auto text-[12px]">#ui</p>
        </div>
        <div className="p-2 bg-[#E9F0F8] rounded items-center hover:shadow">
          <p className="mx-auto text-[12px]">#freelance</p>
        </div>
      </div>
    </div>
  );
};

export default HashtagsCard;
