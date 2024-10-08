import React from "react";

const Card = ({ children, style }) => {
  return (
    <div
      className={`w-full card bg-white card-compact hover:drop-shadow rounded px-3 py-4 ${style}`}
    >
      {children}
    </div>
  );
};

export default Card;
