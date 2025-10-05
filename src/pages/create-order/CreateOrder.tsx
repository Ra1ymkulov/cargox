import React from "react";
import scss from "./CreateOrder.module.scss";

const CreateOrder = () => {
  return (
    <div className={scss.create}>
      <div className={scss.content}>
        <div className={scss.title}>
          <h3>Оформление заказа</h3>
        </div>
        <div className={scss.inputs}>
          <div className={scss.flex}>
            <div className={scss.selectBlock}>
              <p>Откуда</p>
              <select>
                <option value="">Выбрать город</option>
              </select>
            </div>
            <div className={scss.selectBlock}>
              <p>Куда</p>
              <select>
                <option value="">Выбрать город</option>
              </select>
            </div>
          </div>
          <div className={scss.selectBlock}>
            <p>Тариф</p>
            <select style={{ width: "490px" }}>
              <option value="">Выбрать тариф</option>
            </select>
          </div>
          <div className={scss.flex}>
            <div className={scss.inputBlock}>
              <p>Вес</p>
              <input type="text" />
            </div>
            <div className={scss.price}>
              <p>Стоимость</p>
              <div>
                <p>234</p>
              </div>
            </div>
          </div>
          <button>Перейти к оплате</button>
        </div>
      </div>
    </div>
  );
};

export default CreateOrder;
