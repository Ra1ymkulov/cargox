"use client";
import React from "react";
import scss from "./Header.module.scss";

interface IHeaderProps {}

const Header = ({}) => {
  return (
    <header className={scss.header}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.logo}>
            <img src="/logo-cargoX.svg" alt="" />
          </div>
          <nav className={scss.nav}>
            <select>
              <option value="Услуги">Услуги</option>
            </select>
            <p>Тарифы</p>
            <p>Отзывы</p>
            <p>Контакты</p>
          </nav>
          <div className={scss.user}>
            <img src="/Bell.svg" alt="" />
            <img src="/logo-user.svg" alt="" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
