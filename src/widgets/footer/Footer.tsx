"use client";
import React from "react";
import scss from "./Footer.module.scss";

interface IFooterProps {}

const Footer = ({}) => {
  return (
    <footer className={scss.footer}>
      <img className={scss.backObject} src="/footer-object.svg" alt="" />

      <div className="container">
        <div className={scss.content}>
          <div className={scss.project}>
            <img src="/image 8.svg" alt="" />
            <p>
              Мы обеспечиваем доставку груза в Кыргызстан различными видами
              транспорта из стран Европы, а также из России, Казахстана и
              Республики Беларусь.
            </p>
          </div>
          <div className={scss.uls}>
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
                Бишкек​720017
              </li>
              <li>Юридический адрес: г. Бишкек, мкрн. 12, д. 16/1, кв. 37.</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
