import { createSlice } from "@reduxjs/toolkit";

export const ProductDetails = createSlice({
  name: "productDetails",
  initialState: {
    isCardOpen: false,
    ProductDetailsSlice: {},
  },
  reducers: {
    OpenCard: (state) => {
      state.isCardOpen = true;
    },
    CloseCard: (state) => {
      state.isCardOpen = false;
    },
    setProductDetails(state, action) {
      state.productDetails = action.payload;
    },
    clearProductDetails(state) {
     state.productDetails = {};
    },
  },
});

export const { OpenCard, CloseCard } = ProductDetails.actions;
export default ProductDetails.reducer;
