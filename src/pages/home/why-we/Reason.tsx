import { FC } from "react";
import scss from "./Reason.module.scss";

const Reason: FC = () => {
  return (
    <section className={scss.reason}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.list}>
            <div className={scss.square}>
              <img src="/icon-hour.svg" alt="" />
              <p>Быстрая надежная доставка вашего груза</p>
            </div>
            <div className={scss.square}>
              <img src="/icon-map.svg" alt="" />
              <p>Онлайн отслеживание груза </p>
            </div>
            <div className={scss.square}>
              <img src="/icon-protect.svg" alt="" />
              <p>Страховка груза для вашего безопасности</p>
            </div>
            <div className={scss.square}>
              <img src="/icon-phone.svg" alt="" />
              <p>Кругло суточная поддержка 24/7</p>
            </div>
            <div className={scss.square}>
              <img src="/icon-arrow.svg" alt="" />
              <p>Выгодные тарифы по всем мире</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reason;
