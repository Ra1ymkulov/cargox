import { useRouter } from "next/navigation";
import React from "react";
import scss from "./SideBar.module.scss";
import { FaRegUser } from "react-icons/fa";
import { FaRegFileAlt } from "react-icons/fa";
import { LuBell } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { MdLogout } from "react-icons/md";

const Sidebar = () => {
  const router = useRouter();
  return (
    <div className={scss.sidebar}>
      <div className={scss.content}>
        <div onClick={() => router.push("/user")} className={`${scss.card}`}>
          <FaRegUser fontSize={25} color="#001F54" />
          <p>Мой профиль</p>
        </div>
        <div
          onClick={() => router.push("/user/order")}
          className={`${scss.card}`}
        >
          <FaRegFileAlt fontSize={25} color="#001F54" />
          <p>Мои заказы</p>
        </div>
        <div
          onClick={() => router.push("/user/notification")}
          className={`${scss.card}`}
        >
          <LuBell fontSize={25} color="#001F54" />
          <p>Уведовление</p>
        </div>
        <div
          onClick={() => router.push("/user/setting")}
          className={`${scss.card}`}
        >
          <IoSettingsOutline fontSize={25} color="#001F54" />
          <p>Настройки</p>
        </div>
        <div
          onClick={() => router.push("/user/create")}
          className={`${scss.card}`}
        >
          <FaRegFileAlt fontSize={25} color="#001F54" />
          <p>Заказы</p>
        </div>
        <div className={`${scss.logout}`}>
          <MdLogout fontSize={25} color="rgb(255, 91, 91)" />
          <p>Выйти</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
