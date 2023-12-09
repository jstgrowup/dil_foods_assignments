import { configureStore } from "@reduxjs/toolkit";
import { Products } from "./product";
export const store = configureStore({
  reducer: {
    Products: Products.reducer
  },
});
