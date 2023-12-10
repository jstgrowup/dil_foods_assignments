import { createSlice } from "@reduxjs/toolkit";
export const Products = createSlice({
  name: "Products",
  initialState: {
    data: [],
    loading: false,
    error: false,
  },
  reducers: {
    loadingProducts(state, action) {
      return {
        ...state,
        loading: true,
        error: false,
      };
    },
    errorProducts(state, action) {
      return {
        ...state,
        loading: false,
        error: true,
      };
    },
    
  },
});
export const { loadingProducts, errorProducts } = Products.actions;
