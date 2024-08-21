import clsx from 'clsx';
import Price from 'components/price';
import { Product, ProductOption, ProductVariant } from 'lib/ecwid/types';
import { useSearchParams } from 'next/navigation';

type Combination = {
  id: string;
  availableForSale: boolean;
  [key: string]: string | boolean; // ie. { color: 'Red', size: 'Large', ... }
};

type SelectedOptions = {
  id: string;
  name: string;
  value: string;
};

export function VariantPrice({
  options,
  variants,
  currencyCode,
  selectedOptions
}: {
  options: ProductOption[];
  variants: ProductVariant[];
  currencyCode: string;
  selectedOptions:SelectedOptions[]
}) {
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


  let amount = '0'
  const hasNoOptionsOrJustOneOption =
    !options.length || (options.length === 1 && options[0]?.values.length === 1);
  if (!hasNoOptionsOrJustOneOption) {
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
      amount = `${variant?.price}`;
    }
  }

  return (
    <>
      <Price amount={amount} currencyCode={currencyCode} />
    </>
  );
}

export function VariantSelector({
  options,
  variants,
  product,
  selectedOptions,
  setSelectedOptions
}: {
  options: ProductOption[];
  variants: ProductVariant[];
  product: Product;
  selectedOptions: SelectedOptions[];
  setSelectedOptions: (value: SelectedOptions[]) => void;
}) {
  const searchParams = useSearchParams();

  const hasNoOptionsOrJustOneOption =
    !options.length || (options.length === 1 && options[0]?.values.length === 1);

  if (hasNoOptionsOrJustOneOption) {
    return null;
  }

  const setOptions = (id: string, name: string, value: string) => {
    const optionData = [...selectedOptions];
    if (optionData.length == 0) {
      optionData.push({
        id,
        name,
        value
      });
    } else {
      const flag = optionData.find((item) => {
        return item.name == name;
      });
      if (!flag) {
        optionData.push({
          id,
          name,
          value
        });
      }else{
        const index = optionData.findIndex((item)=>{
          return item.name == name
        })
        optionData[index] = {
          id: `${index+1}`,
          name: name,
          value: value
        }
      }
    }
    setSelectedOptions(optionData);
  };

  const combinations: Combination[] = variants.map((variant) => ({
    id: variant.id,
    availableForSale: variant.availableForSale,
    // Adds key / value pairs for each variant (ie. "color": "Black" and "size": 'M").
    ...variant.selectedOptions.reduce(
      (accumulator, option) => ({ ...accumulator, [option.name.toLowerCase()]: option.value }),
      {}
    )
  }));
  return options.map((option) => (
    <dl className="mb-8" key={option.id}>
      <dt className="mb-4 text-sm uppercase tracking-wide">{option.name}</dt>
      <dd className="flex flex-wrap gap-3">
        {option.values.map((value) => {
          const optionNameLowerCase = option.name.toLowerCase();
          const optionSearchParams = new URLSearchParams(searchParams.toString());
          optionSearchParams.set(optionNameLowerCase, value);
          const filtered = Array.from(optionSearchParams.entries()).filter(([key, value]) =>
            options.find(
              (option) => option.name.toLowerCase() === key && option.values.includes(value)
            )
          );
          const isAvailableForSale = combinations.find((combination) =>
            filtered.every(
              ([key, value]) => combination[key] === value && combination.availableForSale
            )
          );
          const isActive = selectedOptions.find(option=>{
            return option.value == value
          })

          return (
            <button
              key={value}
              aria-disabled={!isAvailableForSale}
              disabled={!isAvailableForSale}
              onClick={() => {
                setOptions(product.id, option.name, value);
              }}
              title={`${option.name} ${value}${!isAvailableForSale ? ' (Out of Stock)' : ''}`}
              className={clsx(
                'flex min-w-[48px] items-center justify-center rounded-full border bg-neutral-100 px-2 py-1 text-sm dark:border-neutral-800 dark:bg-neutral-900 cursor-pointer',
                
                {
                  'cursor-default ring-2 ring-blue-600': isActive,
                  'relative z-10 cursor-not-allowed overflow-hidden bg-neutral-100 text-neutral-500 ring-1 ring-neutral-300 before:absolute before:inset-x-0 before:-z-10 before:h-px before:-rotate-45 before:bg-neutral-300 before:transition-transform dark:bg-neutral-900 dark:text-neutral-400 dark:ring-neutral-700 before:dark:bg-neutral-700':
                    !isAvailableForSale
                }
              )}
            >
              {value}
            </button>
          );
        })}
      </dd>
    </dl>
  ));
}
