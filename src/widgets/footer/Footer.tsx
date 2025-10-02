"use client";
import React from "react";
import scss from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={scss.footer}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.market}>
            <img src="/logo.svg" alt="" />
            <p>
              Мы обеспечиваем доставку груза в Кыргызстан различными видами
              транспорта из стран Европы, а также из России, Казахстана и
              Республики Беларусь.
            </p>
            <div className={scss.icons}>
              <img src="/Icon-insta.svg" alt="" />
              <img src="/Icon-twitter.svg" alt="" />
              <img src="/Icon-face.svg" alt="" />
            </div>
          </div>
          <ul>
            <li>Наши услуги</li>
            <li>Автоперевозки</li>
            <li>Авиаперевозки</li>
            <li>Складское хранение</li>
            <li>Калькулятор</li>
            <li>Грузоперевозки</li>
          </ul>
          <ul>
            <li>О компании</li>
            <li>О нас</li>
            <li>Отзывы</li>
            <li>Документы</li>
            <li>Статьи</li>
            <li>Контакты</li>
          </ul>
          <ul>
            <li>Контакты</li>
            <li>
              Улица Жоомарта Боконбаева, 146а  ​Первомайский район,
              Бишкек​720017 Юридический адрес: г. Бишкек, мкрн. 12, д. 16/1, кв.
              37.
            </li>
          </ul>
        </div>
        <div className={scss.bottom}>
          <div className={scss.line}></div>
          <p>
            © 2025 Cargo X — Надежная доставка грузов в Кыргызстан и страны СНГ.
            Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
