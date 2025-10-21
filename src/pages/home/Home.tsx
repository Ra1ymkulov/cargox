"use client";
import React from "react";
import Banner from "./banner/Banner";
import Services from "./services/Services";
import Reason from "./why-we/Reason";
import Fillials from "./fillials/Fillials";
import Map from "./map/Map";
import Info from "./information/Info";

const Home = ({}) => {
  return (
    <div>
      <Banner />
      <Reason />
      <Services />
      {/* <Fillials /> */}
      <Map />
      <Info />
    </div>
  );
};

export default Home;
