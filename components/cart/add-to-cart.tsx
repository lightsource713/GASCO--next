'use client';

import { PlusIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { Product, ProductVariant } from 'lib/ecwid/types';
import { useSearchParams } from 'next/navigation';
import { addProductToCart } from 'store/cart/cartSlice';
import { useAppDispatch } from '../../store/store';

type SelectedOptions = {
  id: string;
  name: string;
  value: string;
};

function SubmitButton({
  availableForSale,
  variants,
  selectedOptions,
  product
}: {
  availableForSale: boolean;
  selectedVariantId: string | undefined;
  variants: ProductVariant[];
  selectedOptions: SelectedOptions[];
  product: Product;
}) {
  // const cart = useAppSelector((state) => state.cart.productsInCart);
  // const { pending } = useFormStatus();
  const buttonClasses =
    'relative flex w-full items-center justify-center rounded-full bg-blue-600 p-4 tracking-wide text-white';
  const disabledClasses = 'cursor-not-allowed opacity-60 hover:opacity-60';
  const dispatch = useAppDispatch();

  const isOptionSelected = ()=>{
    const variant = variants.find(item=>{
      const combination = [{name:selectedOptions[0]?.name,value:selectedOptions[0]?.value},{name:selectedOptions[1]?.name,value:selectedOptions[1]?.value}]
      return JSON.stringify(item.selectedOptions) === JSON.stringify(combination)
    })
    if (variant){
      return true
    }else return false
  }

  const addProduct = () => {
    const variant = variants.find(item=>{
      const combination = [{name:selectedOptions[0]?.name,value:selectedOptions[0]?.value},{name:selectedOptions[1]?.name,value:selectedOptions[1]?.value}]
      return JSON.stringify(item.selectedOptions) === JSON.stringify(combination)
    })
    // if (pending) e.preventDefault();
    const optionData = selectedOptions.map((option) => {
      return {
        name: option.name,
        value: option.value
      };
    });
    const merchandise = {
      id: 'MerchandiesId' + product.id,
      title: 'Merchandise Title1',
      selectedOptions: optionData,
      product: product
    };
    const cartItem = {
      id: product.id+optionData[0]?.value+optionData[1]?.value,
      quantity: 1,
      cost: {
        totalAmount: {
          amount: variant?.price,
        }
      },
      merchandise: merchandise,
      product: product
    };
    const cartData = {
      // id:"CartId"+product.id,
      cost: {
        totalAmount: {
          amount: variant?.price,
          currentCode: 'sar'
        }
      },
      totalQuantity: 1,
      lines: [cartItem]
    };
    dispatch(addProductToCart(cartData));
  };

  if (!availableForSale) {
    return (
      <button aria-disabled className={clsx(buttonClasses, disabledClasses)}>
        Out Of Stock
      </button>
    );
  }

  if (!isOptionSelected()) {
    return (
      <button
        aria-label="Please select an option"
        aria-disabled
        disabled = {true}
        className={clsx(buttonClasses,disabledClasses)}
        onClick={() => {
          addProduct();
        }}
      >
        <div className="absolute left-0 ml-4">
          <PlusIcon className="h-5" />
        </div>
        Add To Cart
      </button>
    );
  }

  return (
    <button
      onClick={() => {
        addProduct();
      }}
      aria-label="Add to cart"
      // aria-disabled={pending}
      className={clsx(buttonClasses, {
        'hover:opacity-90': true
        // disabledClasses: pending
      })}
    >
      <div className="absolute left-0 ml-4">
        <PlusIcon className="h-5" />
        {/* {pending ? <LoadingDots className="mb-3 bg-white" /> : <PlusIcon className="h-5" />} */}
      </div>
      Add To Cart
    </button>
  );
}

export function AddToCart({
  variants,
  availableForSale,
  selectedOptions,
  product
}: {
  variants: ProductVariant[];
  availableForSale: boolean;
  selectedOptions: SelectedOptions[];
  product: Product;
}) {
  const searchParams = useSearchParams();
  const defaultVariantId = variants.length === 1 ? variants[0]?.id : undefined;
  const variant = variants.find((variant: ProductVariant) =>
    variant.selectedOptions.every(
      (option) => option.value === searchParams.get(option.name.toLowerCase())
    )
  );
  const selectedVariantId = variant?.id || defaultVariantId;
  // const actionWithVariant = formAction.bind(null, selectedVariantId);

  return (
    // <form action={actionWithVariant}>
    <>
      <SubmitButton
        availableForSale={availableForSale}
        selectedVariantId={selectedVariantId}
        variants={variants}
        selectedOptions={selectedOptions}
        product={product}
      />
    </>
    // </form>
  );
}
