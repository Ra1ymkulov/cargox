"use client";
import React from "react";
import scss from "./Home.module.scss";
import Banner from "./banner/Banner";
import Services from "./services/Services";
import Reason from "./why-we/Reason";
import Fillials from "./fillials/Fillials";
import Map from "./map/Map";

interface IHomeProps {}

const Home = ({}) => {
  return (
    <div className={scss.home}>
      <Banner />
      <Services />
      <Reason />
      <Fillials />
      <Map />
    </div>
  );
};

export default Home;
