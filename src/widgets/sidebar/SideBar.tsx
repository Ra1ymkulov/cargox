import { useRouter } from "next/navigation";
import React from "react";
import scss from "./SideBar.module.scss";
import { LuBell } from "react-icons/lu";
import { LuUserRoundCheck } from "react-icons/lu";
import { MdLogout } from "react-icons/md";
import { AiOutlineFileDone } from "react-icons/ai";
import { AiOutlineFileText } from "react-icons/ai";
import { LuUserRoundCog } from "react-icons/lu";
import { useLogout } from "@/features/auth/logout/logout";
import { useGetUserQuery } from "@/entities/user/api/userApi";

const Sidebar = () => {
  const router = useRouter();
  const logout = useLogout();
  const { data: user } = useGetUserQuery();
  const counter = user?.notifications.filter(
    (item) => item.read === !true
  ).length;
  return (
    <div className={scss.sidebar}>
      <div className={scss.content}>
        <div className={scss.blockContent}>
          <div onClick={() => router.push("/user")} className={`${scss.card}`}>
            <LuUserRoundCheck fontSize={30} color="#001F54" />
            <p>Мой профиль</p>
          </div>
          <div
            onClick={() => router.push("/user/order")}
            className={`${scss.card}`}
          >
            <AiOutlineFileText fontSize={30} color="#001F54" />
            <p>Мои заказы</p>
          </div>
          <div
            onClick={() => router.push("/user/notification")}
            className={`${scss.card}`}
          >
            <LuBell fontSize={30} color="#001F54" />
            <p>Уведовление</p>
            {counter === 0 ? "" : <p className={scss.counter}></p>}
          </div>
          <div
            onClick={() => router.push("/user/setting")}
            className={`${scss.card}`}
          >
            <LuUserRoundCog fontSize={30} color="#001F54" />
            <p>Настройки</p>
          </div>
          {user?.email === "swity-fox@gmail.com" ? (
            <div
              onClick={() => router.push("/user/create")}
              className={`${scss.card}`}
            >
              <AiOutlineFileDone fontSize={30} color="#001F54" />
              <p>Заказы</p>
            </div>
          ) : (
            ""
          )}
        </div>
        <div onClick={() => logout()} className={`${scss.logout}`}>
          <MdLogout fontSize={25} color="rgb(255, 91, 91)" />
          <p>Выйти</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
