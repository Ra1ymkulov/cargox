"use client";
import React from "react";
import Banner from "./banner/Banner";
import TitleDetail from "./titleDetail/TitleDetail";
import Service from "./service/Service";

const DetailPage = () => {
  return (
    <div className="container">
      <Banner />
      <TitleDetail />
      <Service />
    </div>
  );
};

export default DetailPage;
