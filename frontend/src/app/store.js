import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "../redux/cart/Cart";
import { setupListeners } from "@reduxjs/toolkit/query";
  const Store = configureStore({
    reducer:{
        cart:CartReducer
    },

 })
 export default Store
 setupListeners(Store.dispatch)