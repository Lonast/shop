import React, { useEffect } from "react";
import { clearCart, setCart } from "../../features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/hookType";
import SearchItem from "../searchItem/SearchItem";
import "./cart.css";

const Cart = () => {
  const selector = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  return (
    <div className="truck">
      <div className="truck__price">
        {selector.cart.map((item) => {
          return (
            <SearchItem key={item.id} good={item} id={item.id} text={false} />
          );
        })}
      </div>
      <div className="truck__container">
        <h3 className="truck__cart">Your cart</h3>
        <p className="truck__price">{selector.price}$</p>
        <button onClick={() => dispatch(clearCart())} className="truck__order">
          Order
        </button>
      </div>
    </div>
  );
};

export default Cart;
