"use client";
import { useRouter } from "next/navigation";
import React from "react";
import scss from "./Header.module.scss";
import { FiBell } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";

const Header = () => {
  const router = useRouter();
  return (
    <header className={scss.header}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.logo}>
            <img src="/logo-cargoX.svg" alt="logo project" />
          </div>
          <nav className={scss.nav}>
            <select>
              <option value="Услуги">Услуги</option>
            </select>
            <p onClick={() => router.push("/tariffs")}>Тарифы</p>
            <p onClick={() => router.push("/reviews")}>Отзывы</p>
            <p onClick={() => router.push("/contact")}>Контакты</p>
          </nav>
          <div className={scss.user}>
            <FiBell fontSize={25} color="#001f54" />
            <FaRegUser
              onClick={() => router.push("/user")}
              fontSize={23}
              color="#001f54"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
