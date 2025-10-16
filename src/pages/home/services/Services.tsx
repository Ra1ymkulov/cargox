"use client";
import { FC } from "react";
import scss from "./Services.module.scss";
import { useRouter } from "next/navigation";

const Services: FC = () => {
  const router = useRouter();
  return (
    <section className={scss.services}>
      <div className="container">
        <div className={scss.content}>
          <h1>Наши услуги</h1>
          <div className={scss.list}>
            <div className={scss.title}>
              <h1>Международная доставка грузов</h1>
              <p>
                Мы доставляем ваши товары из Турции, Китая, США, Европы и других
                стран быстро, безопасно и по выгодной цене. Вы можете выбрать
                авиа, авто или морскую доставку в зависимости от сроков и
                бюджета.
              </p>
            </div>
            <img src="/fura.svg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
