import React, { useEffect, useRef, useState } from "react";
import "./header.css";
import logo from "../../images/shop_logo.svg";
import cart from "../../images/cart.svg";
import heart from "../../images/heart-head.svg";
import searchIco from "../../images/search-ico.svg";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../hooks/hookType";
import burger from "../../images/burger.svg";
import Footer from "../footer/Footer";

const Header: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [category, setCategory] = useState<string>("all");
  const cartSelector = useAppSelector((state) => state.cart);
  const likeSelector = useAppSelector((state) => state.goods);
  const [display, setDisplay] = useState<boolean>(false);
  const navigate = useNavigate();
  const ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const body = document.querySelector("body");
    const closeDropDown: (e: MouseEvent | TouchEvent) => void = (e) => {
      if (e.target !== ref.current) {
        setDisplay(false);
      }
    };
    body?.addEventListener("click", closeDropDown);
    return () => {
      body?.removeEventListener("click", closeDropDown);
    };
  }, []);

  const handleNavigate = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      navigate(`search/?category=${category}&search=${searchValue}`);
    }
  };

  return (
    <>
      <div className="header">
        <Link to="/">
          <img className="header__logo" src={logo} alt="logo" />
        </Link>
        <div className="search__container">
          <select
            className="search__container_select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option defaultValue="all" value="all">
              All
            </option>
            <option value="clothes">Clothes</option>
            <option value="electronics">Electronics</option>
            <option value="furniture">Furniture</option>
            <option value="shoes">Shoes</option>
          </select>
          <div className="search__ico">
            <input
              placeholder="Искать товар"
              onChange={(e) => setSearchValue(e.target.value)}
              value={searchValue}
              type="text"
              onKeyDown={handleNavigate}
              className="search__container_input"
            />
            <Link to={`search/?category=${category}&search=${searchValue}`}>
              <img
                onClick={() => setSearchValue("")}
                className="header__search"
                src={searchIco}
                alt=""
              />
            </Link>
          </div>
        </div>
        <div className="cart__container">
          <Link to="cart">
            <img className="cart" src={cart} alt="cart" />
          </Link>
          <div className="cart__value">
            <p>{likeSelector.likes}</p>
          </div>
          <Link to="likes">
            <img className="header__heart" src={heart} alt="" />
          </Link>
          <div className="cart__value">
            <p>{cartSelector.cart.length}</p>
          </div>
        </div>
        <div className="header__burger">
          <img
            onClick={() => setDisplay((prev) => !prev)}
            src={burger}
            ref={ref}
            alt=""
          />
          {display && (
            <div className="header__burger_menu">
              <ul>
                <Link className="link__null" to="/">
                  <li>Home</li>
                </Link>

                <hr />
                <Link className="link__null" to="cart">
                  <li>
                    Cart <span>{cartSelector.cart.length}</span>
                  </li>
                </Link>
                <hr />
                <Link className="link__null" to="likes">
                  <li>
                    Likes <span>{likeSelector.likes}</span>
                  </li>
                </Link>
                <hr />
              </ul>
            </div>
          )}
        </div>
      </div>
      <Outlet />
      <Footer />
    </>
  );
};

export default Header;
