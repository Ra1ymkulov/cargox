"use client";
import React, { useState } from "react";
import scss from "./DetailOrder.module.scss";
import { useGetUserQuery } from "@/entities/user/api/userApi";
import { useParams } from "next/navigation";
import { formatDate } from "@/shared/config/date";

const DetailOrder = () => {
  const { data: user } = useGetUserQuery();
  const params = useParams();
  const id = params?.id;
  const data = user?.notifications
    ?.filter((el) => el.id === id)
    .map((item) => item.order);

  const sliceCityId = (city: string) => {
    const res = `${city.slice(3, -9)}`;
    return res;
  };

  const sliceServiceId = (city: string) => {
    const res = `${city.slice(3, -10)}`;
    return res;
  };
  return (
    <div className={scss.detail}>
      {data?.map((el, index) => (
        <div key={index} className={scss.message}>
          <div className={scss.top}>
            <img src="/logo-cargoX.svg" alt="" />
            <p>Ваш заказ доставлен!</p>
          </div>
          <div className={scss.main}>
            <h1>
              <i>
                Трек-код: <span>#{el.trackingCode}</span>
              </i>
            </h1>
            <div className={scss.list}>
              <p>
                Создано
                <strong></strong>
                <span>{formatDate(el.createdAt)}</span>
              </p>
              <p>
                Доставлено <strong></strong>
                <span>12:45</span>
              </p>

              <p>
                Откуда
                <strong></strong>
                <span>{sliceCityId(el.fromCityId)}</span>
              </p>
              <p>
                Куда
                <strong></strong>
                <span>{sliceCityId(el.toCityId)}</span>
              </p>
              <p>
                Группаперевозки
                <strong></strong>
                <span>{sliceServiceId(el.serviceTypeId)}</span>
              </p>
              <p>
                Кому
                <strong></strong>
                <span>Baby John</span>
              </p>
              <p>
                Где можете забрать
                <strong></strong>
                <span>
                  Улица Токтогула, 214/1  ​Ленинский район, Бишкек​720010
                </span>
              </p>
            </div>
            <img src="/adress-message.svg" alt="" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default DetailOrder;
