"use client";
import { FC } from "react";
import scss from "./Banner.module.scss";

const Banner: FC = () => {
  return (
    <section className={scss.banner}>
      <img className={scss.backImg} src="/bannerReviews.svg" alt="" />
      <div className="container">
        <div className={scss.content}>
          <h1>Отзывы клиентов CargoX</h1>
          <p>
            Мы работаем для вашего комфорта и безопасности. Ниже — реальные
            отзывы тех, кто уже воспользовался нашими услугами.
          </p>
          <button
            onClick={() => {
              document
                .getElementById("grade")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Оставить отзыв
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
