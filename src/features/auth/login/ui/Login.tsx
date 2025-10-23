"use client";
import { useState } from "react";
import scss from "./Login.module.scss";
import { FiEye, FiEyeOff } from "react-icons/fi";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useLoginApi } from "../api/loginApi";
import { useRouter } from "next/navigation";
interface LoginTypeInput {
  password: string;
  email: string;
}
export const Login = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const { register, formState, reset, handleSubmit } =
    useForm<LoginTypeInput>();
  const { mutateAsync: DataPost } = useLoginApi();
  function onSubmit(inputValues: LoginTypeInput) {
    DataPost(inputValues);
    reset();
    router.push("/");
  }
  return (
    <div className={scss.login}>
      <div className="container">
        <div className={scss.content}>
          <h1>Войти</h1>

          <form onSubmit={handleSubmit(onSubmit)} className={scss.getInfo}>
            <div className={scss.input}>
              <p>Введите имя пользователя или email</p>
              <input
                autoComplete="email"
                {...register("email", {
                  required: "имя или email обязателен!",
                })}
                type="email"
              />
            </div>
            <div className={scss.input}>
              <p>Введите пароль</p>
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
          </form>
        </div>
      </div>
    </div>
  );
};
