"use client";
import React from "react";
import scss from "./User.module.scss";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { IoMailOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";
import { useGetUserQuery } from "@/entities/user/api/userApi";

const User = () => {
  const img =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeIH-BVvr5QT15XFlYawi54nA0ayrqRmzVit_8AJ2E9MVOBQwQmtl79MiuUlHLRXiBEWk&usqp=CAU";
  const defaultProfileImage =
    "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small_2x/default-avatar-icon-of-social-media-user-vector.jpg";
  const { data: user } = useGetUserQuery();
  console.log(user);

  return (
    <div className={scss.profile}>
      <div className={scss.user}>
        <img src={img ? img : defaultProfileImage} alt="" />
        <div className={scss.title}>
          <h2>{user?.fullName}</h2>
          <i>@baby234123</i>
        </div>
      </div>
      <div className={scss.listInfo}>
        <div className={scss.section}>
          <FaRegUser fontSize={20} color="#757575" />
          <p>Baby Jhon</p>
        </div>
        <div className={scss.section}>
          <MdOutlineAlternateEmail fontSize={20} color="#757575" />
          <p>@baby234123</p>
        </div>
        <div className={scss.section}>
          <IoMailOutline fontSize={20} color="#757575" />
          <p>babyjhon2011@gmail.com</p>
        </div>
        <div className={scss.section}>
          <FiPhone fontSize={20} color="#757575" />
          <p>+996 990 200 211</p>
        </div>
        <div className={scss.section}>
          <GrLocation fontSize={20} color="#757575" />
          <p>Бишкек</p>
        </div>
      </div>
    </div>
  );
};

export default User;
