import { FC } from "react";
import scss from "./Reason.module.scss";

const Reason: FC = () => {
  return (
    <section className={scss.reason}>
      <div className="container">
        <div className={scss.content}>
          <h1>Почему мы?</h1>
          <div className={scss.list}>
            <div className={scss.circle}>
              <img src="/icon-hour.svg" alt="" />
              <p>Быстрая доставка</p>
            </div>
            <div className={scss.circle}>
              <img src="/icon-dollar.svg" alt="" />
              <p>Лучшие тарифы</p>
            </div>
            <div className={scss.circle}>
              <img src="/icon-protect.svg" alt="" />
              <p>Страховка груза</p>
            </div>
            <div className={scss.circle}>
              <img src="/icon-map.svg" alt="" />
              <p>Отслеживание товара</p>
            </div>
            <div className={scss.circle}>
              <img src="/icon-van.svg" alt="" />
              <p>Надежый транспорт</p>
            </div>
            <div className={scss.circle}>
              <img src="/icon-message.svg" alt="" />
              <p>Поддержка 24/7</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reason;
