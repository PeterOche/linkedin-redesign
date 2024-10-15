import { useState } from "react";
import Card from "./Card";

const AboutCard = ({ about }) => {
  const [showAll, setShowAll] = useState(false);

  const handleToggle = () => {
    setShowAll(!showAll);
  };
  return (
    <Card>
      <div className="w-full space-y-3 py-4 px-2">
        <h1 className="text-[#181818] text-[18px] leading-[17px]  font-semibold">
          About
        </h1>
        <p className="text-[14px] leading-5 text-[#181818] font-light">
          {about}
        </p>
        <button
          className="text-[#0275B1] text-[12px] font-medium leading-3"
          onClick={handleToggle}
        >
          {showAll ? "SEE LESS" : "SEE MORE"}
        </button>
      </div>
    </Card>
  );
};

export default AboutCard;
