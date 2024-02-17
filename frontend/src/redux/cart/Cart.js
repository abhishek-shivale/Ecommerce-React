import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
    name : 'cartslice',
    initialState:{
        isOpen: false
    },
    reducers:{
        OpenCart:(state)=>{
            state.isOpen = true
        },
        CloseCart:(state)=>{
            state.isOpen = false
        }
    }
})


export const {OpenCart, CloseCart} = CartSlice.actions
export default CartSlice.reducer