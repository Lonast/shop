import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/cart/cartSlice";
import goodsReduser from "../features/goods/goodsSlice";

export const store = configureStore({
  reducer: {
    goods: goodsReduser,
    cart: cartSlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
