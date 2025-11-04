"use client";
import { useState } from "react";
import scss from "./Login.module.scss";
import { FiEye, FiEyeOff } from "react-icons/fi";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useLoginApi } from "../api/loginApi";
import { useRouter } from "next/navigation";

export const Login = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const { register, formState, reset, handleSubmit } =
    useForm<USERLOGIN.GetUserReq>();
  const { mutateAsync: DataPost } = useLoginApi();

  async function onSubmit(inputValues: USERLOGIN.GetUserReq) {
    try {
      await DataPost(inputValues);
      reset();
      router.push("/");
    } catch (error) {
      console.error("Login error:", error);
      // Здесь можно добавить обработку ошибки, например показ уведомления
    }
  }

  return (
    <div className={scss.login}>
      <div className="container">
        <div className={scss.main}>
          <div className={scss.content}>
            <h1>Войти</h1>

            <form onSubmit={handleSubmit(onSubmit)} className={scss.getInfo}>
              <div className={scss.input}>
                {formState.errors.email ? (
                  <span className={scss.error}>
                    {formState.errors.email.message}
                  </span>
                ) : (
                  <p>Введите имя пользователя или email</p>
                )}
                <input
                  {...register("email", {
                    required: "Email обязателен!",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "Некорректный email",
                    },
                  })}
                  type="email"
                />
              </div>
              <div className={scss.input}>
                {formState.errors?.password ? (
                  <span className={scss.error}>
                    {formState.errors.password.message}
                  </span>
                ) : (
                  <p>Введите пароль</p>
                )}
                <input
                  autoComplete="current-password"
                  {...register("password", {
                    required: "Пароль обязателен!",

                    minLength: {
                      value: 6,
                      message: "Пароль должен быть не меньше 6 символов!",
                    },
                  })}
                  type={showPassword ? "text" : "password"}
                />
                {showPassword ? (
                  <FiEye
                    className={scss.icon}
                    onClick={() => setShowPassword(false)}
                  />
                ) : (
                  <FiEyeOff
                    className={scss.icon}
                    onClick={() => setShowPassword(true)}
                  />
                )}
              </div>
              <button>Войти</button>
              <p>
                Нет аккаунта?
                <Link href="/auth/register">Зарегистрируйтесь</Link>
              </p>
            </form>
          </div>
          <div className={scss.titleMain}>
            <img src="/LogoCargoX.svg" alt="" />
            <h1>Добро пожаловать обратно</h1>
            <p>
              Войдите в систему, чтобы продолжить управление доставками и
              получать уведомления в реальном времени.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
