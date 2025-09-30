"use client";
import React from "react";
import Transportation from "./transportation/Transportation";
import AirTransport from "./airTransport/AirTransport";
import RoadTransport from "./roadTransport/RoadTransport";

const Tariff = () => {
  return (
    <div>
      <Transportation />
      <AirTransport />
      <RoadTransport />
    </div>
  );
};

export default Tariff;
