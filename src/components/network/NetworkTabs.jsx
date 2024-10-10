import { useContext } from "react";
import BlankTab from "../shared/BlankTab";
import TabComponent from "../shared/TabsComponent";
import RecievedItems from "./RecievedItems";

const NetworkTabs = () => {
  const Profile = () => <RecievedItems />;
  const Activity = () => <BlankTab content="SENT" />;
  const tabData = [
    { label: "RECIEVED", component: Profile },
    { label: "SENT", component: Activity },
  ];
  return (
    <div>
      <TabComponent tabs={tabData} />
    </div>
  );
};

export default NetworkTabs;
