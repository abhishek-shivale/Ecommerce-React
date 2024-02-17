import { createSlice } from "@reduxjs/toolkit";

export const ProductDetails = createSlice({
    name : 'productDetails',
    initialState:{
        isCardOpen: false
    },
    reducers:{
        OpenCard:(state)=>{
            state.isCardOpen = true
        },
        CloseCard:(state)=>{
            state.isCardOpen = false
        }
    }
})


export const {OpenCard, CloseCard} = ProductDetails.actions
export default ProductDetails.reducer