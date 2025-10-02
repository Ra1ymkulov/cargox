import { FC } from "react";
import scss from "./Review.module.scss";
import Card from "@/shared/ui/review-card/Card";

const Review: FC = () => {
  const data = [
    {
      img: "/logo-man.svg",
      name: "Айбек Асылбеков",
      str: "Оформление груза прошло быстро, без лишней бюрократии. Уведомления приходили вовремя, всё прозрачно.",
      grade: 5,
    },
    {
      img: "/logo-man.svg",
      name: "Айбек Асылбеков",
      str: "Оформление груза прошло быстро, без лишней бюрократии. Уведомления приходили вовремя, всё прозрачно.",
      grade: 5,
    },
    {
      img: "/logo-man.svg",
      name: "Айбек Асылбеков",
      str: "Оформление груза прошло быстро, без лишней бюрократии. Уведомления приходили вовремя, всё прозрачно.",
      grade: 5,
    },
    {
      img: "/logo-man.svg",
      name: "Айбек Асылбеков",
      str: "Оформление груза прошло быстро, без лишней бюрократии. Уведомления приходили вовремя, всё прозрачно.",
      grade: 5,
    },
    {
      img: "/logo-man.svg",
      name: "Айбек Асылбеков",
      str: "Оформление груза прошло быстро, без лишней бюрократии. Уведомления приходили вовремя, всё прозрачно.",
      grade: 5,
    },
    {
      img: "/logo-man.svg",
      name: "Айбек Асылбеков",
      str: "Оформление груза прошло быстро, без лишней бюрократии. Уведомления приходили вовремя, всё прозрачно.",
      grade: 5,
    },
  ];
  return (
    <section className={scss.review}>
      <div className="container">
        <div className={scss.content}>
          <h1>Отзывы наших клиетнов</h1>
          <p>
            Узнайте, что говорят те, кто уже прошёл путь обучения с нами. Вот
            что некоторые из наших учеников говорят о своем опыте:
          </p>
          <div className={scss.list}>
            {data.map((item, idx) => (
              <Card review={item} key={idx} />
            ))}
          </div>
          <button>еще</button>
        </div>
      </div>
    </section>
  );
};

export default Review;
