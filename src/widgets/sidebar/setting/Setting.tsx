"use client";
import React from "react";
import scss from "./Setting.module.scss";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { IoMailOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";
import { IoCameraOutline } from "react-icons/io5";
import { useGetUserQuery } from "@/entities/user/api/userApi";

const Setting = () => {
  const { data: user } = useGetUserQuery();
  return (
    <div className={scss.setting}>
      <div className={scss.user}>
        <div className={scss.userInfo}>
          <img src="/defeault-image-user.jpg" alt="dw" />
          <div className={scss.title}>
            <h2>{user?.fullName}</h2>
            <i>@{user?.userName}</i>
          </div>
        </div>
        <button>Сахранить</button>
      </div>
      <div className={scss.listInfo}>
        <div className={scss.section}>
          <FaRegUser fontSize={18} color="#757575" />
          <input type="text" placeholder="Имя" defaultValue="Baby Jhon" />
        </div>
        <div className={scss.section}>
          <MdOutlineAlternateEmail fontSize={18} color="#757575" />
          <input type="text" placeholder="Ник" defaultValue="@baby234123" />
        </div>
        <div className={scss.section}>
          <IoMailOutline fontSize={18} color="#757575" />
          <input
            type="text"
            placeholder="Email"
            defaultValue="babyjhon2011@gmail.com"
          />
        </div>
        <div className={scss.section}>
          <IoCameraOutline fontSize={18} color="#757575" />
          <input
            type="text"
            placeholder="Фото профиля (URL)"
            defaultValue="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKOeXLIMXu6a4LN5JT8G7CsXpIyBK5
          "
          />
        </div>
        <div className={scss.section}>
          <FiPhone fontSize={19} color="#757575" />
          <input
            type="text"
            placeholder="Телефон"
            defaultValue="+996 990 200 211"
          />
        </div>
        <div className={scss.section}>
          <GrLocation fontSize={18} color="#757575" />
          <input type="text" placeholder="Город" defaultValue="Бишкек" />
        </div>
      </div>
    </div>
  );
};

export default Setting;
