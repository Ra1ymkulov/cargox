"use client";
import React from "react";
import scss from "./Notification.module.scss";
import { RiDeleteBin4Fill } from "react-icons/ri";
import { useRouter } from "next/navigation";

const Notification = () => {
  const router = useRouter();
  return (
    <div className={scss.section}>
      <div
        style={{ background: "#D8F3FF" }}
        className={scss.card}
        onClick={() => router.push("/user/notification/2d2ko3d93m92dd3qd")}
      >
        <div className={scss.logo}>
          <div className={scss.newmessage}></div>
          <img src="/logo-cargoX.svg" alt="logo-cargoX" />
        </div>
        <p>Ваш заказ доставлен !</p>
        <p className={scss.trackcode}>
          трек-код: <span>#2d2ko3d93m92dd3qd</span>
        </p>
        <RiDeleteBin4Fill fontSize={20} />
      </div>
      <div
        className={scss.card}
        onClick={() => router.push("/user/notification/2d2ko3d93m92dd3qd")}
      >
        <div className={scss.logo}>
          <div className={scss.newmessage}></div>
          <img src="/logo-cargoX.svg" alt="logo-cargoX" />
        </div>
        <p>Ваш заказ доставлен !</p>
        <p className={scss.trackcode}>
          трек-код: <span>#2d2ko3d93m92dd3qd</span>
        </p>
        <RiDeleteBin4Fill fontSize={20} />
      </div>
      <div
        className={scss.card}
        onClick={() => router.push("/user/notification/2d2ko3d93m92dd3qd")}
      >
        <div className={scss.logo}>
          <div className={scss.newmessage}></div>
          <img src="/logo-cargoX.svg" alt="logo-cargoX" />
        </div>
        <p>Ваш заказ доставлен !</p>
        <p className={scss.trackcode}>
          трек-код: <span>#2d2ko3d93m92dd3qd</span>
        </p>
        <RiDeleteBin4Fill fontSize={20} />
      </div>
      <div
        className={scss.card}
        onClick={() => router.push("/user/notification/2d2ko3d93m92dd3qd")}
      >
        <div className={scss.logo}>
          <div className={scss.newmessage}></div>
          <img src="/logo-cargoX.svg" alt="logo-cargoX" />
        </div>
        <p>Ваш заказ доставлен !</p>
        <p className={scss.trackcode}>
          трек-код: <span>#2d2ko3d93m92dd3qd</span>
        </p>
        <RiDeleteBin4Fill fontSize={20} />
      </div>
      <div
        className={scss.card}
        onClick={() => router.push("/user/notification/2d2ko3d93m92dd3qd")}
      >
        <div className={scss.logo}>
          <div className={scss.newmessage}></div>
          <img src="/logo-cargoX.svg" alt="logo-cargoX" />
        </div>
        <p>Ваш заказ доставлен !</p>
        <p className={scss.trackcode}>
          трек-код: <span>#2d2ko3d93m92dd3qd</span>
        </p>
        <RiDeleteBin4Fill fontSize={20} />
      </div>
      <div
        className={scss.card}
        onClick={() => router.push("/user/notification/2d2ko3d93m92dd3qd")}
      >
        <div className={scss.logo}>
          <div className={scss.newmessage}></div>
          <img src="/logo-cargoX.svg" alt="logo-cargoX" />
        </div>
        <p>Ваш заказ доставлен !</p>
        <p className={scss.trackcode}>
          трек-код: <span>#2d2ko3d93m92dd3qd</span>
        </p>
        <RiDeleteBin4Fill fontSize={20} />
      </div>
    </div>
  );
};

export default Notification;
