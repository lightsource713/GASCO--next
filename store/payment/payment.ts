import { createSlice } from '@reduxjs/toolkit';
// import { Cart } from 'lib/ecwid/types';

const initialState = {
  isConfirmed:false
};

export const paymentSlice = createSlice({
  name: 'payment',
  initialState,
  reducers: {
    confirmPayment: (state, action) => {
        //When POS card swipe confirm payment
        //If confirm payment "isConfirmed" set true
        state.isConfirmed = true
    },
  }
});

export const { confirmPayment} = paymentSlice.actions;
export const paymentReducer = paymentSlice.reducer;
