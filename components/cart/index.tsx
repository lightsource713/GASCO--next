'use client';
import { useAppSelector } from 'store/store';
import CartModal from './modal';

export default function Cart() {
  const cart = useAppSelector((state) => state.cart.productsInCart);
  // const [cart, setCart] = useState<Cart | null>(null);
  // console.log(products)

  // useEffect(()=>{
  //   let cartData =
  // },[products])

  return <CartModal cart={cart} />;
}
