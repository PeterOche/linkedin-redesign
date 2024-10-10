import React from "react";

const Card = ({ children, className }) => {
  return (
    <div
      className={`w-full card bg-white card-compact hover:drop-shadow rounded px-3 py-4 ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
