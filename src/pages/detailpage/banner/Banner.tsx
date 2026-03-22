"use client";
import React, { FC } from "react";
import scss from "./Banner.module.scss";

export interface IServiceProps {
  item: {
    code: string;
    deliveryTime: string;
    description: { info: { title: string; text: string }[] };
    id: string;
    name: string;
    priceKm: number;
    pricekg: number;
  };
}

const Banner: FC<IServiceProps> = ({ item }) => {
  return (
    <div id={scss.BannerMain}>
      <img className={scss.detailBannerimage} src="/fura%203.svg" alt="" />
      <div className="container">
        <div className={scss.BannerMain}>
          <h1>{item.name}</h1>
          <div className={scss.inputCalculatorMain}>
            <p>Калькулятор:</p>
            <div className={scss.inputCalculator}>
              <input placeholder="от" type="text" />
              <input placeholder="кг" type="text" />
              <input placeholder="куда" type="text" />
              <select name="" id="">
                <option value="">выбрать тариф</option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
              </select>
              <button>Расчитать стоимость</button>
              <input placeholder="стоимость" type="text" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
