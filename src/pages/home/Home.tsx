"use client";
import React from "react";
import Banner from "./banner/Banner";
import Services from "./services/Services";
import Reason from "./why-we/Reason";
import Map from "./map/Map";
import Info from "./information/Info";
import Carousel from "./carousel/Carousel";

const Home = ({}) => {
  return (
    <div>
      <Banner />
      <Reason />
      <Services />
      <Info />
      <Carousel />
      <Map />
    </div>
  );
};

export default Home;
