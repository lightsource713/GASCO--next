import { createSlice } from '@reduxjs/toolkit';
import { Cart } from 'lib/ecwid/types';

const initialState = {
  productsInCart: {} as Cart
};

export const cartClice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProductToCart: (state, action) => {
      let tempCartData = { ...state.productsInCart };
      if (Object.keys(tempCartData).length == 0) {
        state.productsInCart = action.payload;
      } else {
        const newCartItme = { ...action.payload.lines[0] };
        const tempLines = [...state.productsInCart.lines];
        tempLines.push(newCartItme);
        state.productsInCart = {
          ...state.productsInCart,
          lines: tempLines,
          totalQuantity: state.productsInCart.totalQuantity + 1
        };
        // state.productsInCart = tempCartData
      }
      // state.productsInCart.push(action.payload);
    }
  }
});

export const { addProductToCart } = cartClice.actions;
export const cartReducer = cartClice.reducer;
