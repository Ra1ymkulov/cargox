"use client";
import React from "react";
import scss from "./Order.module.scss";
import { IoSearchSharp } from "react-icons/io5";
import Card from "@/shared/ui/order-card/Card";
import { useGetUserQuery } from "@/entities/user/api/userApi";

const Order = () => {
  const { data: user } = useGetUserQuery();

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
        {user?.orders.map((item, idx) => (
          <Card data={item} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default Order;
