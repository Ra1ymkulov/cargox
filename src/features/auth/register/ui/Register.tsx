"use client";
import { FC, useState } from "react";
import scss from "./Register.module.scss";

import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { useRegisterApi } from "../api/registerApi";

interface IRegisterProps {
  firstName: string;
  lastName: string;
  phone: string;
  userName: string;
  email: string;
  city: string;
  password: string;
  repeatPassword: string;
}

export const Register = () => {
  const { handleSubmit, register, reset, formState, watch } =
    useForm<IRegisterProps>();

  const { mutateAsync: registerFunc } = useRegisterApi();

  const [showPassword, setShowPassword] = useState(false);
  const [repeatShowPassword, setRepeatShowPassword] = useState(false);

  const nameError = formState.errors.firstName?.message;
  const lastNameError = formState.errors.lastName?.message;
  const cityError = formState.errors.city?.message;
  const emailError = formState.errors.email?.message;
  const passwordError = formState.errors.password?.message;
  const phoneError = formState.errors.phone?.message;
  const repeatPasswordError = formState.errors.repeatPassword?.message;
  const userNameError = formState.errors.userName?.message;

  const onSubmit = (inputValues: IRegisterProps) => {
    const data: USERREGISTER.GetUserReq = {
      fullName: `${inputValues.firstName} ${inputValues.lastName}`,
      email: inputValues.email,
      userName: inputValues.userName,
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeH-BVVrSQ1Sf1Yavi5a4mZ6aMZ...",
      password: inputValues.password,
    };
    registerFunc(data);
    reset();
  };

  return (
    <div className={scss.register}>
      <div className="container">
        <div className={scss.main}>
          <div className={scss.titleMain}>
            <img src="/LogoCargoX.svg" alt="" />
            <h1>Добро пожаловать!</h1>
            <p>
              Зарегистрируйтесь, чтобы начать отслеживать грузы, управлять
              логистикой и получать уведомления в реальном времени.
            </p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className={scss.content}>
            <h1>Регистрация</h1>
            <div className={scss.getInfo}>
              <div className={scss.userData}>
                <div className={scss.input}>
                  {nameError ? (
                    <span className={scss.error}>{nameError}</span>
                  ) : (
                    <p>Имя</p>
                  )}
                  <input
                    {...register("firstName", {
                      required: "Имя обязательно!",
                    })}
                    type="text"
                  />
                </div>
                <div className={scss.input}>
                  {lastNameError ? (
                    <span className={scss.error}>{lastNameError}</span>
                  ) : (
                    <p>Фамилия</p>
                  )}
                  <input
                    {...register("lastName", {
                      required: "Фамилия обязательна!",
                    })}
                    type="text"
                  />
                </div>
                <div className={scss.input}>
                  {phoneError ? (
                    <span className={scss.error}>{phoneError}</span>
                  ) : (
                    <p>Телефонный номер</p>
                  )}
                  <input
                    {...register("phone", {
                      required: "Телефон обязателен!",
                    })}
                    type="text"
                  />
                </div>
                <div className={scss.input}>
                  {userNameError ? (
                    <span className={scss.error}>{userNameError}</span>
                  ) : (
                    <p>Имя пользователя</p>
                  )}
                  <input
                    {...register("userName", {
                      required: "Имя пользователя обязательно!",
                    })}
                    type="text"
                  />
                </div>
                <div className={scss.input}>
                  {emailError ? (
                    <span className={scss.error}>{emailError}</span>
                  ) : (
                    <p>Email</p>
                  )}
                  <input
                    {...register("email", {
                      required: "Email обязателен!",
                      pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: "Некорректный email",
                      },
                    })}
                    type="text"
                  />
                </div>
                <div className={scss.input}>
                  {cityError ? (
                    <span className={scss.error}>{cityError}</span>
                  ) : (
                    <p>Город</p>
                  )}
                  <input
                    {...register("city", { required: "Город обязателен!" })}
                    type="text"
                  />
                </div>
              </div>
              <div className={scss.input}>
                {passwordError ? (
                  <span className={scss.error}>{passwordError}</span>
                ) : (
                  <p>Придумайте пароль</p>
                )}
                <input
                  {...register("password", {
                    required: "Пароль обязателен!",
                    minLength: { value: 6, message: "Минимум 6 символов" },
                  })}
                  type={showPassword ? "text" : "password"}
                />

                {showPassword ? (
                  <FiEye
                    className={scss.icon}
                    onClick={() => setShowPassword(!showPassword)}
                  />
                ) : (
                  <FiEyeOff
                    className={scss.icon}
                    onClick={() => setShowPassword(!showPassword)}
                  />
                )}
              </div>
              <div className={scss.input}>
                {repeatPasswordError ? (
                  <span className={scss.error}>{repeatPasswordError}</span>
                ) : (
                  <p>Повторите пароль</p>
                )}
                <input
                  {...register("repeatPassword", {
                    required: "Повтор пароля обязателен!",
                    validate: (val) =>
                      val === watch("password") || "Пароли не совпадают!",
                  })}
                  type={repeatShowPassword ? "text" : "password"}
                />
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
          </form>
        </div>
      </div>
    </div>
  );
};
