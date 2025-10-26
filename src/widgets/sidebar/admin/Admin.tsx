import React from "react";
import scss from "./Admin.module.scss";
import { IoSearchSharp } from "react-icons/io5";
import { FiBox } from "react-icons/fi";

interface IAdminProps {}

const Admin = ({}) => {
  return (
    <div className={scss.admin}>
      <div className={scss.search}>
        <button className={scss.icon}>
          <IoSearchSharp fontSize={17} />
          <p>Поиск</p>
        </button>
        <input type="text" placeholder="Введите трек-код заказа" />
      </div>
      <div className={scss.content}>
        <div className={scss.card}>
          <div className={scss.contentbox}>
            <div className={scss.contentTeg}>
              <h1>Трек-код:</h1>
              <span>#2d2ko3d93m92dd3qd</span>
            </div>
            <div className={scss.contentboxYellow}>
              <div className={scss.yellow}></div>
              <p>В пути</p>
            </div>
          </div>
          <div className={scss.contentOrder}>
            <div className={scss.contentPast}>
              <div className={scss.contentPastTeg}>
                <span>Откуда:</span>
                <p>Бишкек</p>
              </div>
              <div className={scss.contentPastTeg}>
                <span>Куда:</span>
                <p>Бишкек</p>
              </div>
            </div>
            <div className={scss.contentPrice}>
              <div className={scss.contentPriceTeg}>
                <span>Вес:</span>
                <p>12 кг</p>
              </div>
              <div className={scss.contentPriceTeg}>
                <span>Цена:</span>
                <p>$ 120</p>
              </div>
            </div>
          </div>
          <div className={scss.contentWhoPostet}>
            <FiBox />
            <span>Отправитель:</span>
            <p>Aziret Raiymkulov</p>
          </div>
          <button>Изменить статус</button>
        </div>
        <div className={scss.card}>
          <div className={scss.contentbox}>
            <div className={scss.contentTeg}>
              <h1>Трек-код:</h1>
              <span>#2d2ko3d93m92dd3qd</span>
            </div>
            <div className={scss.contentboxYellow}>
              <div className={scss.yellow}></div>
              <p>В пути</p>
            </div>
          </div>
          <div className={scss.contentOrder}>
            <div className={scss.contentPast}>
              <div className={scss.contentPastTeg}>
                <span>Откуда:</span>
                <p>Бишкек</p>
              </div>
              <div className={scss.contentPastTeg}>
                <span>Куда:</span>
                <p>Бишкек</p>
              </div>
            </div>
            <div className={scss.contentPrice}>
              <div className={scss.contentPriceTeg}>
                <span>Вес:</span>
                <p>12 кг</p>
              </div>
              <div className={scss.contentPriceTeg}>
                <span>Цена:</span>
                <p>$ 120</p>
              </div>
            </div>
          </div>
          <div className={scss.contentWhoPostet}>
            <FiBox />
            <span>Отправитель:</span>
            <p>Aziret Raiymkulov</p>
          </div>
          <button>Изменить статус</button>
        </div>
        <div className={scss.card}>
          <div className={scss.contentbox}>
            <div className={scss.contentTeg}>
              <h1>Трек-код:</h1>
              <span>#2d2ko3d93m92dd3qd</span>
            </div>
            <div className={scss.contentboxYellow}>
              <div className={scss.yellow}></div>
              <p>В пути</p>
            </div>
          </div>
          <div className={scss.contentOrder}>
            <div className={scss.contentPast}>
              <div className={scss.contentPastTeg}>
                <span>Откуда:</span>
                <p>Бишкек</p>
              </div>
              <div className={scss.contentPastTeg}>
                <span>Куда:</span>
                <p>Бишкек</p>
              </div>
            </div>
            <div className={scss.contentPrice}>
              <div className={scss.contentPriceTeg}>
                <span>Вес:</span>
                <p>12 кг</p>
              </div>
              <div className={scss.contentPriceTeg}>
                <span>Цена:</span>
                <p>$ 120</p>
              </div>
            </div>
          </div>
          <div className={scss.contentWhoPostet}>
            <FiBox />
            <span>Отправитель:</span>
            <p>Aziret Raiymkulov</p>
          </div>
          <button>Изменить статус</button>
        </div>
        <div className={scss.card}>
          <div className={scss.contentbox}>
            <div className={scss.contentTeg}>
              <h1>Трек-код:</h1>
              <span>#2d2ko3d93m92dd3qd</span>
            </div>
            <div className={scss.contentboxYellow}>
              <div className={scss.yellow}></div>
              <p>В пути</p>
            </div>
          </div>
          <div className={scss.contentOrder}>
            <div className={scss.contentPast}>
              <div className={scss.contentPastTeg}>
                <span>Откуда:</span>
                <p>Бишкек</p>
              </div>
              <div className={scss.contentPastTeg}>
                <span>Куда:</span>
                <p>Бишкек</p>
              </div>
            </div>
            <div className={scss.contentPrice}>
              <div className={scss.contentPriceTeg}>
                <span>Вес:</span>
                <p>12 кг</p>
              </div>
              <div className={scss.contentPriceTeg}>
                <span>Цена:</span>
                <p>$ 120</p>
              </div>
            </div>
          </div>
          <div className={scss.contentWhoPostet}>
            <FiBox />
            <span>Отправитель:</span>
            <p>Aziret Raiymkulov</p>
          </div>
          <button>Изменить статус</button>
        </div>
        <div className={scss.card}>
          <div className={scss.contentbox}>
            <div className={scss.contentTeg}>
              <h1>Трек-код:</h1>
              <span>#2d2ko3d93m92dd3qd</span>
            </div>
            <div className={scss.contentboxYellow}>
              <div className={scss.yellow}></div>
              <p>В пути</p>
            </div>
          </div>
          <div className={scss.contentOrder}>
            <div className={scss.contentPast}>
              <div className={scss.contentPastTeg}>
                <span>Откуда:</span>
                <p>Бишкек</p>
              </div>
              <div className={scss.contentPastTeg}>
                <span>Куда:</span>
                <p>Бишкек</p>
              </div>
            </div>
            <div className={scss.contentPrice}>
              <div className={scss.contentPriceTeg}>
                <span>Вес:</span>
                <p>12 кг</p>
              </div>
              <div className={scss.contentPriceTeg}>
                <span>Цена:</span>
                <p>$ 120</p>
              </div>
            </div>
          </div>
          <div className={scss.contentWhoPostet}>
            <FiBox />
            <span>Отправитель:</span>
            <p>Aziret Raiymkulov</p>
          </div>
          <button>Изменить статус</button>
        </div>
        <div className={scss.card}>
          <div className={scss.contentbox}>
            <div className={scss.contentTeg}>
              <h1>Трек-код:</h1>
              <span>#2d2ko3d93m92dd3qd</span>
            </div>
            <div className={scss.contentboxYellow}>
              <div className={scss.yellow}></div>
              <p>В пути</p>
            </div>
          </div>
          <div className={scss.contentOrder}>
            <div className={scss.contentPast}>
              <div className={scss.contentPastTeg}>
                <span>Откуда:</span>
                <p>Бишкек</p>
              </div>
              <div className={scss.contentPastTeg}>
                <span>Куда:</span>
                <p>Бишкек</p>
              </div>
            </div>
            <div className={scss.contentPrice}>
              <div className={scss.contentPriceTeg}>
                <span>Вес:</span>
                <p>12 кг</p>
              </div>
              <div className={scss.contentPriceTeg}>
                <span>Цена:</span>
                <p>$ 120</p>
              </div>
            </div>
          </div>
          <div className={scss.contentWhoPostet}>
            <FiBox />
            <span>Отправитель:</span>
            <p>Aziret Raiymkulov</p>
          </div>
          <button>Изменить статус</button>
        </div>
      </div>
    </div>
  );
};

export default Admin;
