import React from "react";
import Card from "../shared/Card";
import BlueButton from "../shared/BlueButton";

const NewArticleCard = () => {
  return (
    <Card>
      <div className="text-[12px] mx-auto">
        <BlueButton>WRITE A NEW ARTICLE</BlueButton>
      </div>
    </Card>
  );
};

export default NewArticleCard;
