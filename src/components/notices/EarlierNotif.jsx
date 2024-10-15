import React from "react";
import moreHorizontal from "../../assets/more-horizontal.svg";

const EarlierNotif = ({ type, data, time }) => {
  const renderIcons = () => {
    if (type === "interest") {
      return (
        <div className="relative mr-4">
          <img src={data.logo} alt="Logo 1" className="w-8 h-8 rounded-full" />
          <img
            src={data.logo}
            alt="Logo 2"
            className="w-8 h-8 absolute top-0 left-6"
          />
        </div>
      );
    } else {
      return (
        <div className="relative mr-4">
          <img
            src={data[0].profileImage}
            alt="Profile 1"
            className="w-8 h-8 rounded-full"
          />
          {data[1] && (
            <img
              src={data[1].profileImage}
              alt="Profile 2"
              className="w-8 h-8 rounded-full absolute top-0 left-6"
            />
          )}
        </div>
      );
    }
  };

  const renderContent = () => {
    switch (type) {
      case "interest":
        return `We found jobs that you may be interested `;
      case "views":
        return `${data[0].name} and ${
          data.length - 1
        } others viewed your profile`;
      default:
        return "New notification";
    }
  };

  return (
    <div className="flex justify-between items-center p-4 bg-white drop-shadow-sm rounded w-full mx-auto">
      {renderIcons()}
      <div className="ml-4 flex-1">
        <p className="text-[14px]">{renderContent()}</p>
        <span className="text-[10px] text-gray-500">{time}</span>
      </div>
      <div>
        <img src={moreHorizontal} />
      </div>
    </div>
  );
};

export default EarlierNotif;
