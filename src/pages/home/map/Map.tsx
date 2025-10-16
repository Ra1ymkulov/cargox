import React from "react";
import scss from "./Map.module.scss";

const Map = () => {
  return (
    <div className={scss.map}>
      <img src="/main-map.svg" alt="" />
    </div>
  );
};

export default Map;
