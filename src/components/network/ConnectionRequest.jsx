import React from "react";
import BlueButton from "../shared/BlueButton";
import TransparentBtn from "../shared/TransparentBtn";

const ConnectionRequest = ({ visitors }) => {
  return (
    <>
      <div>
        {visitors.map((visitor, index) => (
          <div
            key={index}
            className="grid grid-cols-5 gap-4 items-center p-4 bg-white shadow rounded-lg mb-4"
          >
            {/* Profile Image */}

            <div className="flex justify-center items-center col-span-1">
              <img
                className="w-[52px] h-[52px] rounded-full mr-2"
                src={visitor.profileImage}
                alt={visitor.name}
              />
              <div className="flex flex-col">
                <p className="text-[14px] font-bold text-[#181818]">
                  {visitor.name}
                </p>
                <p className="text-[10px] font-light text-[#181818]">
                  {visitor.occupation.title}
                </p>
                <p className="text-[10px] text-[#0275B1] mt-1">
                  {visitor.connections} connections
                </p>
              </div>
            </div>

            {/* Visitor Information */}
            <div className="col-span-2 border-l-[2px] border-[#0275B1]">
              {index === 0 && (
                <p className="ml-2 text-[10px] leading-[15px] text-[#181818] border- max-w-sm mt-1">
                  Hey, I saw your works. I like it! Can we do something
                  together? Or maybe you have a project for UX at the moment?
                </p>
              )}
            </div>

            {/* Buttons */}
            <div className="col-span-2 flex justify-center items-end gap-2">
              <BlueButton>Accept</BlueButton>

              <TransparentBtn className="border-[#E7E7E7] text-[#E7E7E7] ">
                Decline
              </TransparentBtn>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ConnectionRequest;
