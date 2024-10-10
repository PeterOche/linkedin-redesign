import React, { useContext } from "react";
import AppContext from "../../AppState";
import Card from "../shared/Card";
import BlueButton from "../shared/BlueButton";

const JobsList = () => {
  const { state } = useContext(AppContext);
  const youJobs = state.users[0].experience.slice(0, 4);
  const newJobs = state.users[0].experience.slice(5, 7);
  return (
    <div>
      <div className="divider text-[#181818] text-[12px]">
        <span className="font-medium">JOBS FOR YOU</span>
      </div>
      {youJobs.map((exp, index) => (
        <Card className="mb-4">
          <div className="p-2">
            <div className="">
              <div key={index} className="flex space-x-4 items-start">
                {/* Company Logo */}
                <img
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  className="w-[54px] h-[54px] object-cover rounded-full"
                />

                {/* Experience Details */}
                <div className="flex-1 pb-3 space-y-2">
                  <h2 className="text-[14px] leading-[21px] font-semibold">
                    {exp.title}
                  </h2>
                  <p className="text-[#181818] text-[10px] ">
                    {exp.company} -{" "}
                    <span className="font-light">{exp.location}</span>
                  </p>

                  {/* Description */}
                  <p className="mt-2 text-[#181818] text-[10px]">
                    {exp.description}
                  </p>
                </div>
                <BlueButton className="text-[12px] font-light">MORE</BlueButton>
              </div>
            </div>
          </div>
        </Card>
      ))}
      <div className="divider text-[#181818] text-[12px] mt-8">
        <span className="font-medium">NEW JOBS</span>
      </div>
      {newJobs.map((exp, index) => (
        <Card className="mb-4">
          <div className="p-2">
            <div className="">
              <div key={index} className="flex space-x-4 items-start">
                {/* Company Logo */}
                <img
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  className="w-[54px] h-[54px] object-cover rounded-full"
                />

                {/* Experience Details */}
                <div className="flex-1 pb-3 space-y-2">
                  <h2 className="text-[14px] leading-[21px] font-semibold">
                    {exp.title}
                  </h2>
                  <p className="text-[#181818] text-[10px]">
                    {exp.company} -{" "}
                    <span className="font-light">{exp.location}</span>
                  </p>

                  {/* Description */}
                  <p className="mt-2 text-[#181818] text-[10px]">
                    {exp.description}
                  </p>
                </div>
                <BlueButton className="text-[12px] font-light">MORE</BlueButton>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default JobsList;
