'use client';

import { XMarkIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import type { CartItem } from 'lib/ecwid/types';
import { deleteCartItem } from 'store/cart/cartSlice';
import { useAppDispatch } from '../../store/store';

export function DeleteItemButton({ item }: { item: CartItem }) {
  const dispatch = useAppDispatch();

  return (
    <>
    <button
      type="submit"
      onClick={() => {
        dispatch(deleteCartItem(item))
      }}
      aria-label="Remove cart item"
      className={clsx(
        'ease flex h-[17px] w-[17px] items-center justify-center rounded-full bg-neutral-500 transition-all duration-200',
      )}
    >
        <XMarkIcon className="hover:text-accent-3 mx-[1px] h-4 w-4 text-white dark:text-black" />
    </button>
    </>
  );
}
