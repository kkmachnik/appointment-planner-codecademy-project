import React from "react";

export const Tile = ({ header, description }) => {
  const descriptionValues = Object.values(description);

  return (
    <div className="tile-container">
      <p className="tile-title">{header}</p>
      {descriptionValues.map((value, index) => (
        <p key={index} className={index === 0 ? "tile tile-title" : "tile"}>
        {value}
      </p>
     ))}
    </div>
  );
};
