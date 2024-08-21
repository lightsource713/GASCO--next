import { createSlice } from '@reduxjs/toolkit';

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
      state.otp = "123456"
    },
  }
});

export const { sendMobileNumber,} = otpVerifySlice.actions;
export const otpReducer = otpVerifySlice.reducer;
