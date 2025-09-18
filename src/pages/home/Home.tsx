"use client";
import React from "react";
import scss from "./Home.module.scss";
import TariffSection from "@/components/tariffSection/TariffSection";

interface IHomeProps {}

const Home = ({}) => {
  return (
    <div className={scss.home}>
      <TariffSection />
    </div>
  );
};

export default Home;
