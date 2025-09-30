import React from "react";
import scss from "./Map.module.scss";

const Map = () => {
  return (
    <div className={scss.map}>
      <img src="/map-of-world.svg" alt="" />
    </div>
  );
};

export default Map;
