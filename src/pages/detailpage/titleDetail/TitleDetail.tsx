"use client";
import React, { FC } from "react";
import scss from "./TitleDetail.module.scss";
import { IServiceProps } from "../banner/Banner";
const TitleDetail: FC<IServiceProps> = ({ item }) => {
  return (
    <div id={scss.TitleMain}>
      <div className="container">
        <div className={scss.TitleMain}>
          {item.description.info.map((item, idx) => (
            <div className={scss.title} key={idx}>
              <h1>{item.title}</h1>
              <p>{item.text} </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TitleDetail;
