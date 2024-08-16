import { createSlice } from '@reduxjs/toolkit';
import { ProductVariant } from 'lib/ecwid/types';

const initialState = {
  productsInCart: [] as ProductVariant[]
};

export const cartClice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProductToCart: (state, action) => {
      state.productsInCart.push(action.payload);
    }
  }
});

export const { addProductToCart } = cartClice.actions;
export const cartReducer = cartClice.reducer;
