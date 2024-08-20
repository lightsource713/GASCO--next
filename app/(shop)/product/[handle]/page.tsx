"use client"
import { XMarkIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { Gallery } from 'components/product/gallery';
import ProductDescription from 'components/product/product-description';
import { Image } from 'lib/ecwid/types';
import { notFound, useRouter } from 'next/navigation';
import { products } from '../../../../db/products';

interface Params {
  handle: string;
}

export const runtime = 'edge';

// The main page component
export default async function ProductPage({ params }: { params: Params }) {
  const product = products.find((item: any) => item.handle === params.handle);
  const router = useRouter();
  if (!product) return notFound();

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.title,
    description: product.description,
    image: product.featuredImage.url,
    offers: {
      '@type': 'AggregateOffer',
      availability: product.availableForSale
        ? 'https://schema.org/InStock'
        : 'https://schema.org/OutOfStock',
      priceCurrency: product.priceRange.minVariantPrice.currencyCode,
      highPrice: product.priceRange.maxVariantPrice.amount,
      lowPrice: product.priceRange.minVariantPrice.amount
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productJsonLd)
        }}
      />
      <div className="relative mx-auto max-w-screen-2xl px-4">
        <div className="flex flex-col rounded-lg border border-neutral-200 bg-white p-8 md:p-12 lg:flex-row lg:gap-8 dark:border-neutral-800 dark:bg-black">
          <div className="h-full w-full basis-full lg:basis-4/6">
            <button className="absolute top-4 right-10 bg-transparent border-none" onClick={()=>{router.push('/search')}}>
            <div className="relative flex h-10 w-10 items-center justify-center rounded-md border border-neutral-200 text-black transition-colors dark:border-neutral-700 dark:text-white ">
              <XMarkIcon className={clsx('h-4 transition-all ease-in-out hover:scale-110 ')} />
              </div>
            </button>
            <Gallery
              images={product.images.map((image: Image) => ({
                src: productJsonLd.image,
                altText: image.altText || ''
              }))}
            />
            {/* Render product images here */}
          </div>

          <div className="basis-full lg:basis-2/6">
            <div className="basis-full lg:basis-2/6">
              <ProductDescription product={product} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}