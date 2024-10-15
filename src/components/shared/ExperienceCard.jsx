import { useContext } from "react";
import Card from "./Card";
import AppContext from "../../AppState";

const ExperienceCard = () => {
  const { state } = useContext(AppContext);
  const userExperience = state.users[0].experience.slice(0, 2);

  return (
    <Card>
      <div className="lg:p-2">
        <h1 className="text-[18px] leading-[17px] font-bold mb-6">
          Experience
        </h1>
        <div className="space-y-8">
          {userExperience.map((exp, index) => (
            <div key={index} className="flex space-x-4 items-start">
              {/* Company Logo */}
              <img
                src={exp.logo}
                alt={`${exp.company} logo`}
                className="w-[54px] h-[54px] object-cover rounded-full"
              />

              {/* Experience Details */}
              <div className="flex-1 border-b pb-6 space-y-2">
                <h2 className="text-[14px] leading-[21px] font-semibold">
                  {exp.title}
                </h2>
                <p className="text-[#181818] text-[10px]">
                  {exp.company} - {exp.location}
                </p>
                <p className="text-[10px] text-[#181818] font-light">
                  {exp.dates}
                </p>

                {/* Description */}
                <p className="mt-2 text-[#181818] text-[10px]">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default ExperienceCard;
