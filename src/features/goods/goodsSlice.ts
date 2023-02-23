import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface Goods {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}
type GoodsDataState = {
  goods: Goods[];
  status: string;
};
const initialState: GoodsDataState = {
  goods: [],
  status: "",
};

export const getGoodsThunk = createAsyncThunk(
  "good/getGoodsThunk",
  async () => {
    const res = await axios.get("https://fakestoreapi.com/products");

    return res.data;
  }
);

export const goodsSlice = createSlice({
  name: "good",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getGoodsThunk.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(
      getGoodsThunk.fulfilled,
      (state, action: PayloadAction<Goods[]>) => {
        state.status = "fulfilled";
        state.goods = action.payload;
      }
    );
  },
});

export default goodsSlice.reducer;
