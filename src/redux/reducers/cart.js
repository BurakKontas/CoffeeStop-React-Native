import { createSlice } from '@reduxjs/toolkit';
import { getCart } from './../../Functions/Cart';

export const cart = createSlice({
  name: 'cart',
  initialState: {
    cart: null,
    quantity:0,
    finalPrice:0,
  },
  reducers: {
    updateCartState: (state, action) => {
      state.cart = action.payload;
    },
    updateCartQuantity: (state,action) => {
      state.quantity = action.payload;
    },
    updateCartPrice:(state,action) => {
      state.finalPrice = action.payload;
    },
    increaseCartQuantity: (state,action) => {
      state.quantity = action.payload;
    },
    resetCartQuantity:(state) => {
      state.quantity = 0;
    }
  },
})

// Action creators are generated for each case reducer function
export const { updateCartState, updateCartQuantity, updateCartPrice, increaseCartQuantity, resetCartQuantity } = cart.actions

export default cart.reducer