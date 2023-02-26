import React, { useState } from "react";
import "./card.css";
import star from "../../images/star.svg";
import heartImg from "../../images/heart.svg";
import redHeart from "../../images/red-heart.svg";
import { useAppDispatch, useAppSelector } from "../../hooks/hookType";
import { setLikes } from "../../features/goods/goodsSlice";

interface CardProps {
  id: number;
  img: string;
  title: string;
  rating: string;
  liked: boolean;
}

const Card: React.FC<CardProps> = (props) => {
  const dispatch = useAppDispatch();
  const { id, title, img, rating, liked } = props;

  const likeHandle = () => {
    dispatch(setLikes(id));

    localStorage.setItem(
      "id",
      localStorage.getItem("id") || "" + id.toString()
    );
  };

  return (
    <div className="card">
      <div className="card__heart_background"></div>
      <img
        onClick={likeHandle}
        className="card__heart"
        src={liked ? redHeart : heartImg}
        alt="card"
      />
      <img className="card__image" src={img} alt="" />
      <div className="card__rating">
        <hr className="card__hr" />
        <div className="info">
          <p title={title} className="info__title">
            {title.length >= 30 ? title.slice(0, 30) + "..." : title}
          </p>
          <div className="rating">
            <p className="">{rating}</p>
            <img className="card__rating_rate" src={star} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
