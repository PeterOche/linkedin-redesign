import { useContext } from "react";
import AppContext from "../AppState";
import ProfileCard from "../components/shared/ProfileCard";

const Profile = () => {
  const { state } = useContext(AppContext);
  const user = state.users[0];
  return (
    <div className="container mx-auto">
      <ProfileCard user={user} />
      {/* <Skills skills={user.skills} />
      <Experience experience={user.experience} />
      <div className="grid grid-cols-3 gap-4">
        {user.projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
      <Visitors visitors={user.visitors} /> */}
    </div>
  );
};

export default Profile;
