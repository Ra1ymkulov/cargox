import { FC } from "react";
import scss from "./Banner.module.scss";
import { Typewriter } from "react-simple-typewriter";

const Banner: FC = () => {
  const words = [
    "Рассчитайте стоимость и закажите доставку по всему миру прямо сейчас",
    "Узнайте цену и начните доставку по всему миру уже сегодня",
    "Мгновенный расчёт и запуск доставки — просто и надёжно",
    "Оцените стоимость и оформите международную перевозку за минуту",
    "Быстрый расчёт. Глобальная доставка. Всё в одном клике",
    "Введите параметры — получите цену и запустите доставку",
    "Рассчитайте стоимость и доверьте нам ваш груз",
    "Узнайте цену и начните логистику без границ",
    "Рассчитайте доставку и отправьте груз по всему миру — легко и быстро",
    "Оформите доставку за минуту — от расчёта до запуска",
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
                typeSpeed={50}
                deleteSpeed={20}
                delaySpeed={2500}
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
