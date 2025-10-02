"use client";
import React, { useState } from "react";
import scss from "./User.module.scss";

const User = () => {
  const [tab, setTab] = useState<string>("userProfile");

  return (
    <div className={scss.userlayout}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.sidebar}>
            <div
              onClick={() => setTab("userProfile")}
              className={`${scss.userProfile} ${scss.card}`}
            >
              <img src="/Users.svg" alt="" />
              <p>Мой профиль</p>
            </div>
            <div
              onClick={() => setTab("userOrder")}
              className={`${scss.userOrder} ${scss.card}`}
            >
              <img src="/File text.svg" alt="" />
              <p>Мои заказы</p>
            </div>
            <div
              onClick={() => setTab("userNotification")}
              className={`${scss.userNotification} ${scss.card}`}
            >
              <img src="/Bell.svg" alt="" />
              <p>Уведовление</p>
            </div>
            <div
              onClick={() => setTab("userSetting")}
              className={`${scss.userSetting} ${scss.card}`}
            >
              <img src="/Settings.svg" alt="" />
              <p>Настройки</p>
            </div>
            <div
              onClick={() => setTab("adminOrder")}
              className={`${scss.adminOrder} ${scss.card}`}
            >
              <img src="/File text.svg" alt="" />
              <p>Заказы</p>
            </div>
            <div className={`${scss.logout} ${scss.card}`}>
              <img src="/Log out.svg" alt="" />
              <p>Выйти</p>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default User;
