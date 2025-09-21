"use client";
import React, { useState } from "react";
import scss from "./Header.module.scss";
import Link from "next/link";

interface IHeaderProps {}

const Header = ({}) => {
  const [burgerMenu, setBurgerMenu] = useState<boolean>(false);

  return (
    <header className={scss.header}>
      <div className="container">
        <div className={scss.content}>
          <Link href="/">
            <div className={scss.logo}>
              <img src="/image 8.svg" alt="" />
            </div>
          </Link>
          <div
            className={scss.burgerMenu}
            onClick={() => setBurgerMenu(!burgerMenu)}
          >
            <img src="/burgerMenu.svg" alt="" />
            {burgerMenu && (
              <div className={scss.modal}>
                <nav>
                  <Link href="/service">Услуги</Link>
                  <Link href="/">Грузоперевозки</Link>
                  <Link href="/">Калькулятор</Link>
                  <Link href="/">Отзывы</Link>
                  <Link href="/">Контакты</Link>
                </nav>
                <div className={scss.btns}>
                  <Link href="/auth/signup">
                    <button>Войти</button>
                  </Link>
                </div>
              </div>
            )}
          </div>
          <nav>
            <Link href="/service">Услуги</Link>
            <Link href="/">Грузоперевозки</Link>
            <Link href="/">Калькулятор</Link>
            <Link href="/">Отзывы</Link>
            <Link href="/">Контакты</Link>
          </nav>
          <div className={scss.btns}>
            <Link href="/auth/signup">
              <button>Войти</button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
