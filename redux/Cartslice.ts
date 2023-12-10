"use client";
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cart: [],
  totalPrice: 0,
  totalQuantity: 0,
};
const cartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    add(state: any, action: any) {
      let duplicateCheck = state.cart.findIndex(
        (item: any) => item.id === action.payload.id
      );
      if (duplicateCheck) {
        state.cart[duplicateCheck]++;
      } else {
        state.cart.push(action.payload);
      }
    },
    remove(state, action): any {
      console.log("action:", action);
      console.log("state:", state);
      return state.cart.filter((item: any) => item.id !== action.payload);
    },
  },
});
export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
