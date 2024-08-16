import { AddToCart } from 'components/cart/add-to-cart';
import Prose from 'components/prose';
import { Product } from 'lib/ecwid/types';
import { VariantPrice, VariantSelector } from './variant-selector';

export default function ProductDescription({ product }: { product: Product }) {
  return (
    <>
      <div className="mb-6 flex flex-col border-b pb-6 dark:border-neutral-700">
        <h3 className="font-small mb-2 text-3xl">{product.title}</h3>
        <div className="mr-auto w-auto rounded-full bg-blue-600 p-2 text-sm text-white">
          <VariantPrice
            options={product.options}
            variants={product.variants}
            amount={product.priceRange.minVariantPrice.amount}
            currencyCode={product.priceRange.minVariantPrice.currencyCode}
          />
        </div>
      </div>
      <VariantSelector options={product.options} variants={product.variants} />

      {product.description ? (
        <Prose
          className="mb-6 text-xl leading-tight dark:text-white/[60%]"
          html={product.description}
        />
      ) : null}

      <AddToCart variants={product.variants} availableForSale={product.availableForSale} />
    </>
  );
}
