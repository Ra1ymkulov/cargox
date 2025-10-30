"use client";
import React, { FC } from "react";
import scss from "./Service.module.scss";
import { IServiceProps } from "../banner/Banner";
import { useGetAllServiceQuery } from "@/entities/all-service/api/allService";
const Service: FC<IServiceProps> = ({ item }) => {
  const { data, isLoading } = useGetAllServiceQuery();
  console.log(data);

  return (
    <div id={scss.service}>
      <div className="container">
        <div className={scss.service}>
          <h1>Стоимость услуг по {item.name}</h1>
          <div className={scss.serviceTitle}>
            <div className={scss.title}>
              <h6>Направление</h6>
              <div className={scss.time}>
                <p>Срок</p>
                <span>Стоимость</span>
              </div>
            </div>
            {data?.map((el, idx) => (
              <div className={scss.paste} key={idx}>
                <h5>Бишкек / {el.name}</h5>
                <div className={scss.titlePaste}>
                  <p>{item.deliveryTime} дней</p>
                  <span>от</span>
                  <p>15 сом/кг</p>
                </div>
              </div>
            ))}
          </div>
          <div className={scss.btn}>
            <button>Перейти к оформлению</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
