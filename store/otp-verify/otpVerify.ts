import { createSlice } from '@reduxjs/toolkit';
// import { Cart } from 'lib/ecwid/types';

const initialState = {
  otp:''
};

export const otpVerifySlice = createSlice({
  name: 'otp',
  initialState,
  reducers: {
    sendMobileNumber: (state, action) => {
        //Call backend to generate otp
        //Insert call backend here
      console.log("MobileNumber->",action.payload)
      state.otp = "123456"
    },
  }
});

export const { sendMobileNumber,} = otpVerifySlice.actions;
export const otpReducer = otpVerifySlice.reducer;
