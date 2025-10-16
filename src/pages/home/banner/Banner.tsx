import { FC } from "react";
import scss from "./Banner.module.scss";

const Banner: FC = () => {
  return (
    <section className={scss.banner}>
      <img
        className={scss.backImg}
        src="/samolet_zdaniia_neboskreby_120051_1920x1080 1.svg"
        alt=""
      />
      <div className="container">
        <div className={scss.content}>
          <div className={scss.title}>
            <p>Быстрая и надёжная логистика</p>
            <h1>
              Рассчитайте стоимость и закажите доставку по всему миру прямо
              сейчас
            </h1>
            <button>Узнать стоимость</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
