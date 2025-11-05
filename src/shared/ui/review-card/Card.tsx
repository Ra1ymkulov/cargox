import React, { FC } from "react";
import scss from "./Card.module.scss";
import { Rating } from "@mui/material";
import { Star } from "@mui/icons-material";

interface IProps {
  item: any;
}
const Card: FC<IProps> = ({ item }) => {
  return (
    <div className={scss.card}>
      <div className={scss.account}>
        <img
          src={item.img || "/defeault-image-user.jpg"}
          alt={item.name || "avatar"}
        />
        <div className={scss.account_title}>
          <h5>{item.name}</h5>
          <div className={scss.grade}>
            <Rating
              value={+item.star}
              readOnly
              sx={{ color: "#FFD54A" }}
              className={scss.stars}
              icon={<Star className={scss.itemStar} />}
              emptyIcon={<Star className={scss.emptyStar} />}
              precision={1}
            />
            <span>{item.star}</span>
          </div>
        </div>
      </div>
      <p className={scss.description}>
        {item.text[0].toUpperCase()}
        {item.text.slice(1)}
      </p>
    </div>
  );
};

export default Card;
