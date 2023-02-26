import React, { useState } from "react";
import "./header.css";
import logo from "../../images/shop_logo.svg";
import cart from "../../images/cart.svg";
import heart from "../../images/heart-head.svg";
import searchIco from "../../images/search-ico.svg";
import { Link, Outlet, useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [category, setCategory] = useState<string>("all");
  const navigate = useNavigate();

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
          <Link to="/">
            <img className="cart" src={cart} alt="cart" />
          </Link>
          <div className="cart__value">
            <p>0</p>
          </div>
          <Link to="likes">
            <img className="header__heart" src={heart} alt="" />
          </Link>
          <div className="cart__value">
            <p>0</p>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Header;
