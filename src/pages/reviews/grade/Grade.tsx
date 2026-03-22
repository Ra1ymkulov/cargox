"use client";
import { FC, useState } from "react";
import scss from "./Grade.module.scss";
import { Rating } from "@mui/material";
import { Star } from "@mui/icons-material";
import { usePostReview } from "@/features/reviews/api/reviewsApi";
import { useForm } from "react-hook-form";
import { useGetUserQuery } from "@/entities/user/api/userApi";
import { useRouter } from "next/navigation";

interface PostReview {
  email: string;
  name: string;
  text: string;
  city: string;
}

const Grade: FC = () => {
  const [starValue, setStarValue] = useState<number | null>(5);
  const { mutate: postReview } = usePostReview();
  const { data: user } = useGetUserQuery();
  const router = useRouter();
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<PostReview>();

  const onSubmit = (inputValues: PostReview) => {
    if (!user?.id) {
      const goToLogin = confirm(
        "Войдите в аккаунт, чтобы оставить отзыв. Перейти на страницу входа?"
      );
      if (goToLogin) {
        router.push("/auth/login");
      }
      return;
    }

    postReview({
      review: {
        userId: user.id,
        city: inputValues.city,
        email: inputValues.email,
        name: inputValues.name,
        star: starValue ?? 0,
        text: inputValues.text,
      },
    });
    reset();
    setStarValue(5);
  };
  return (
    <section className={scss.grade} id="grade">
      <div className="container">
        <div className={scss.content}>
          <div className={scss.left}>
            <div className={scss.leftTop}>
              <h1>Оставьте свой отзыв</h1>
              <i>
                Ваше мнение помогает нам становиться лучше. Поделитесь
                впечатлениями — это займёт всего пару минут.
              </i>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className={scss.info}>
                <div className={scss.inputs}>
                  <div className={scss.input}>
                    {errors.name ? (
                      <span className={scss.error}>{errors.name.message}</span>
                    ) : (
                      <span>Введите имя</span>
                    )}
                    <input
                      {...register("name", {
                        required: "Напишите свое имя!",
                      })}
                      type="text"
                    />
                  </div>
                  <div className={scss.input}>
                    {errors.city ? (
                      <span className={scss.error}>{errors.city.message}</span>
                    ) : (
                      <span>Введите город</span>
                    )}
                    <input
                      {...register("city", {
                        required: "Напишите свой город!",
                      })}
                      type="text"
                    />
                  </div>
                  <div className={scss.input}>
                    {errors.email ? (
                      <span className={scss.error}>{errors.email.message}</span>
                    ) : (
                      <span>Введите email</span>
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
                </div>
                <div className={scss.input}>
                  {errors.text ? (
                    <span className={scss.error}>{errors.text.message}</span>
                  ) : (
                    <span>Отправить отзыв</span>
                  )}
                  <textarea
                    {...register("text", { required: "Введите текст отзыва" })}
                  />
                </div>
              </div>
              <div className={scss.submit}>
                <Rating
                  name="simple-controlled"
                  value={starValue}
                  onChange={(_, newValue) => setStarValue(newValue)}
                  className={scss.stars}
                  icon={<Star className={scss.itemStar} />}
                  emptyIcon={<Star className={scss.emptyStar} />}
                  precision={1}
                />
                <button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Отправка..." : "Отправить отзыв"}
                </button>
              </div>
            </form>
          </div>
          <div className={scss.right}>
            <h3>
              Вы уже пользовались Cargo?
              <span>
                Расскажите, как всё прошло. Мы читаем каждый отзыв и учитываем
                ваши предложения.
              </span>
            </h3>
            <h3>
              Все отзывы проходят модерацию.
              <span>
                Мы публикуем только реальные мнения клиентов, без
                редактирования.
              </span>
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Grade;
