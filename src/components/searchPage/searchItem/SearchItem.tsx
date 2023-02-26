import React from "react";
import redHeart from "../../../images/red-heart.svg";
import heartImg from "../../../images/heart.svg";
import "./searchItem.css";
import { useAppDispatch, useAppSelector } from "../../../hooks/hookType";
import { setLikes } from "../../../features/goods/goodsSlice";
import priceIco from "../../../images/price-tag.svg";
import { Link } from "react-router-dom";

interface ItemProps {
  id: number;
  img: string;
  title: string;
  description: string;
  liked: boolean;
  price: number;
  category: string;
}

const SearchItem: React.FC<ItemProps> = (props) => {
  const dispatch = useAppDispatch();
  const { id, title, img, description, liked, price, category } = props;

  const likeHandle = () => {
    dispatch(setLikes(id));

    localStorage.setItem(
      "id",
      localStorage.getItem("id") || "" + id.toString()
    );
  };
  return (
    <>
      <div className="searchItem">
        <div className="searchItem__heart">
          <div className="card__heart_background"></div>
          <img
            onClick={likeHandle}
            className="card__heart"
            src={liked ? redHeart : heartImg}
            alt="card"
          />
          <img className="searchItem__img" src={img} alt="" />
        </div>

        <div className="searchItem__content">
          <h3 className="searchItem__value">{title}</h3>
          <p className="searchItem__description">{description}</p>
          <div className="searchItem__price">
            <img className="searchItem__price_img" src={priceIco} alt="" />
            <p>{price}$</p>
          </div>
          <Link to="cart">
            <button className="searchItem__button">Add to cart</button>
          </Link>
        </div>
      </div>
      <hr />
    </>
  );
};

export default SearchItem;
