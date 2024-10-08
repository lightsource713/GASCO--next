import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { cartReducer } from './cart/cartSlice';
import { otpReducer } from './otp-verify/otpVerify';
import { paymentReducer } from './payment/payment';

export const store = configureStore({
  reducer: { cart: cartReducer,otp:otpReducer,payment:paymentReducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
