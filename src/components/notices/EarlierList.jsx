import React, { useContext } from "react";
import NotificationItem from "./NotificationItem";
import AppContext from "../../AppState";
import EarlierNotif from "./EarlierNotif";

const EarlierList = () => {
  const { state } = useContext(AppContext);
  const companyLogos = state.users[0].experience.slice(0, 3);
  const peopleImage = state.users.slice(0, 3);

  return (
    <div className="space-y-2">
      <EarlierNotif
        type="interest"
        data={{
          logo: companyLogos[0].logo,
          count: 9,
        }}
        time="2 days ago"
      />

      <EarlierNotif
        type="views"
        data={peopleImage.map((user) => ({
          name: user.name,
          profileImage: user.profileImage,
        }))}
        time="9 hours"
      />
    </div>
  );
};

export default EarlierList;
