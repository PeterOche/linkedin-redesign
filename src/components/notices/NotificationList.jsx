import React, { useContext } from "react";
import NotificationItem from "./NotificationItem";
import AppContext from "../../AppState";

const NotificationList = () => {
  const { state } = useContext(AppContext);
  const companyLogos = state.users[0].experience.slice(0, 3);
  const peopleImage = state.users.slice(0, 3);

  return (
    <div className="space-y-4">
      <NotificationItem
        type="search"
        data={{
          logo: companyLogos[0].logo,
          count: 9,
        }}
        time="3 hours"
      />

      <NotificationItem
        type="profile"
        data={peopleImage.map((user) => ({
          name: user.name,
          profileImage: user.profileImage,
        }))}
        time="9 hours"
      />

      <NotificationItem
        type="like"
        data={[
          {
            name: "Eduardo Russel",
            profileImage: peopleImage[0].profileImage,
            postTitle: "1,000 connections! My network growth, so many",
          },
          {
            name: peopleImage[1].name,
            profileImage: peopleImage[1].profileImage,
          },
        ]}
        time="12 hours"
      />
    </div>
  );
};

export default NotificationList;
