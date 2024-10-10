import React, { useContext } from "react";
import AppContext from "../../AppState";

const TrackJobs = () => {
  const { state } = useContext(AppContext);
  const userExperience = state.users[0].experience.slice(0, 2);
  return (
    <div className="flex flex-col relative bg-[#FCFDFD] rounded overflow-hidden mt-8 mb-4 p-6 mx-auto">
      <div className=" flex justify-start whitespace-nowrap pb-2 border-b border-[#f4f4f4]">
        <h1 className="text-[12px] text-[#181818] font-[500]">TRACKED JOBS</h1>
      </div>
      <ul className="pt-2 mt-4">
        {userExperience.map((exp, index) => (
          <li
            key={index}
            className="flex gap-2 bg-[#FFFFFF] rounded-[6px] border border-[#F4F4F4] p-3 items-center  mb-3"
          >
            <img
              src={exp.logo}
              alt={`${exp.company} logo`}
              className="w-[32px] h-[32px] object-cover rounded-full "
            />
            <div>
              <h2 className="text-[14px] leading-[21px] font-semibold">
                {exp.title}
              </h2>
              <p className="text-[#181818] text-[10px]">
                {exp.company} - {exp.location}
              </p>
            </div>
          </li>
        ))}
        {/* <li className="flex justify-between bg-[#E9F0F8] rounded[6px] border border-[#E9F0F8] rounded p-3 items-center  mb-3">
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
        </li> */}
      </ul>
    </div>
  );
};

export default TrackJobs;
