"use client";
import { FC } from "react";
import scss from "./Review.module.scss";
import Card from "@/shared/ui/review-card/Card";
import { useGetAllReviews } from "@/entities/getReviews/api/reviewApi";
import { useRouter } from "next/navigation";

const Review: FC = () => {
  const { data } = useGetAllReviews();
  const router = useRouter();
  return (
    <section className={scss.review}>
      <div className="container">
        <div className={scss.content}>
          <h1>Отзывы наших клиетнов</h1>
          <p>
            Узнайте, что говорят те, кто уже прошёл путь обучения с нами. Вот
            что некоторые из наших учеников говорят о своем опыте:
          </p>
          <div className={scss.list}>
            {data?.slice(0, 6).map((item) => (
              <Card item={item} key={item.id} />
            ))}
          </div>
          <button onClick={() => router.push("/all-reviews")}>еще</button>
        </div>
      </div>
    </section>
  );
};

export default Review;
