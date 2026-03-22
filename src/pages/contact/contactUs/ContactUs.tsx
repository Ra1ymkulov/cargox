"use client";
import React from "react";
import scss from "./ContactUs.module.scss";
import { useContactApi } from "@/features/contact/api/contactApi";
import { useForm } from "react-hook-form";

interface IRegisterProps {
  phoneNumber: string;
  userName: string;
  email: string;
  password: string;
  message: string;
}
const ContactUs = () => {
  const { handleSubmit, register, reset, formState } =
    useForm<IRegisterProps>();

  const { mutateAsync: dataPost } = useContactApi();

  function onSubmit(inputValue: IRegisterProps) {
    dataPost(inputValue);

    reset();
  }

  return (
    <div className={scss.contact} id="contact">
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)} className={scss.contactUs}>
          <h1>Связаться с нами</h1>
          <div className={scss.contactUsArea}>
            <div className={scss.contactUsInput}>
              {formState.errors.userName && (
                <span className={scss.error}>
                  {formState.errors.userName.message}
                </span>
              )}
              <input
                style={{ borderColor: formState.errors.userName ? "red" : "" }}
                {...register("userName", {
                  required: "Имя обязательно!",
                })}
                placeholder="Введите имя"
                type="text"
              />
              {formState.errors.phoneNumber && (
                <span className={scss.error}>
                  {formState.errors.phoneNumber.message}
                </span>
              )}
              <input
                style={{
                  borderColor: formState.errors.phoneNumber ? "red" : "",
                }}
                {...register("phoneNumber", {
                  required: "Телефон обязательно!",
                })}
                placeholder="Номер телефона"
                type="text"
              />
              {formState.errors.email && (
                <span className={scss.error}>
                  {formState.errors.email.message}
                </span>
              )}
              <input
                style={{ borderColor: formState.errors.email ? "red" : "" }}
                {...register("email", {
                  required: "Email обязательно!",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Неверный формат email",
                  },
                })}
                placeholder="Введите email"
                type="email"
              />
            </div>
            <div className={scss.textarea}>
              {formState.errors.message && (
                <span className={scss.error}>
                  {formState.errors.message.message}
                </span>
              )}
              <textarea
                style={{
                  borderColor: formState.errors.message ? "red" : "",
                  color: formState.errors.message ? "red" : "",
                }}
                {...register("message", {
                  required: "Заполните поле!",
                })}
                placeholder="Введите текст о проблеме"
              />
            </div>
          </div>
          <div className={scss.contactUsButton}>
            <button type="submit">Отправить контакт</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
