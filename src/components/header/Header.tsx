import React from "react";
import "./header.css";
import logo from "../../images/shop_logo.svg";
import cart from "../../images/cart.svg";
import heart from "../../images/heart-head.svg";
import { Link, Outlet } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <>
      <div className="header">
        <Link to="/">
          <img className="header__logo" src={logo} alt="logo" />
        </Link>
        <div className="search__container">
          <select className="search__container_select">
            <option defaultValue="all" value="all">
              Все категории
            </option>
            <option value="home">Для дома</option>
            <option value="technique">Техника</option>
            <option value="car">Для машины</option>
            <option value="rest">Для Отдыха</option>
          </select>
          <input
            placeholder="Искать товар"
            type="text"
            className="search__container_input"
          />
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
