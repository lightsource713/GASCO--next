import { createSlice } from '@reduxjs/toolkit';

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
