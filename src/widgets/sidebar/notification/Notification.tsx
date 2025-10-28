"use client";
import React from "react";
import scss from "./Notification.module.scss";
import { RiDeleteBin4Fill } from "react-icons/ri";
import { useRouter } from "next/navigation";
import { useGetUserQuery } from "@/entities/user/api/userApi";
import { useReadMessage } from "@/features/read-message/api";

const Notification = () => {
  const { data: user } = useGetUserQuery();
  const { mutate: readMessage } = useReadMessage();

  console.log(user?.notifications.map((item: any, ind: number) => item.read));
  const router = useRouter();
  return (
    <div className={scss.section}>
      {user?.notifications?.map((item: any, ind: number) => (
        <div
          key={ind}
          style={
            !item?.read === true
              ? { background: "#D8F3FF" }
              : { background: "white" }
          }
          className={scss.card}
          onClick={() => {
            readMessage(item?.id);
            router.push(`/user/notification/${item?.id}`);
          }}
        >
          <div className={scss.logo}>
            <div className={scss.newmessage}></div>
            <img src="/logo-cargoX.svg" alt="logo-cargoX" />
          </div>
          <p>Ваш заказ доставлен !</p>
          <p className={scss.trackcode}>
            трек-код: <span>{item?.order?.trackingCode}</span>
          </p>
          <RiDeleteBin4Fill fontSize={20} />
        </div>
      ))}
    </div>
  );
};

export default Notification;
