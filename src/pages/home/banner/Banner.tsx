import { FC } from "react";
import scss from "./Banner.module.scss";
import { Typewriter } from "react-simple-typewriter";

const Banner: FC = () => {
  const words = [
    " Рассчитайте стоимость и закажите доставку по всему миру прямо сейчас",
  ];
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
              <Typewriter
                words={words}
                typeSpeed={70}
                deleteSpeed={20}
                loop={0}
                cursor={true}
              />
            </h1>
            <button>Узнать стоимость</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
