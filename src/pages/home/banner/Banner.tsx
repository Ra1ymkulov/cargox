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
            <h1>Надëжные перевозки по всему миру</h1>
            <img src="/miniMap.svg" alt="" />
          </div>
          <div className={scss.calculator}>
            <h3>Калькулятор:</h3>
            <div className={scss.inputs}>
              <input type="text" placeholder="от" />
              <input type="text" placeholder="куда" />
              <input type="text" placeholder="кг" />
              <select>
                <option value="">выбрать тариф</option>
                <option value="">Тариф 1</option>
                <option value="">Тариф 2</option>
                <option value="">Тариф 3</option>
              </select>
              <button>Расчитать стоимость</button>
              <div className={scss.result}>cтоимость</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
