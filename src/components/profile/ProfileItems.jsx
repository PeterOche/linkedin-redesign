import { useContext } from "react";
import AppContext from "../../AppState";
import AboutCard from "../shared/AboutCard";
import ProjectsCard from "../shared/ProjectsCard";
import SkillsCard from "../shared/SkillsCard";
import ExperienceCard from "../shared/ExperienceCard";
import EducationCard from "../shared/EducationCard";

const ProfileItems = () => {
  const { state } = useContext(AppContext);
  const user = state.users[0];
  return (
    <div className="space-y-4">
      <AboutCard about={user.about} />
      <ProjectsCard />
      <SkillsCard />
      <ExperienceCard />
      <EducationCard />
    </div>
  );
};

export default ProfileItems;
