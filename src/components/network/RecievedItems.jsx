import React, { useContext } from "react";
import AppContext from "../../AppState";
import ConnectionRequest from "./ConnectionRequest";
import RecentConnection from "./RecentConnection";

const RecievedItems = () => {
  const { state } = useContext(AppContext);
  const requestVisitors = state.users.slice(1, 3);
  const recentVisitors = state.users.slice(3, 7);
  return (
    <div className="py-4">
      <div className="divider text-[#181818] text-[12px]">
        <span className="font-medium">
          YOU HAVE <span className="text-[#0E6795]">2 NEW CONNECTIONS</span>
        </span>
      </div>
      <ConnectionRequest visitors={requestVisitors} />
      <div className="divider text-[#181818] text-[12px] mt-12">
        <span className="font-medium">RECENT CONNECTIONS</span>
      </div>
      <RecentConnection visitors={recentVisitors} />
    </div>
  );
};

export default RecievedItems;
