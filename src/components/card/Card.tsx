import React from "react";
import "./card.css";
import star from "../../images/star.svg";

interface CardProps {
  img: string;
  title: string;
  rating: {
    rate: number;
    count: number;
  };
}

const Card: React.FC<CardProps> = (props) => {
  const { title, img, rating } = props;

  return (
    <div className="card">
      <img className="card__image" src={img} alt="" />
      <div className="card__rating">
        <hr className="card__hr" />
        <div className="info">
          <p title={title} className="info__title">
            {title.length >= 30 ? title.slice(0, 30) + "..." : title}
          </p>
          <div className="rating">
            <p className="">{rating.rate}</p>
            <img className="card__rating_rate" src={star} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
