import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface NewGoods {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  creationAt: string;
  updatedAt: string;
  rating: string;
  liked: boolean;
  category: {
    id: string;
    name: number;
    image: string;
    creationAt: string;
    updatedAt: string;
  };
}
type GoodsDataState = {
  status: string;
  newGoods: NewGoods[];
};
const initialState: GoodsDataState = {
  newGoods: [],
  status: "",
};

export const getGoodsThunkNew = createAsyncThunk(
  "good/getGoodsThunkNew",
  async () => {
    const res = await axios.get("https://api.escuelajs.co/api/v1/products");
    return res.data;
  }
);

export const goodsSlice = createSlice({
  name: "good",
  initialState,
  reducers: {
    setLikes: (state, action: PayloadAction<number>) => {
      const like =
        state.newGoods.find((item) => item.id === action.payload) ||
        state.newGoods[1];
      like.liked = !like.liked;
    },
  },
  extraReducers(builder) {
    builder.addCase(getGoodsThunkNew.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(
      getGoodsThunkNew.fulfilled,
      (state, action: PayloadAction<NewGoods[]>) => {
        state.status = "fulfilled";
        state.newGoods = action.payload.map((item) => {
          return {
            ...item,
            rating: (Math.random() * 5).toFixed(1),
            liked: false,
          };
        });
      }
    );
  },
});

export const { setLikes } = goodsSlice.actions;
export default goodsSlice.reducer;
