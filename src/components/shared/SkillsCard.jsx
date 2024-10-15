import { useContext, useState } from "react";
import Card from "./Card";
import AppContext from "../../AppState";

const SkillsCard = () => {
  const { state } = useContext(AppContext);
  const [showAll, setShowAll] = useState(false);

  const handleToggle = () => {
    setShowAll(!showAll);
  };

  // Get skills and control displayed skills based on the toggle state
  const displayedSkills = showAll
    ? state.users[0].skills
    : state.users[0].skills.slice(0, 3);

  return (
    <Card>
      <div className="space-y-2">
        <div>
          <h3 className="text-[18px] font-semibold">Skills & Endorsements</h3>
        </div>
        <div className="md:grid grid-cols-3 gap-4">
          {displayedSkills.map((skill, index) => (
            <div key={index} className="border rounded-[6px] px-6 py-4 ">
              <div className="flex justify-between  text-[14px] leading-[21px]">
                <span className="font-medium">{skill.skill}</span>
                <span className="text-[#0275B1] font-semibold">
                  {skill.endorsementsCount}
                </span>
              </div>
              <div className="flex -space-x-2">
                {skill.endorsedBy.map((endorser, idx) => (
                  <img
                    key={idx}
                    src={endorser.profileImage}
                    alt={endorser.name}
                    className="w-6 h-6 rounded-full border-2 border-white"
                    style={{ zIndex: idx }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
        {!showAll && state.users[0].skills.length > 3 && (
          <button
            className="text-[12px] text-[#0275B1] leading-3 font-medium"
            onClick={handleToggle}
          >
            SHOW ALL ({state.users[0].skills.length})
          </button>
        )}
        {showAll && (
          <button
            className="text-[12px] text-[#0275B1] font-medium"
            onClick={handleToggle}
          >
            Show less
          </button>
        )}
      </div>
    </Card>
  );
};

export default SkillsCard;
