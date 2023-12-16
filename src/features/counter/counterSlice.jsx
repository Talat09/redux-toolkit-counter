import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { count: 0 },
  reducers: {
    increment: (state) => {
      state.count = state.count + 1;
    },
    decrement: (state) => {
      state.count = state.count - 1;
    },
    reset: (state) => {
      state.count = 0;
    },
    increaseByAmmount: (state, action) => {
      state.count = state.count + action.payload;
    },
  },
});
export const { increment, decrement, reset, increaseByAmmount } =
  counterSlice.actions; //reducer er under a action gula thakbe
export default counterSlice.reducer;
