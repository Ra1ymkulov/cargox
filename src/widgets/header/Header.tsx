"use client";
import { useRouter } from "next/navigation";
import React from "react";
import scss from "./Header.module.scss";
import { FiBell } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import Link from "next/link";

const Header = () => {
  const items = [
    { name: "Тарифы", path: "/tariffs" },
    { name: "Отзывы", path: "/reviews" },
    { name: "Контакты", path: "/contact" },
  ];
  const router = useRouter();
  return (
    <header className={scss.header}>
      <div className="container">
        <div className={scss.content}>
          <div
            onClick={() => {
              router.push("/");
            }}
            className={scss.logo}
          >
            <img src="/logo-cargoX.svg" alt="logo project" />
          </div>

          <nav className={scss.nav}>
            <select className={scss.select}>
              <option value="Услуги">Услуги</option>
            </select>

            {items.map((item) => (
              <Link key={item.name} href={item.path} className={`${scss.item}`}>
                {item.name}
              </Link>
            ))}
          </nav>

          <div className={scss.user}>
            <FiBell
              style={{ cursor: "pointer" }}
              onClick={() => router.push("/user/notification")}
              fontSize={24}
              color="white"
            />
            <FaRegUser
              style={{ cursor: "pointer" }}
              onClick={() => router.push("/user")}
              fontSize={22}
              color="#fff"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
