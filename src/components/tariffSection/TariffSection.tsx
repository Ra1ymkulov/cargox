import React from "react";
import scss from "./TariffSection.module.scss";
const TariffSection = () => {
  return (
    <div className={scss.content}>
      <img src="/bannerTariffSection.svg" alt="" />
      <div className="container">
        <div className={scss.tariffSection}>
          <h1>
            Доставим ваш груз из России, Беларуси, США, Европы и Китая в любую
            точку Кыргызстана
          </h1>
          <div className={scss.tariff}>
            <h1>Расчет стоимости доставки</h1>
            <div className={scss.inputTariff}>
              <input type="text" placeholder="Пункт отправления" />
              <div className={scss.inputs}>
                <input type="text" placeholder="Общий вес, кг" />
                <input type="text" placeholder="Объем, м3" />
              </div>
            </div>
            <button>РАССЧИТАТЬ</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TariffSection;
