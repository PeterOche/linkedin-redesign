import { useContext } from "react";
import BlankTab from "./BlankTab";
import TabComponent from "./TabsComponent";

import ProfileItems from "./ProfileItems";

const ProfileTab = () => {
  const Profile = () => <ProfileItems />;
  const Activity = () => <BlankTab content="Profile" />;
  const Articles = () => <BlankTab content="Profile" />;
  const tabData = [
    { label: "PROFILE", component: Profile },
    { label: "ACTIVITY & INTERESTS", component: Activity },
    { label: "ARTICLES (3)", component: Articles },
  ];
  return (
    <div>
      <TabComponent tabs={tabData} />
    </div>
  );
};

export default ProfileTab;
