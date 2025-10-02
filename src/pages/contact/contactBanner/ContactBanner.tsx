import React from "react";
import scss from "./ContactBanner.module.scss";
const ContactBanner = () => {
  return (
    <div id={scss.bannerMain}>
      <img className={scss.detailBannerimage} src="/fura%203.svg" alt="" />
      <div className="container">
        <div className={scss.bannerMain}>
          <h1>Контакты & Саппорт</h1>
          <p>
            Спасибо за обращение. Мы внимательно рассмотрели ваш запрос и готовы
            помочь вам в решении возникшей проблемы. Пожалуйста, уточните
            следующие детали:
          </p>
          <button>Оставить отзыв</button>
        </div>
      </div>
    </div>
  );
};

export default ContactBanner;
