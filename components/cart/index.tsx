'use client';
import { useAppSelector } from 'store/store';
import CartModal from './modal';

export default function Cart() {
  const cart = useAppSelector((state) => state.cart.productsInCart);

  return <CartModal cart={cart} />;
}
