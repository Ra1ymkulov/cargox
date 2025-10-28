"use client";
import { useRouter, usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import scss from "./Header.module.scss";
import { FiBell } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";

const Header = () => {
  const items = [
    { name: "Тарифы", path: "/tariffs" },
    { name: "Отзывы", path: "/reviews" },
    { name: "Контакты", path: "/contact" },
  ];
  const router = useRouter();
  const pathname = usePathname();

  const navRef = useRef<HTMLDivElement | null>(null);
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });

  useEffect(() => {
    const el = navRef.current?.querySelector(
      `[data-path="${pathname}"]`
    ) as HTMLElement | null;
    if (el) {
      setUnderlineStyle({ left: el.offsetLeft, width: el.offsetWidth });
    } else {
      setUnderlineStyle({ left: 0, width: 0 });
    }
  }, [pathname]);
  return (
    <header className={scss.header}>
      <div className="container">
        <div className={scss.content}>
          <div
            onClick={() => {
              setUnderlineStyle({ left: 0, width: 0 });
              router.push("/");
            }}
            className={scss.logo}
          >
            <img src="/logo-cargoX.svg" alt="logo project" />
          </div>

          <nav className={scss.nav} ref={navRef}>
            <select className={scss.select}>
              <option value="Услуги">Услуги</option>
            </select>
            {items.map((item) => (
              <a
                key={item.name}
                href={item.path}
                data-path={item.path}
                onClick={(e) => {
                  e.preventDefault();
                  const target = e.currentTarget as HTMLElement;
                  setUnderlineStyle({
                    left: target.offsetLeft,
                    width: target.offsetWidth,
                  });
                  router.push(item.path);
                }}
                className={`${
                  item.path.slice(1, 10) === "tariffs"
                    ? "tariffs"
                    : item.path.slice(1, 10) === "reviews"
                    ? "reviews"
                    : item.path.slice(1, 10) === "contact"
                    ? "contact"
                    : ""
                } ${pathname === item.path ? scss.active : ""}`}
              >
                {item.name}
              </a>
            ))}

            <span
              className={scss.underline}
              style={{
                left: underlineStyle.left,
                width: underlineStyle.width,
                opacity: underlineStyle.width > 0 ? 1 : 0,
              }}
            />
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
