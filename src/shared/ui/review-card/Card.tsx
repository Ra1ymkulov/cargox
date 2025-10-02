import React, { FC } from "react";
import scss from "./Card.module.scss";

interface IProps {
  review: {
    img: string;
    str: string;
    grade: number;
    name: string;
  };
}
const Card: FC<IProps> = ({ review }) => {
  return (
    <div className={scss.card}>
      <div className={scss.account}>
        <img src={review.img} alt="" />
        <div className={scss.account_title}>
          <h5>{review.name}</h5>
          <p>
            oooooo <span>5.0</span>
          </p>
        </div>
      </div>
      <p className={scss.description}>{review.str}</p>
    </div>
  );
};

export default Card;
