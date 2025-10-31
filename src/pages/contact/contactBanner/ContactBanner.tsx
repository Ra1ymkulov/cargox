"use client";
import scss from "./ContactBanner.module.scss";

const ContactBanner = () => {
  return (
    <div className={scss.banner}>
      <img
        className={scss.detailBannerimage}
        src="/fura%203.svg"
        alt="Banner"
      />
      <div className="container">
        <div className={scss.bannerMain}>
          <h1>Контакты & Саппорт</h1>
          <p>
            Спасибо за обращение. Мы внимательно рассмотрели ваш запрос и готовы
            помочь вам в решении возникшей проблемы. Пожалуйста, уточните
            следующие детали:
          </p>
          <button
            onClick={() => {
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Оставить контакт
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactBanner;
