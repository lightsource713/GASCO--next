'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { confirmPayment } from 'store/payment/payment';
import { useAppDispatch, useAppSelector } from '../../../store/store';

export default function POSCardSwipe() {
  const storePayment = useAppSelector((state) => state.payment);
  const router = useRouter();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(confirmPayment('TestPayment'));
  }, [dispatch]);
  useEffect(() => {
    if (storePayment.isConfirmed) {
      setTimeout(() => {
        router.push('/thank');
      }, 10000);
    } else {
      setTimeout(() => {
        router.push('/declined');
      }, 10000);
    }
  }, [storePayment.isConfirmed, router]);

  return (
    <div className="flex min-h-96 items-center justify-center text-white">
      <div className="flex flex-col items-center justify-center">
        <h1 className="mb-6 text-xl" style={{ fontSize: 40 }}>
          Please follow instruction on the POS card swipe.
        </h1>
        <div className="relative h-32 w-32">
          <img
            src="/assets/images/pos.png"
            alt="POS Card Swipe"
            className="object-contain" // Use object-contain to ensure the whole image is shown
          />
        </div>
      </div>
    </div>
  );
}
