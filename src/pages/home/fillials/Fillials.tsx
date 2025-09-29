import { FC } from "react";
import scss from "./Fillials.module.scss";

const Fillials: FC = () => {
  return (
    <section className={scss.fillials}>
      <div className="container">
        <div className={scss.content}>
          <h1>Наши Филиалы</h1>
          <div className={scss.table}>
            <p>
              Алматы
              <span>ул. Жамбыла 123, склад № 5, блок </span>
            </p>
            <p>
              Астана
              <span>
                3rd Warehouse, International Cargo Center, Jianguo Road,
              </span>
            </p>
            <p>
              Санкт-Петербург
              <span>ул. Промышленная 10, складской комплекс “Норд-Карго”</span>
            </p>
            <p>
              Китай (Пекин, Гуанчжоу)
              <span>
                3rd Warehouse, International Cargo Center, Jianguo Road,
                Chaoyang, Beijing
              </span>
            </p>
            <p>
              Южная Корея
              <span>
                Gangnam Logistics Center, Teheran-ro 88, Gangnam, Seoul
              </span>
            </p>
            <p>
              Москва
              <span>
                Шереметьевское ш., вл. 28, г. Химки, Московская обл., 141432
              </span>
            </p>
            <p>
              Турция (Стамбул)
              <span>
                İstanbul, Bayrampaşa Sanayi Mahallesi, Karayolu Cad. No: 50,
                Kargo Depo
              </span>
            </p>
            <p>
              ОАЭ (Дубай)
              <span>
                Dubai Industrial City, Warehouse 12, Plot C-34, Dubai, UAE
              </span>
            </p>
            <p>
              Германия
              <span>
                Berliner Str. 27, Logistikzentrum Süd, 12099 Berlin, Deutschland
              </span>
            </p>
            <p>
              США (Нью-Йорк, Лос-Анджелес)
              <span>
                2800 S Alameda St, Unit 101, Los Angeles, CA 90058, USA
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fillials;
