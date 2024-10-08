import React from "react";
import Card from "./Card";

const AboutCard = ({ about }) => {
  return (
    <Card>
      <div className="w-full space-y-3 py-4 px-2">
        <h1 className="text-[#181818] text-[18px] leading-[17px]  font-semibold">
          About
        </h1>
        <p className="text-[14px] leading-5 text-[#181818] font-light">
          {about}
        </p>
        <p className="text-[12px] text-[#0275B1] font-medium leading-3 ">
          SEE MORE
        </p>
      </div>
    </Card>
  );
};

export default AboutCard;
