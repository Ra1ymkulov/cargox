import React from "react";
import scss from "./Notification.module.scss";
import { RiDeleteBin4Fill } from "react-icons/ri";

const Notification = () => {
  return (
    <div className={scss.section}>
      <div className={scss.card}>
        <div className={scss.logo}>
          <div className={scss.newmessage}></div>
          <img src="/logo-cargoX.svg" alt="logo-cargoX" />
        </div>
        <p>Ваш заказ доставлен !</p>
        <p>
          трек-код: <span>#2d2ko3d93m92dd3qd</span>
        </p>
        <RiDeleteBin4Fill fontSize={20} />
      </div>
      <div className={scss.card}>
        <div className={scss.logo}>
          <div className={scss.newmessage}></div>
          <img src="/logo-cargoX.svg" alt="logo-cargoX" />
        </div>
        <p>Ваш заказ доставлен !</p>
        <p>
          трек-код: <span>#2d2ko3d93m92dd3qd</span>
        </p>
        <RiDeleteBin4Fill fontSize={20} />
      </div>
      <div className={scss.card}>
        <div className={scss.logo}>
          <div className={scss.newmessage}></div>
          <img src="/logo-cargoX.svg" alt="logo-cargoX" />
        </div>
        <p>Ваш заказ доставлен !</p>
        <p>
          трек-код: <span>#2d2ko3d93m92dd3qd</span>
        </p>
        <RiDeleteBin4Fill fontSize={20} />
      </div>
      <div className={scss.card}>
        <div className={scss.logo}>
          <div className={scss.newmessage}></div>
          <img src="/logo-cargoX.svg" alt="logo-cargoX" />
        </div>
        <p>Ваш заказ доставлен !</p>
        <p>
          трек-код: <span>#2d2ko3d93m92dd3qd</span>
        </p>
        <RiDeleteBin4Fill fontSize={20} />
      </div>
      <div className={scss.card}>
        <div className={scss.logo}>
          <div className={scss.newmessage}></div>
          <img src="/logo-cargoX.svg" alt="logo-cargoX" />
        </div>
        <p>Ваш заказ доставлен !</p>
        <p>
          трек-код: <span>#2d2ko3d93m92dd3qd</span>
        </p>
        <RiDeleteBin4Fill fontSize={20} />
      </div>
      <div className={scss.card}>
        <div className={scss.logo}>
          <div className={scss.newmessage}></div>
          <img src="/logo-cargoX.svg" alt="logo-cargoX" />
        </div>
        <p>Ваш заказ доставлен !</p>
        <p>
          трек-код: <span>#2d2ko3d93m92dd3qd</span>
        </p>
        <RiDeleteBin4Fill fontSize={20} />
      </div>
    </div>
  );
};

export default Notification;
