import { useContext } from "react";
import AppContext from "../../AppState";
import AboutCard from "./AboutCard";
import ProjectsCard from "./ProjectsCard";
import SkillsCard from "./SkillsCard";

const ProfileItems = () => {
  const { state } = useContext(AppContext);
  const user = state.users[0];
  return (
    <div className="space-y-4">
      <AboutCard about={user.about} />
      <ProjectsCard />
      <SkillsCard />
    </div>
  );
};

export default ProfileItems;
