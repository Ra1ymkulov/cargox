"use client";
import { useState } from "react";
import scss from "./Login.module.scss";

import { FiEye, FiEyeOff } from "react-icons/fi";
import Link from "next/link";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={scss.login}>
      <div className="container">
        <div className={scss.content}>
          <h1>Войти</h1>
          <div className={scss.getInfo}>
            <div className={scss.input}>
              <p>Введите имя пользователя или email</p>
              <input type="text" />
            </div>
            <div className={scss.input}>
              <p>Введите пароль</p>
              <input type={showPassword ? "text" : "password"} />
              {showPassword ? (
                <FiEye
                  className={scss.icon}
                  onClick={() => setShowPassword(!setShowPassword)}
                />
              ) : (
                <FiEyeOff
                  className={scss.icon}
                  onClick={() => setShowPassword(!showPassword)}
                />
              )}
            </div>
            <button>Войти</button>
            <p>
              Нет аккаунта?<Link href="/auth/register">Зарегистрируйтесь</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
