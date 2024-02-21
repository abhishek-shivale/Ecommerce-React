import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "../redux/cart/Cart";
import ProductdetailsReducer from "../redux/products/Productdetails.js";
import authReducer from "../redux/auth/auth.js";
  const Store = configureStore({
    reducer:{
        cart:CartReducer,
        ProductdetailsReducer,
        auth: authReducer,
    },

 })
 export default Store
