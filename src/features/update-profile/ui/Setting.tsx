"use client";
import React, { useState } from "react";
import scss from "./Setting.module.scss";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { IoMailOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";
import { IoCameraOutline } from "react-icons/io5";
import { useGetUserQuery } from "@/entities/user/api/userApi";
import { useUpdateProfile } from "../api/updateprofile";
import { useForm } from "react-hook-form";
import { Alert } from "@mui/material";

const Setting = () => {
  const { data: user } = useGetUserQuery();

  const { mutateAsync: handleUpdateUser } = useUpdateProfile();
  const { handleSubmit, formState, register } = useForm<User>();
  const [alert, setAlert] = useState<boolean>(false);
  const email = formState.errors.email?.message;
  const phone = formState.errors.phone?.message;
  const avatar = formState.errors.avatar?.message;
  const country = formState.errors.country?.message;
  const fullName = formState.errors.fullName?.message;
  const userName = formState.errors.userName?.message;
  const onSubmit = (inputValues: User) => {
    if (!user?.id) return;
    handleUpdateUser({ id: user.id, update: inputValues });
    setAlert(true);

    setTimeout(() => {
      setAlert(false);
    }, 5000);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={scss.setting}>
      <div className={scss.user}>
        <div className={scss.userInfo}>
          <img
            src={user?.avatar ? user.avatar : "/defeault-image-user.jpg"}
            alt="dw"
          />
          <div className={scss.title}>
            <h2>{user?.fullName}</h2>
            <i>{user?.userName}</i>
          </div>
        </div>
        <button type="submit">Сахранить</button>
      </div>
      {alert && (
        <Alert
          sx={{
            position: "fixed",
            top: "70px",
            right: "10px",
            width: "300px",
            transition: "1s ease-in",
          }}
          severity="success"
        >
          This is a success Alert.
        </Alert>
      )}
      <div className={scss.listInfo}>
        {fullName ? (
          <span className={scss.error}>{fullName}</span>
        ) : (
          <span className={scss.rightData}>{user?.fullName}</span>
        )}
        <div className={scss.section}>
          <FaRegUser fontSize={18} color="#757575" />
          <input
            {...register("fullName", { required: "Заполните поле!" })}
            defaultValue={user?.fullName}
            type="text"
            placeholder="Имя"
          />
        </div>
        {userName ? (
          <span className={scss.error}>{userName}</span>
        ) : (
          <span className={scss.rightData}>{user?.userName}</span>
        )}
        <div className={scss.section}>
          <MdOutlineAlternateEmail fontSize={18} color="#757575" />
          <input
            {...register("userName", { required: "Заполните поле!" })}
            defaultValue={user?.userName}
            type="text"
            placeholder="Ник"
          />
        </div>
        {email ? (
          <span className={scss.error}>{email}</span>
        ) : (
          <span className={scss.rightData}>{user?.email}</span>
        )}
        <div className={scss.section}>
          <IoMailOutline fontSize={18} color="#757575" />
          <input
            {...register("email", { required: "Заполните поле!" })}
            defaultValue={user?.email}
            type="email"
            placeholder="Email"
          />
        </div>
        {fullName ? (
          <span className={scss.error}>{avatar}</span>
        ) : (
          <span className={scss.rightData}>{user?.avatar}</span>
        )}
        <div className={scss.section}>
          <IoCameraOutline fontSize={18} color="#757575" />
          <input
            {...register("avatar")}
            defaultValue={user?.avatar}
            type="text"
            placeholder="Фото профиля (URL)"
          />
        </div>
        {phone ? (
          <span className={scss.error}>{phone}</span>
        ) : (
          <span className={scss.rightData}>{user?.phone}</span>
        )}
        <div className={scss.section}>
          <FiPhone fontSize={19} color="#757575" />

          <input
            {...register("phone", { required: "Заполните поле!" })}
            defaultValue={user?.phone}
            type="text"
            placeholder="Телефон"
          />
        </div>
        {country ? (
          <span className={scss.error}>{country}</span>
        ) : (
          <span className={scss.rightData}>{user?.country}</span>
        )}
        <div className={scss.section}>
          <GrLocation fontSize={18} color="#757575" />

          <input
            {...register("country", { required: "Заполните поле!" })}
            defaultValue={user?.country}
            type="text"
            placeholder="Страна"
          />
        </div>
      </div>
    </form>
  );
};

export default Setting;
