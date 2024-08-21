import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  otp:'',
  otpVerified:false
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
    setOtpVerifiedTrue:(state)=>{
      state.otpVerified = true
    }
  }
});

export const { sendMobileNumber,setOtpVerifiedTrue} = otpVerifySlice.actions;
export const otpReducer = otpVerifySlice.reducer;
