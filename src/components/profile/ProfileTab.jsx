import { useContext } from "react";
import BlankTab from "../shared/BlankTab";
import TabComponent from "../shared/TabsComponent";

import ProfileItems from "./ProfileItems";

const ProfileTab = () => {
  const Profile = () => <ProfileItems />;
  const Activity = () => <BlankTab content="Activity" />;
  const Articles = () => <BlankTab content="Articles" />;
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
