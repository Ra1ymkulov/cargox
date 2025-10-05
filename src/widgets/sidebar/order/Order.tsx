import React from "react";
import scss from "./Order.module.scss";
import { IoSearchSharp } from "react-icons/io5";
import Card from "@/shared/ui/order-card/Card";

const Order = () => {
  const data = [{}, {}];
  return (
    <div className={scss.order}>
      <div className={scss.search}>
        <div className={scss.icon}>
          <IoSearchSharp fontSize={17} />
          <p>Поиск</p>
        </div>
        <input type="text" placeholder="Введите трек-код заказа" />
      </div>
      <div className={scss.list}>
        {data.map((_, idx) => (
          <Card key={idx} />
        ))}
      </div>
    </div>
  );
};

export default Order;
