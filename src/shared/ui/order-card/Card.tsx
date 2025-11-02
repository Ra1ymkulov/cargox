import React, { FC } from "react";
import scss from "./Card.module.scss";

const Card: FC<any> = ({ data }) => {
  console.log(data);

  const idCode = "#2d2ko3d93m92dd3qd";
  return (
    <div className={scss.card}>
      <h1>
        Трек-код: <span>{data?.trackingCode}</span>
      </h1>
      <div className={scss.info}>
        <p>
          Вес: <span>{data?.weightKg}</span>
        </p>
        <p>
          Цена: <span>$ 120</span>
        </p>
        <p>
          Заказ оформлен:
          <span>{data?.createdAt.slice(0, 10)}</span>
        </p>
        <p>
          Откуда:
          <span>{data?.fromCityId.slice(3, 9)}</span>
        </p>
        <p>
          Куда:
          <span>{data?.toCityId.slice(3, 9)}</span>
        </p>
        <p>
          Доставлен:
          <span>{data.status}</span>
        </p>
      </div>
    </div>
  );
};

export default Card;
