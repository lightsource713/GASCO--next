'use client';

import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import LoadingDots from 'components/loading-dots';
import type { CartItem } from 'lib/ecwid/types';
import { useFormStatus } from 'react-dom';
import { editQuantity } from 'store/cart/cartSlice';
import { useAppDispatch } from '../../store/store';

type sendingDataType = {
  lineId:string,
  variantId:string,
  quantity:number
}

export function EditItemQuantityButton({ item, type }: { item: CartItem; type: 'plus' | 'minus' }) {
  const { pending } = useFormStatus();
  const dispatch = useAppDispatch();
  
  const sendingData = {
    lineId: item.id,
    variantId: item.merchandise.id,
    quantity: type === 'plus' ? item.quantity + 1 : item.quantity - 1
  };
  const handleEditQuantity = (type:string,sendingData:sendingDataType)=>{
    const payload= {
      type,
      sendingData
    }
    dispatch(editQuantity(payload))
  }

  return (
    <>
      <button
      aria-label={type === 'plus' ? 'Increase item quantity' : 'Reduce item quantity'}
      aria-disabled={pending}
      className={clsx(
        'ease flex h-full min-w-[36px] max-w-[36px] flex-none items-center justify-center rounded-full px-2 transition-all duration-200 hover:border-neutral-800 hover:opacity-80',
        {
          'cursor-not-allowed': pending,
          'ml-auto': type === 'minus'
        }
      )}
    >
      {pending ? (
        <LoadingDots className="bg-black dark:bg-white" />
      ) : type === 'plus' ? (
        <PlusIcon className="h-4 w-4 dark:text-neutral-500" onClick={()=>handleEditQuantity("plus",sendingData)}/>
      ) : (
        <MinusIcon className="h-4 w-4 dark:text-neutral-500" onClick={()=>handleEditQuantity("minus",sendingData)}/>
      )}
    </button>
    </>
  );
}
