"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FiBell, FiMenu } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import scss from "./Header.module.scss";

const Header = () => {
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const items = [
    { name: "Тарифы", path: "/tariffs" },
    { name: "Отзывы", path: "/reviews" },
    { name: "Контакты", path: "/contact" },
  ];

  return (
    <>
      <header className={`${scss.header} ${isSidebarOpen ? scss.open : ""}`}>
        <div className="container">
          <div className={scss.content}>
            <div className={scss.logo} onClick={() => router.push("/")}>
              <img src="/logo-cargoX.svg" alt="Cargo X Logo" />
            </div>

            <nav className={scss.nav}>
              <select className={scss.select}>
                <option value="Услуги">Услуги</option>
              </select>

              {items.map((item) => (
                <Link key={item.name} href={item.path} className={scss.item}>
                  {item.name}
                </Link>
              ))}
            </nav>

            <div className={scss.user}>
              <FiBell
                fontSize={22}
                color="white"
                style={{ cursor: "pointer" }}
                onClick={() => router.push("/user/notification")}
              />
              <FaRegUser
                fontSize={20}
                color="white"
                style={{ cursor: "pointer" }}
                onClick={() => router.push("/user")}
              />
              <div
                className={scss.burgerMenu}
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              >
                {!isSidebarOpen ? (
                  <FiMenu fontSize={24} color="white" />
                ) : (
                  <IoMdClose fontSize={24} color="white" />
                )}
              </div>
              <div
                className={scss.burgerMenu}
                onClick={() => setIsSidebarOpen(false)}
              ></div>
            </div>
          </div>
        </div>
      </header>
      {isSidebarOpen && (
        <aside className={scss.sidebar}>
          <nav className={scss.sidebarNav}>
            <select className={scss.select}>
              <option value="Услуги">Услуги</option>
            </select>

            {items.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                onClick={() => setIsSidebarOpen(false)}
                className={scss.item}
              >
                {item.name}
              </Link>
            ))}

            <div className={scss.sidebarIcons}>
              <FiBell
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setIsSidebarOpen(false);
                  router.push("/user/notification");
                }}
              />
              <FaRegUser
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setIsSidebarOpen(false);
                  router.push("/user");
                }}
              />
            </div>
          </nav>
        </aside>
      )}
      <div className={scss.overlay} onClick={() => setIsSidebarOpen(false)} />
    </>
  );
};

export default Header;
