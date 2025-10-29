"use client";
import React from "react";
import scss from "./ContactUs.module.scss";
import { useContactApi } from "@/features/contact/api/contactApi";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

interface IRegisterProps {
  phoneNumber: string;
  userName: string;
  email: string;
  password: string;
  message: string;
}
const ContactUs = () => {
  const router = useRouter();
  const { handleSubmit, register, reset, formState, watch } =
    useForm<IRegisterProps>();

  const { mutateAsync: DataPost } = useContactApi();

  function onSubmit(contact: IRegisterProps) {
    const payload: ILoginUser = {
      userName: contact.userName ?? "",
      email: contact.email ?? "",
      text: contact.message ?? "",
      password: contact.password ?? "",
      message: contact.message ?? "",
    };
    DataPost(payload);
    reset();
    router.push("/");
  }

  return (
    <div id={scss.ContactUs}>
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)} className={scss.ContactUs}>
          <h1>Связаться с нами:</h1>
          <div className={scss.ContactUsArea}>
            <div className={scss.ContactUsInput}>
              <input
                {...register("userName", {
                  required: "Имя обязательно!",
                })}
                placeholder="Введите имя"
                type="text"
              />
              <input
                {...register("phoneNumber", {
                  required: "Имя обязательно!",
                })}
                placeholder="Номер телефона"
                type="text"
              />
              <input
                {...register("email")}
                placeholder="Введите email"
                type="text"
              />
            </div>
            <textarea
              {...register("message")}
              placeholder="Введите текст о проблеме"
            />
          </div>
          <div className={scss.ContactUsButton}>
            <button>Отправить контакт</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
