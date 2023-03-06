import React, { useState, useEffect, ReactNode } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { NewGoods } from "../../types";
import { useAppDispatch, useAppSelector } from "../../hooks/hookType";
import { setCart } from "../../features/cart/cartSlice";
import "./singlePage.css";
import star from "../../images/star.svg";
import { uid } from "uid";

const SinglePage: React.FC = () => {
  const selector = useAppSelector((state) => state.goods);
  const id = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const emptGood = {
    deleteId: "",
    id: 0,
    title: "",
    price: 0,
    description: "",
    images: [],
    creationAt: "",
    updatedAt: "",
    rating: "",
    liked: false,
    category: {
      id: "",
      name: "",
      image: "",
      creationAt: "",
      updatedAt: "",
    },
  };

  const [good, setGood] = useState<NewGoods>();
  const [images, setImages] = useState<string>("");
  useEffect(() => {
    if (good === undefined) {
      setGood(
        selector.newGoods.find((item) => {
          return item.id.toString() === id.id;
        })
      );
    }

    setImages(good?.category.image || "");
  }, [good]);
  const rate = () => {
    let rating: ReactNode[] = [];
    if (Math.ceil(parseInt(good?.rating || "")) <= 1) {
      return <img src={star} className="rating__star" />;
    } else {
      for (let i = 0; i <= Math.ceil(parseInt(good?.rating || "") || 5); i++) {
        rating.push(<img src={star} key={i} className="rating__star" />);
      }
    }
    return rating;
  };
  const cartHandler = () => {
    const deletingGood = {
      ...(good || emptGood),
      deleteId: uid(),
    };
    dispatch(
      setCart(
        deletingGood || {
          deleteId: "",
          id: 0,
          title: "",
          price: 0,
          description: "",
          images: [],
          creationAt: "",
          updatedAt: "",
          rating: "",
          liked: false,
          category: {
            id: "",
            name: "",
            image: "",
            creationAt: "",
            updatedAt: "",
          },
        }
      )
    );
  };

  return (
    <div className="singleGood">
      <button onClick={() => navigate(-1)} className="singleGood__back">
        BACK
      </button>
      <div className="singleGood__img">
        <img className="singleGood__img-main" src={images} alt="" />
        <div className="singleGood__img_three">
          <img
            onClick={() => setImages(good?.category.image || "")}
            className="singleGood__img-secondary"
            src={good?.category.image}
            alt=""
          />
          <img
            onClick={() => setImages(good?.images[0] || "")}
            className="singleGood__img-secondary"
            src={good?.images[0]}
            alt=""
          />
          <img
            onClick={() => setImages(good?.images[1] || "")}
            className="singleGood__img-secondary"
            src={good?.images[1]}
            alt=""
          />
          <img
            onClick={() => setImages(good?.images[2] || "")}
            className="singleGood__img-secondary"
            src={good?.images[2]}
            alt=""
          />
        </div>
      </div>
      <div className="singleGood__container">
        <div className="singleGood__info">
          <h2>{good?.title}</h2>
          <p>{good?.description}</p>
          <h2>Category</h2>
          <p>{good?.category.name}</p>
          <h2>Price</h2>
          <p>{good?.price}$</p>
          <h2>Rating</h2>
          <div className="singleGood__rating">
            <p>{good?.rating}</p>
            {rate()}
          </div>
          <button onClick={cartHandler} className="searchItem__button">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
