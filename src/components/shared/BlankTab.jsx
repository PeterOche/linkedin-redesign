import React from "react";
import Card from "./Card";

const BlankTab = ({ content }) => {
  return (
    <Card>
      <div className="min-h-[400px] w-full">{content}</div>
    </Card>
  );
};

export default BlankTab;
