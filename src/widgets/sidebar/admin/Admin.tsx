"use client";
import React from "react";
import scss from "./Admin.module.scss";
import { IoSearchSharp } from "react-icons/io5";
import { FiBox } from "react-icons/fi";
import { useGetAllOrdersQuery } from "@/entities/order/api/orderApi";
import { useGetUserQuery } from "@/entities/user/api/userApi";

const Admin = ({}) => {
  const { data: order } = useGetAllOrdersQuery();
  const { data: user } = useGetUserQuery();

  const sliceCityId = (city: string) => {
    const res = `${city.slice(3, -9)}`;
    return res;
  };

  return (
    <div className={scss.admin}>
      <div className={scss.search}>
        <button className={scss.icon}>
          <IoSearchSharp fontSize={17} />
          <p>Поиск</p>
        </button>
        <input type="text" placeholder="Введите трек-код заказа" />
      </div>
      <div className={scss.content}>
        {order?.map((item, idx) => (
          <div className={scss.card} key={idx}>
            <div className={scss.contentbox}>
              <div className={scss.contentTeg}>
                <h1>Трек-код:</h1>
                <span>{item.trackingCode}</span>
              </div>
              <div className={scss.contentboxYellow}>
                <div
                  className={scss.yellow}
                  style={{
                    backgroundColor:
                      item.status === "CREATED"
                        ? "rgba(0, 162, 255, 1)"
                        : item.status === "IN_TRANSIT"
                        ? "yellow"
                        : item.status === "DELIVERED"
                        ? "green"
                        : "red",
                  }}
                ></div>
                <p>{item.status}</p>
              </div>
            </div>
            <div className={scss.contentOrder}>
              <div className={scss.contentPast}>
                <div className={scss.contentPastTeg}>
                  <span>Откуда:</span>
                  <p>{sliceCityId(item.fromCityId)}</p>
                </div>
                <div className={scss.contentPastTeg}>
                  <span>Куда:</span>
                  <p>{sliceCityId(item.toCityId)}</p>
                </div>
              </div>
              <div className={scss.contentPrice}>
                <div className={scss.contentPriceTeg}>
                  <span>Вес:</span>
                  <p>{item.weightKg}kg</p>
                </div>
                <div className={scss.contentPriceTeg}>
                  <span>Цена:</span>
                  <p>{item.price.toFixed(1)}сом</p>
                </div>
              </div>
            </div>
            <div className={scss.contentWhoPostet}>
              <FiBox />
              <span>Отправитель:</span>
              <p>{user?.fullName}</p>
            </div>
            <button>Изменить статус</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Admin;
