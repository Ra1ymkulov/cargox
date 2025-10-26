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
  const { data: user } = useGetUserQuery();
  return (
    <div className={scss.profile}>
      <div className={scss.user}>
        <img src="/defeault-image-user.jpg" alt="dw" />
        <div className={scss.title}>
          <h2>{user?.fullName}</h2>
          <i>@{user?.userName}</i>
        </div>
      </div>
      <div className={scss.listInfo}>
        <div className={scss.section}>
          <FaRegUser fontSize={20} color="#757575" />
          <p>{user?.fullName}</p>
        </div>
        <div className={scss.section}>
          <MdOutlineAlternateEmail fontSize={20} color="#757575" />
          <p>@{user?.userName}</p>
        </div>
        <div className={scss.section}>
          <IoMailOutline fontSize={20} color="#757575" />
          <p>{user?.email}</p>
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
