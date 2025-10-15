import { FC } from "react";
import scss from "./Info.module.scss";

const Info: FC = () => {
  return (
    <section className={scss.info}>
      <div className={scss.content}>
        <div className={scss.card}>
          <img src="/icon-cube.svg" alt="" />
          <h3>100 000+ заказов</h3>
          <p>
            Мы успешно доставили более 100 тысяч посылок по всему миру. Каждый
            заказ проходит полный контроль — от приёма на складе до вручения
            клиенту.
          </p>
          <button>Узнать маршруты</button>
        </div>
        <div className={scss.card}>
          <img src="/icon-earth.svg" alt="" />
          <h3>20+ стран доставки</h3>
          <p>
            Доставляем грузы из Турции, Китая, США, Кореи и Европы.Быстро,
            надёжно и по лучшим маршрутам.
          </p>
          <button>Узнать маршруты</button>
        </div>
        <div className={scss.card}>
          <img src="/icon-file.svg" alt="" />
          <h3>5+ лет на рынке</h3>
          <p>
            Опыт, доверие и профессионализм основа нашей работы. Мы развиваемся
            вместе с вами.
          </p>
          <button>Узнать маршруты</button>
        </div>
      </div>
    </section>
  );
};

export default Info;
