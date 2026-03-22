"use client";
import React from "react";
import scss from "./Notification.module.scss";
import { RiDeleteBin4Fill } from "react-icons/ri";
import { useRouter } from "next/navigation";
import { useGetUserQuery } from "@/entities/user/api/userApi";
import { useReadMessage } from "@/features/read-message/api";

const Notification = () => {
  const { data: user } = useGetUserQuery();
  const { mutateAsync: readMessage } = useReadMessage();
  const router = useRouter();
  const notification = user?.notifications?.sort((a, b) => {
    if (a.read !== b.read) {
      return a.read ? 1 : -1;
    }
    const dataA = new Date(a.createdAt).getTime();
    const dataB = new Date(a.createdAt).getTime();
    return dataB - dataA;
  });

  return (
    <div className={scss.section}>
      {notification?.map((item, index) => (
        <div
          key={index}
          style={
            !item?.read === true
              ? { background: "#D8F3FF" }
              : { background: "none" }
          }
          className={scss.card}
          onClick={() => {
            readMessage(item?.id);
            router.push(`/user/notification/${item?.id}`);
          }}
        >
          <div className={scss.logo}>
            <div
              style={
                !item?.read === true
                  ? { background: "blue" }
                  : { background: "none" }
              }
              className={scss.newmessage}
            ></div>
            <img src="/LogoCargoX.svg" alt="logo-cargoX" />
          </div>
          <p>
            Ваш заказ{" "}
            {String(item.order.status) === "IN_TRANSIT"
              ? "в пути"
              : String(item.order.status) === "DELIVERED"
              ? "доставлен"
              : "отменено"}
            !
          </p>
          <p className={scss.trackcode}>
            трек-код: <span>{item.order.trackingCode}</span>
          </p>
          <RiDeleteBin4Fill fontSize={20} />
        </div>
      ))}
    </div>
  );
};

export default Notification;
