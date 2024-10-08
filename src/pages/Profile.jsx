import { useContext } from "react";
import AppContext from "../AppState";
import ProfileCard from "../components/shared/ProfileCard";
import StatCard from "../components/shared/StatCard";
import VisitorCard from "../components/shared/VisitorCard";
import ProfileTab from "../components/shared/ProfileTab";

const Profile = () => {
  const { state } = useContext(AppContext);
  const user = state.users[0];
  const visitors = state.users.slice(1, 6);
  return (
    <div className="container lg:grid grid-cols-4 lg:gap-[40px] mx-auto px-8 md:px-24 mt-[40px]">
      <div className="col-span-3">
        <ProfileCard user={user} />
        <ProfileTab />
      </div>
      <div className="">
        <StatCard />
        <VisitorCard visitors={visitors} />
      </div>

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
