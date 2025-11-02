"use client";
import React, { useState } from "react";
import scss from "./Admin.module.scss";
import { IoSearchSharp } from "react-icons/io5";
import { useGetAllOrdersQuery } from "@/entities/order/api/orderApi";
import Card from "@/shared/ui/orderAdminCard/Card";

const Admin = ({}) => {
  const { data: order } = useGetAllOrdersQuery();

  const [searchValue, setSearchValue] = useState("");
  const [tab, setTab] = useState("ALL");

  const filteredBySearch = order?.filter((item) =>
    item.trackingCode.toLowerCase().includes(searchValue)
  );

  const filteredOrders = order?.filter(
    (item) => item.status === tab || tab === "ALL"
  );
  const resFilter = searchValue?.length ? filteredBySearch : filteredOrders;
  console.log(order);

  return (
    <div className={scss.admin}>
      <div className={scss.search}>
        <button className={scss.icon}>
          <IoSearchSharp fontSize={17} />
          <p>Поиск</p>
        </button>
        <input
          onChange={(e) => setSearchValue(e.target.value.toLowerCase())}
          type="text"
          placeholder="Введите трек-код заказа"
        />
      </div>
      <div className={scss.sortNav}>
        <button
          onClick={() => setTab("ALL")}
          style={
            tab === "ALL" ? { backgroundColor: "rgba(218, 218, 218, 1)" } : {}
          }
        >
          All
        </button>
        <p
          onClick={() => setTab("CREATED")}
          style={
            tab === "CREATED"
              ? { backgroundColor: "rgba(218, 218, 218, 1)" }
              : {}
          }
        >
          Создано
        </p>
        <p
          onClick={() => setTab("IN_TRANSIT")}
          style={
            tab === "IN_TRANSIT"
              ? { backgroundColor: "rgba(218, 218, 218, 1)" }
              : {}
          }
        >
          В пути
        </p>
        <p
          onClick={() => setTab("DELIVERED")}
          style={
            tab === "DELIVERED"
              ? { backgroundColor: "rgba(218, 218, 218, 1)" }
              : {}
          }
        >
          Доставлено
        </p>
        <p
          onClick={() => setTab("CANCELED")}
          style={
            tab === "CANCELED"
              ? { backgroundColor: "rgba(218, 218, 218, 1)" }
              : {}
          }
        >
          Отменено
        </p>
      </div>

      <div className={scss.content}>
        {resFilter?.length ? (
          resFilter?.map((item, idx) => (
            <Card item={item} key={idx} setTab={setTab} />
          ))
        ) : (
          <p>Заказов нет</p>
        )}
      </div>
    </div>
  );
};

export default Admin;
