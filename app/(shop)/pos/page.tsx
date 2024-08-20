"use client"
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { confirmPayment } from 'store/payment/payment';
import { useAppDispatch, useAppSelector } from '../../../store/store';

export default function POSCardSwipe() {
  const storePayment = useAppSelector((state) => state.payment);
  const router = useRouter();
  const dispatch = useAppDispatch();
  console.log(storePayment)
    useEffect(()=>{
        dispatch(confirmPayment("TestPayment"))
    },[dispatch])
    useEffect(()=>{
        if(storePayment.isConfirmed){
            setTimeout(() => {
                router.push('/thank')
              }, 10000)
        }else{
            setTimeout(() => {
                router.push('/declined')
              }, 10000)
        }
    },[storePayment.isConfirmed])

  return (
    <div className="flex items-center justify-center min-h-96 text-white">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-xl mb-6" style={{fontSize:40}}>
          Please follow instruction on the POS card swipe.
        </h1>
        <div className="w-32 h-32 relative">
          <Image 
            src="http://data.its.sa:3000/assets/images/pos.png" 
            alt="POS Card Swipe" 
            layout="fill" 
            objectFit="contain" 
          />
        </div>
      </div>
    </div>
  );
}