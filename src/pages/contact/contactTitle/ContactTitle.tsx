import React from "react";
import scss from "./ContactTitle.module.scss";
const ContactTitle = () => {
  return (
    <div className={scss.contactTitle}>
      <div className="container">
        <div className={scss.box}>
          <div className={scss.contactTitle}>
            <h1>Контакты:</h1>
            <div className={scss.support}>
              <div className={scss.title}>
                <p>Email поддержки:</p>
                <span>support@figma.com help.figma.com+2crunchbase.com+2</span>
              </div>
              <div className={scss.title}>
                <p>Email по:</p>
                <span>
                  вопросам счетов и выставления счетов (invoices):
                  invoices@figma.com figma-signup.helpjuice.com
                </span>
              </div>
              <div className={scss.title}>
                <p>Email по:</p>
                <span>
                  вопросам безопасности и нарушений: abuse@figma.com
                  figma-signup.helpjuice.com
                </span>
              </div>
              <div className={scss.title}>
                <p>Email по:</p>
                <span>
                  вопросам конфиденциальности: privacy@figma.com
                  figma-signup.helpjuice.com+1
                </span>
              </div>
              <div className={scss.title}>
                <p>Адрес головного офиса:</p>
                <span>
                  Figma, Inc.760 Market St, Floor 10 San Francisco, CA 94102
                  Соединённые Штаты Америки
                </span>
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
