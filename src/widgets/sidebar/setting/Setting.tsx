"use client";
import React from "react";
import scss from "./Setting.module.scss";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { IoMailOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";
import { IoCameraOutline } from "react-icons/io5";

const Setting = () => {
  const img =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKOeXLIMXu6a4LN5JT8G7CsXpIyBK5-VSJD5T4l5J3igN_9JjANsGakWBr72zu1vFgbgc&usqp=CAU";
  const defaultProfileImage =
    "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small_2x/default-avatar-icon-of-social-media-user-vector.jpg";
  return (
    <div className={scss.setting}>
      <div className={scss.user}>
        <div className={scss.userInfo}>
          <img src={img ? img : defaultProfileImage} alt="" />
          <div className={scss.title}>
            <h2>Baby Jhon</h2>
            <i>@baby234123</i>
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
