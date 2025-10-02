import React from "react";
import scss from "./ContactUs.module.scss";
const ContactUs = () => {
  return (
    <div id={scss.ContactUs}>
      <div className="container">
        <div className={scss.ContactUs}>
          <h1>Связаться с нами:</h1>
          <div className={scss.ContactUsArea}>
            <div className={scss.ContactUsInput}>
              <input placeholder="Введите имя" type="text" />
              <input placeholder="Номер телефона" type="text" />
              <input placeholder="Введите email" type="text" />
            </div>
            <textarea
              style={{
                width: "600px",
                background: "black",
                border: "1px solid white",
                padding: "10px 10px",
                color: "white",
              }}
              placeholder="Введите текст о проблеме"
            ></textarea>
          </div>
          <div className={scss.ContactUsButton}>
            <button>Отправить отзыв</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
