"use client";
import React from "react";
import scss from "./AirTransport.module.scss";
const AirTransport = () => {
  return (
    <div id={scss.service}>
      <div className="container">
        <div className={scss.service}>
          <h1>Стоимость услуг по авиаперевозкам</h1>
          <div className={scss.serviceTitle}>
            <div className={scss.title}>
              <h6>Направление</h6>
              <div className={scss.time}>
                <p>Срок</p>
                <span>Стоимость</span>
              </div>
            </div>
            <div className={scss.paste}>
              <h5>Бишкек / Алматы</h5>
              <div className={scss.titlePaste}>
                <p>2-3 дней</p>
                <span>от</span>
                <p>55 сом/кг</p>
              </div>
            </div>
            <div className={scss.paste}>
              <h5>Бишкек /Астана</h5>
              <div className={scss.titlePaste}>
                <p>5-7 дней</p>
                <span>от</span>
                <p>64 сом/кг</p>
              </div>
            </div>
            <div className={scss.paste}>
              <h5>Бишкек /Санкт-Петербург</h5>
              <div className={scss.titlePaste}>
                <p>2-3 дней</p>
                <span>от</span>
                <p>70 сом/кг</p>
              </div>
            </div>
            <div className={scss.paste}>
              <h5>Бишкек / Китай (Пекин, Гуанчжоу)</h5>
              <div className={scss.titlePaste}>
                <p>2-3 дней</p>
                <span>от</span>
                <p>70 сом/кг</p>
              </div>
            </div>
            <div className={scss.paste}>
              <h5>Бишкек / Южная Корея</h5>
              <div className={scss.titlePaste}>
                <p>6-9 дней</p>
                <span>от</span>
                <p>78 сом/кг</p>
              </div>
            </div>
            <div className={scss.paste}>
              <h5>Бишкек / Москва</h5>
              <div className={scss.titlePaste}>
                <p>7-10 дней</p>
                <span>от</span>
                <p>84 сом/кг</p>
              </div>
            </div>
            <div className={scss.paste}>
              <h5>Бишкек / Турция (Стамбул)</h5>
              <div className={scss.titlePaste}>
                <p>8-12 дней</p>
                <span>от</span>
                <p>90 сом/кг</p>
              </div>
            </div>
            <div className={scss.paste}>
              <h5>Бишкек / ОАЭ (Дубай)</h5>
              <div className={scss.titlePaste}>
                <p>9-12 дней</p>
                <span>от</span>
                <p>110 сом/кг</p>
              </div>
            </div>
            <div className={scss.paste}>
              <h5>Бишкек / Германия</h5>
              <div className={scss.titlePaste}>
                <p>10-14 дней</p>
                <span>от</span>
                <p>110 сом/кг</p>
              </div>
            </div>
            <div className={scss.paste}>
              <h5>Бишкек / США (Нью-Йорк, Лос-Анджелес)</h5>
              <div className={scss.titlePaste}>
                <p>12-18 дней</p>
                <span>от</span>
                <p>140 сом/кг</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AirTransport;
