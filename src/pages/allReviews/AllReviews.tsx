"use client";
import { useGetAllReviews } from "@/entities/getReviews/api/reviewApi";
import scss from "./AllReviews.module.scss";
import React from "react";
import Card from "@/shared/ui/review-card/Card";

const AllReviews = () => {
  const { data, isLoading } = useGetAllReviews();

  return !isLoading ? (
    <div className={scss.reviews}>
      <div className="container">
        <div className={scss.content}>
          {data
            ?.sort((a, b) => b.star - a.star)
            .map((item, idx) => (
              <Card item={item} key={idx} />
            ))}
        </div>
      </div>
    </div>
  ) : (
    <div className={scss.cargoX_loader}>
      <div className={scss.logo}>
        <span className={scss.cx}>CX</span>
      </div>
    </div>
  );
};

export default AllReviews;
