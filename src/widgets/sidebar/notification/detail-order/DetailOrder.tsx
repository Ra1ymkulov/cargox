"use client";
import React from "react";
import scss from "./DetailOrder.module.scss";

const DetailOrder = () => {
  return (
    <div className={scss.detail}>
      <div className={scss.message}>
        <div className={scss.top}>
          <img src="/logo-cargoX.svg" alt="" />
          <p>Ваш заказ доставлен !</p>
        </div>
        <div className={scss.main}>
          <h1>
            <i>
              Трек-код: <span>#2d2ko3d93m92dd3qd</span>
            </i>
          </h1>
          <div className={scss.list}>
            <p>
              Создано
              <strong></strong>
              <span>12:43</span>
            </p>
            <p>
              Доставлено <strong></strong>
              <span>12:45</span>
            </p>

            <p>
              Откуда
              <strong></strong>
              <span>Москва</span>
            </p>
            <p>
              Куда
              <strong></strong>
              <span>Бишкек</span>
            </p>
            <p>
              Группаперевозки
              <strong></strong>
              <span>Авиаперевозка</span>
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
    </div>
  );
};

export default DetailOrder;
