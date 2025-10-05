"use client";
import { useState } from "react";
import scss from "./Register.module.scss";

import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";

import Link from "next/link";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [repeatShowPassword, setRepeatShowPassword] = useState(false);
  return (
    <div className={scss.register}>
      <div className="container">
        <div className={scss.content}>
          <h1>Регистрация</h1>
          <div className={scss.getInfo}>
            <div className={scss.userData}>
              <div className={scss.input}>
                <p>Имя</p>
                <input type="text" />
              </div>
              <div className={scss.input}>
                <p>Фамилия</p>
                <input type="text" />
              </div>
              <div className={scss.input}>
                <p>Телефонный номер</p>
                <input type="text" />
              </div>
              <div className={scss.input}>
                <p>Имя пользователя</p>
                <input type="text" />
              </div>
              <div className={scss.input}>
                <p>Email</p>
                <input type="text" />
              </div>
              <div className={scss.input}>
                <p>Город</p>
                <input type="text" />
              </div>
            </div>
            <div className={scss.input}>
              <p>Придумайте пароль</p>
              <input type={showPassword ? "password" : "text"} />
              {showPassword ? (
                <FiEyeOff
                  className={scss.icon}
                  onClick={() => setShowPassword(!showPassword)}
                />
              ) : (
                <FiEye
                  className={scss.icon}
                  onClick={() => setShowPassword(!showPassword)}
                />
              )}
            </div>
            <div className={scss.input}>
              <p>Повторите пароль</p>
              <input type={repeatShowPassword ? "password" : "text"} />
              {repeatShowPassword ? (
                <FiEye
                  className={scss.icon}
                  onClick={() => setRepeatShowPassword(!repeatShowPassword)}
                />
              ) : (
                <FiEyeOff
                  className={scss.icon}
                  onClick={() => setRepeatShowPassword(!repeatShowPassword)}
                />
              )}
            </div>
            <button>Зарегистрироваться</button>
            <p>
              Уже есть аккаунт? <Link href="/auth/login">Войти</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
