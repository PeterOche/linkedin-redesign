import { useContext } from "react";
import Card from "./Card";
import AppContext from "../../AppState";

const EducationCard = () => {
  const { state } = useContext(AppContext);
  const userEducation = state.users[0].education; // Assuming we're using the 3rd user

  return (
    <Card>
      <div className="lg:p-2">
        <h1 className="text-[18px] leading-[17px] font-bold mb-6">Education</h1>
        <div className="space-y-8">
          <div className="flex space-x-4 items-start">
            {/* Company Logo */}
            <img
              src={userEducation.logo}
              alt={`${userEducation.school} logo`}
              className="w-[54px] h-[54px] object-cover rounded-full"
            />

            {/* Experience Details */}
            <div className="flex-1 pb-6 space-y-2">
              <h2 className="text-[14px] leading-[21px] font-semibold">
                {userEducation.school}
              </h2>
              <p className="text-[#181818] text-[10px]">
                {userEducation.degree}, {userEducation.course}
              </p>
              <p className="text-[10px] text-[#181818] leading-[15px] font-light">
                {userEducation.dates}
              </p>

              {/* Description */}
              <p className="mt-2 text-[#181818] text-[10px]">
                {userEducation.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default EducationCard;
