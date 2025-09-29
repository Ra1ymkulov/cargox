import { FC } from "react";
import scss from "./Services.module.scss";

const Services: FC = () => {
  return (
    <section className={scss.services}>
      <div className="container">
        <div className={scss.content}>
          <h1>Наши услуги</h1>
          <div className={scss.cards}>
            <div className={scss.card}>
              <img src="/card-img1.svg" alt="" />
              <div className={scss.info}>
                <div className={scss.title}>
                  <h3>Автоперевозки</h3>
                  <p>Доставка грузов фурами по городу, регионам и странам.</p>
                </div>
                <button>Подробнее</button>
              </div>
            </div>
            <div className={scss.card}>
              <img src="/card-img2.svg" alt="" />
              <div className={scss.info}>
                <div className={scss.title}>
                  <h3>Aвиа</h3>
                  <p>Срочные международные перевозки за минимальное время.</p>
                </div>
                <button>Подробнее</button>
              </div>
            </div>
            <div className={scss.card}>
              <img src="/card-img3.svg" alt="" />
              <div className={scss.info}>
                <div className={scss.title}>
                  <h3>Ж/д перевозки</h3>
                  <p>
                    Надёжная доставка контейнеров и массовых грузов по железной
                    дороге.
                  </p>
                </div>
                <button>Подробнее</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
