"use client";
import React from "react";
import Transportation from "./transportation/Transportation";
import AirTransport from "./air-transport/AirTransport";
import RoadTransport from "./road-transport/RoadTransport";

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
