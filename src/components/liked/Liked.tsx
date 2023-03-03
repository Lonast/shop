import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hookType";
import Card from "../card/Card";
import "./liked.css";

const Liked: React.FC = () => {
  const selector = useAppSelector((state) => state.goods);
  return (
    <div className="liked">
      <h2 className="liked__header">Your favorite</h2>
      <div className="liked__cards">
        {selector.newGoods.map((item) => {
          if (item.liked === true) {
            return (
              <Card
                key={item.id}
                id={item.id}
                img={item.category.image}
                title={item.title}
                rating={item.rating}
                liked={item.liked}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default Liked;
