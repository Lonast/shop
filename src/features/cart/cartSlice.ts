import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Cart } from "../../types";

type CartGoods = {
  cart: Cart[];
  price: number;
};

const initialState: CartGoods = {
  cart: [],
  price: 0,
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, action: PayloadAction<Cart>) => {
      state.cart.push(action.payload);
      state.price += action.payload.price;
    },
    deleteFromCart: (state, action: PayloadAction<string>) => {
      const price = state.cart.find((item) => {
        return item.deleteId === action.payload ? item.price : 0;
      });
      state.cart = state.cart.filter((item) => {
        return item.deleteId !== action.payload;
      });

      state.price -= price?.price ? price.price : 0;
    },
    clearCart: (state) => {
      state.cart = [];
      state.price = 0;
    },
  },
});

export const { setCart, clearCart, deleteFromCart } = cartSlice.actions;
export default cartSlice.reducer;
