import { configureStore } from "@reduxjs/toolkit";
import { type } from "os";
import goodsReduser from "../features/goods/goodsSlice";

export const store = configureStore({
  reducer: {
    goods: goodsReduser,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
