"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import scss from "./Header.module.scss";
import { FiBell } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import Link from "next/link";
const Header = () => {
  const pathname = usePathname();
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });
  const navRef = useRef<HTMLDivElement>(null);

  const items = [
    { name: "Тарифы", path: "/tariffs" },
    { name: "Отзывы", path: "/reviews" },
    { name: "Контакты", path: "/contact" },
  ];
  useEffect(() => {
    const activeElement = navRef.current?.querySelector(
      `[data-path="${pathname}"]`
    ) as HTMLElement;
    if (activeElement) {
      setUnderlineStyle({
        left: activeElement.offsetLeft,
        width: activeElement.offsetWidth,
      });
    } else {
      setUnderlineStyle({ left: 0, width: 0 });
    }
  }, [pathname]);
  const router = useRouter();

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
            {/* Select стоит перед пунктами меню */}
            <select className={scss.select}>
              <option value="Услуги">Услуги</option>
            </select>

            {items.map((item) => (
              <Link key={item.name} href={item.path} legacyBehavior>
                <a
                  data-path={item.path}
                  className={`${scss.item} ${
                    (pathname ?? "") === item.path ? scss.active : ""
                  }`}
                >
                  {item.name}
                </a>
              </Link>
            ))}
            <span
              className={scss.underline}
              style={{ left: underlineStyle.left, width: underlineStyle.width }}
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
