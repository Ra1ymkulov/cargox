import { FC } from "react";
import scss from "./Grade.module.scss";

const Grade: FC = () => {
  return (
    <section className={scss.grade}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.left}>
            <div className={scss.leftTop}>
              <h1>Оставьте свой отзыв</h1>
              <i>
                Ваше мнение помогает нам становиться лучше. Поделитесь
                впечатлениями — это займёт всего пару минут.
              </i>
            </div>
            <form>
              <div className={scss.info}>
                <div className={scss.inputs}>
                  <input type="text" placeholder="Введите имя" />
                  <input type="text" placeholder="Введите город" />
                  <input type="email" placeholder="Введите email" />
                </div>
                <textarea placeholder="Отправить отзыв" />
              </div>
              <div className={scss.submit}>
                <img src="/stars.svg" alt="" />
                <button>Отправить отзыв</button>
              </div>
            </form>
          </div>
          <div className={scss.right}>
            <h3>
              Вы уже пользовались Cargo?
              <span>
                Расскажите, как всё прошло. Мы читаем каждый отзыв и учитываем
                ваши предложения.
              </span>
            </h3>
            <h3>
              Все отзывы проходят модерацию.
              <span>
                Мы публикуем только реальные мнения клиентов, без
                редактирования.
              </span>
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Grade;
