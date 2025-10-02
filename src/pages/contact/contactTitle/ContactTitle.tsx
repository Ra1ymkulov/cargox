import React from "react";
import scss from "./ContactTitle.module.scss";
const ContactTitle = () => {
  return (
    <div id={scss.ContactTitle}>
      <div className="container">
        <div className={scss.box}>
          <div className={scss.ContactTitle}>
            <h1>Контакты:</h1>
            <div className={scss.support}>
              <div className={scss.title}>
                <span>Email поддержки:</span>
                <p>support@figma.com help.figma.com+2crunchbase.com+2</p>
              </div>
              <div className={scss.title}>
                <span>Email по:</span>
                <p>
                  вопросам счетов и выставления счетов (invoices):
                  invoices@figma.com figma-signup.helpjuice.com
                </p>
              </div>
              <div className={scss.title}>
                <span>Email по:</span>
                <p>
                  вопросам безопасности и нарушений: abuse@figma.com
                  figma-signup.helpjuice.com
                </p>
              </div>
              <div className={scss.title}>
                <span>Email по:</span>
                <p>
                  вопросам конфиденциальности: privacy@figma.com
                  figma-signup.helpjuice.com+1
                </p>
              </div>
              <div className={scss.title}>
                <span>Адрес головного офиса:</span>
                <p>
                  Figma, Inc.760 Market St, Floor 10 San Francisco, CA 94102
                  Соединённые Штаты Америки
                </p>
              </div>
            </div>
          </div>
          <div className={scss.supportContact}>
            <h1>Как связаться со службой поддержки / продаж:</h1>
            <div className={scss.supportContactTitle}>
              <p>
                Если у вас подписка Professional, Organization или Enterprise,
                вы можете обратиться через форму поддержки, доступную в
              </p>
              <p>
                «Help» / «Support» внутри приложения Figma. help.figma.com+1
              </p>
              <p>
                Если нужен контакт с отделом продаж — заполните форму «Contact
                Sales» на сайте Figma.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactTitle;
