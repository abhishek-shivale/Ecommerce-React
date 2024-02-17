import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "../redux/cart/Cart";
import ProductdetailsReducer from "../redux/cart/Productdetails";
  const Store = configureStore({
    reducer:{
        cart:CartReducer,
        ProductdetailsReducer,
    },

 })
 export default Store
