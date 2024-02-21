import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "cartslice",
  initialState: {
    isOpen: false,
    cartProduct: [],
  },
  reducers: {
    OpenCart: (state) => {
      state.isOpen = true;
    },
    CloseCart: (state) => {
      state.isOpen = false;
    },
    addProducttoCart: (state, action) => {
      state.cartProduct.push(action.payload);
    },
    removeProductFromCart: (state, action) => {
      state.cartProduct = state.cartProduct.filter((item) => {item.id !== action.payload.id;});
    },
  },
});

export const { OpenCart, CloseCart, addProducttoCart, removeProductFromCart } =
  CartSlice.actions;
export default CartSlice.reducer;
