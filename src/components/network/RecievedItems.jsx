import React, { useContext } from "react";
import AppContext from "../../AppState";
import ConnectionRequest from "./ConnectionRequest";

const RecievedItems = () => {
  const { state } = useContext(AppContext);
  const visitors = state.users.slice(1, 2);
  return (
    <div className="py-4">
      <div className="divider text-[#181818] text-[12px]">
        <span className="font-medium">
          YOU HAVE <span className="text-[#0E6795]">2 NEW CONNECTIONS</span>
        </span>
      </div>
      <ConnectionRequest visitors={visitors} />
    </div>
  );
};

export default RecievedItems;
