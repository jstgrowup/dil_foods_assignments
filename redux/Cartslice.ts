"use client";
import { createSlice } from "@reduxjs/toolkit";
import productsData from "../data.json";
interface State {}
const initialState = {
  cart: [],
  totalPrice: 0,
  totalQuantity: 0,
  data: productsData,
};
const cartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    add(state: any, action: any) {
      let duplicateIndex = state.cart.findIndex(
        (item: any) => item.id === action.payload.id
      );
      console.log("duplicateIndex:", duplicateIndex);
      if (duplicateIndex >= 0) {
        state.cart[duplicateIndex].quantity++;
      } else {
        state.cart.push(action.payload);
      }
    },
    remove(state, action): any {
      state.cart = state.cart.filter((item: any) => item.id !== action.payload);
    },
    cartTotal(state, action) {
      const { totalQuantity, totalPrice } = state?.cart?.reduce(
        (carttotal, cartItem: any) => {
          console.log("cartItem:", cartItem);
          const { price, quantity } = cartItem;
          const total = price * quantity;
          carttotal.totalPrice = carttotal.totalPrice + total;
          carttotal.totalQuantity = carttotal.totalQuantity + quantity;
          console.log("carttotal:", carttotal);
          return carttotal;
        },
        {
          totalPrice: 0,
          totalQuantity: 0,
        }
      );
      state.totalPrice = parseInt(totalPrice.toFixed(2));
      state.totalQuantity = totalQuantity;
    },
    increaseQuantity: (state: any, action) => {
      state.cart = state.cart.map((item: any) => {
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    },
    decreaseQuantity: (state: any, action) => {
      state.cart = state.cart.map((item: any) => {
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
    },
  },
});
export const { add, remove, cartTotal, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
