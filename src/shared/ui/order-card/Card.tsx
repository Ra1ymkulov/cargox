import React from "react";
import scss from "./Card.module.scss";

const Card = () => {
  const idCode = "#2d2ko3d93m92dd3qd";
  return (
    <div className={scss.card}>
      <h1>
        Трек-код: <span>{idCode}</span>
      </h1>
      <div className={scss.line}></div>
      <div className={scss.info}>
        <p>
          Вес: <span>12 кг</span>
        </p>
        <p>
          Цена: <span>$ 120</span>
        </p>
        <p>
          Заказ оформлен:
          <span>23-09-25 / 23:20</span>
        </p>
        <p>
          Откуда:
          <span>Москва</span>
        </p>
        <p>
          Куда:
          <span>Бишкек</span>
        </p>
        <p>
          Доставлен:
          <span>-- -- --</span>
        </p>
      </div>
      <div className={scss.where}>
        <div className={scss.location}>
          <p>Создано</p>
          <p>В пути</p>
          <p>Доставлено</p>
        </div>
        <img src="/wheremyproduct.svg" alt="" />
      </div>
    </div>
  );
};

export default Card;
