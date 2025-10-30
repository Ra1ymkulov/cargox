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
  const email = formState.errors.email?.message || user?.email;
  const phone = formState.errors.phone?.message || user?.phone;
  const avatar = formState.errors.avatar?.message || user?.avatar;
  const country = formState.errors.country?.message || user?.country;
  const fullName = formState.errors.fullName?.message || user?.fullName;
  const userName = formState.errors.userName?.message || user?.userName;
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
          <img src="/defeault-image-user.jpg" alt="dw" />
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
            position: "absolute",
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
        <div className={scss.section}>
          <FaRegUser fontSize={18} color="#757575" />
          <input
            {...register("fullName")}
            defaultValue={user?.fullName}
            type="text"
            placeholder="Имя"
          />
        </div>
        <div className={scss.section}>
          <MdOutlineAlternateEmail fontSize={18} color="#757575" />
          <input
            {...register("userName")}
            defaultValue={user?.userName}
            type="text"
            placeholder="Ник"
          />
        </div>
        <div className={scss.section}>
          <IoMailOutline fontSize={18} color="#757575" />
          <input
            {...register("email")}
            defaultValue={user?.email}
            type="email"
            placeholder="Email"
          />
        </div>
        <div className={scss.section}>
          <IoCameraOutline fontSize={18} color="#757575" />
          <input
            {...register("avatar")}
            defaultValue={user?.avatar}
            type="text"
            placeholder="Фото профиля (URL)"
          />
        </div>
        <div className={scss.section}>
          <FiPhone fontSize={19} color="#757575" />
          <input
            {...register("phone")}
            defaultValue={user?.phone}
            type="text"
            placeholder="Телефон"
          />
        </div>
        <div className={scss.section}>
          <GrLocation fontSize={18} color="#757575" />
          <input
            {...register("country")}
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
