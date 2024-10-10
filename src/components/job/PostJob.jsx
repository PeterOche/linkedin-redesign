import React from "react";
import BlueButton from "../shared/BlueButton";
import Card from "../shared/Card";

const PostJob = () => {
  return (
    <Card className="mb-4">
      <div className="text-[12px] mx-auto">
        <BlueButton>POST A JOB</BlueButton>
      </div>
    </Card>
  );
};

export default PostJob;
