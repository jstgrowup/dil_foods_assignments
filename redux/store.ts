import { configureStore } from "@reduxjs/toolkit";
import { Products } from "./Productslice";
import CartReducer from "./Cartslice"
export const store = configureStore({
  reducer: {
    Products: Products.reducer,
    Cart:CartReducer
  },
});
