import React from "react";
import scss from "./Map.module.scss";

const Map = () => {
  return (
    <div className={scss.map}>
      <img className={scss.back} src="/map-of-world-background.svg" alt="" />
      <img className={scss.back2} src="/map-of-world-background-2.svg" alt="" />
      <div className="container">
        <div className={scss.content}>
          <img src="/map-of-world.svg" alt="" />
          <div className={scss.title}>
            <h1>Страны с которыми мы сотрудничаем </h1>
            <p>
              Мы рады сообщить, что сотрудничаем с такими странами, как Китай,
              Россия, Казахстан, США, Германия, Узбекистан, Турция, Объединённые
              Арабские Эмираты и Франция. <br /> Наше партнерство охватывает
              множество направлений: логистика, транспорт, технологии и
              инфраструктура — всё для того, чтобы делать поставки максимально
              надёжными и эффективными на международном уровне.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
