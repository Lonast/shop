import React from "react";
import redHeart from "../../images/red-heart.svg";
import heartImg from "../../images/heart.svg";
import "./searchItem.css";
import { useAppDispatch } from "../../hooks/hookType";
import { setLikes } from "../../features/goods/goodsSlice";
import priceIco from "../../images/price-tag.svg";
import { deleteFromCart, setCart } from "../../features/cart/cartSlice";
import { Cart } from "../../types";
import { Link } from "react-router-dom";

interface ItemProps {
  id: number;
  text: boolean;
  good: Cart;
}

const SearchItem: React.FC<ItemProps> = (props) => {
  const dispatch = useAppDispatch();
  const { id, text, good } = props;

  const likeHandle = () => {
    dispatch(setLikes(id));

    localStorage.setItem(
      "id",
      localStorage.getItem("id") || "" + id.toString()
    );
  };

  const cartHandler = () => {
    if (text) {
      dispatch(setCart(good));
    } else {
      dispatch(deleteFromCart(good.deleteId));
    }
  };
  return (
    <>
      <div
        className="searchItem"
        style={!text ? { paddingRight: "10px" } : { paddingRight: "0px" }}
      >
        <div className="searchItem__heart">
          {text && (
            <div>
              <div className="card__heart_background"></div>
              <img
                onClick={likeHandle}
                className="card__heart"
                src={good.liked ? redHeart : heartImg}
                alt="card"
              />
            </div>
          )}
          <Link to={`item/${id}`}>
            <img className="searchItem__img" src={good.category.image} alt="" />
          </Link>
        </div>
        <div className="searchItem__content">
          <h3 className="searchItem__value">{good.title}</h3>
          <p className="searchItem__description">{good.description}</p>
          <div className="searchItem__price">
            <img className="searchItem__price_img" src={priceIco} alt="" />
            <p>{good.price}$</p>
          </div>
          <button onClick={cartHandler} className="searchItem__button">
            {text ? "Add to cart" : "Delete from cart"}
          </button>
        </div>
      </div>
      <hr />
    </>
  );
};

export default SearchItem;
