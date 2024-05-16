import React from "react";
import { Tile }  from "../tile/Tile";

export const TileList = ({ tiles }) => {
  return (
    <div>
       {
        tiles.map(({header, ...rest}, index) =>  (
          <Tile key={index}
          header={header}
          description={rest}/>
        ))} 
    </div>
  );
};
