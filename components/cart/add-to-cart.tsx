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

type OptionType = {
  name:string,
  value:string
}

function SubmitButton({
  availableForSale,
  variants,
  selectedOptions,
  product,
  setSelectedOptions // eslint-disable-line @typescript-eslint/no-unused-vars
}: {
  availableForSale: boolean;
  selectedVariantId: string | undefined;
  variants: ProductVariant[];
  selectedOptions: SelectedOptions[];
  product: Product;
  setSelectedOptions: (value: SelectedOptions[]) => void;
}) {
  const buttonClasses =
    'relative flex w-full items-center justify-center rounded-full bg-blue-600 p-4 tracking-wide text-white';
  const disabledClasses = 'cursor-not-allowed opacity-60 hover:opacity-60';
  const dispatch = useAppDispatch();

  const haveSameElements = (arr1:string[], arr2:string[])=>{
    if (arr1.length !== arr2.length) {
      return false;
  }

  // Sort both arrays
  const sortedArr1 = arr1.slice().sort();
  const sortedArr2 = arr2.slice().sort();

  // Compare the sorted arrays element by element
  for (let i = 0; i < sortedArr1.length; i++) {
      if (sortedArr1[i] !== sortedArr2[i]) {
          return false;
      }
  }

  return true;
  }

  const isOptionSelected = ()=>{
    const combination = selectedOptions.map(option=>{
      return option.value
    })
    const variant = variants.find(item=>{
      const variantComibination = item.selectedOptions.map(option=>{
        return option.value
      })
      return haveSameElements(combination,variantComibination)
    })
     if (variant) {
      return true
    }else return false
  }

  const addProduct = () => {
    const options= product.variants[0]?.selectedOptions as OptionType[]
    setSelectedOptions([
      {
        id:"1",
        name:options[0]?.name?options[0]?.name:'',
        value:options[0]?.value?options[0]?.value:''
      },
      {
        id:"2",
        name:options[1]?.name?options[1]?.name:'',
        value:options[1]?.value?options[1]?.value:''
      }
    ])
    const combination = selectedOptions.map(option=>{
      return option.value
    })
    const variant = variants.find(item=>{
      const variantComibination = item.selectedOptions.map(option=>{
        return option.value
      })
      return haveSameElements(combination,variantComibination)
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
      id: product.id,
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
      </div>
      Add To Cart
    </button>
  );
}

export function AddToCart({
  variants,
  availableForSale,
  selectedOptions,
  product,
  setSelectedOptions // eslint-disable-line @typescript-eslint/no-unused-vars
}: {
  variants: ProductVariant[];
  availableForSale: boolean;
  selectedOptions: SelectedOptions[];
  product: Product;
  setSelectedOptions: (value: SelectedOptions[]) => void;
}) {
  const searchParams = useSearchParams();
  const defaultVariantId = variants.length === 1 ? variants[0]?.id : undefined;
  const variant = variants.find((variant: ProductVariant) =>
    variant.selectedOptions.every(
      (option) => option.value === searchParams.get(option.name.toLowerCase())
    )
  );
  const selectedVariantId = variant?.id || defaultVariantId;

  return (
    <>
      <SubmitButton
        availableForSale={availableForSale}
        selectedVariantId={selectedVariantId}
        variants={variants}
        selectedOptions={selectedOptions}
        product={product}
        setSelectedOptions={setSelectedOptions}
      />
    </>
  );
}
