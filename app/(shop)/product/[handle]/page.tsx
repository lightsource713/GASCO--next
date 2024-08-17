import { Gallery } from 'components/product/gallery';
import ProductDescription from 'components/product/product-description';
import { Image } from 'lib/ecwid/types';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { products } from '../../../../db/products';

interface Params {
  handle: string;
}

export const runtime = 'edge';

// Function to generate metadata
export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const product = products.find((item: any) => item.handle === params.handle);

  if (!product) return notFound();

  const { url, width, height, altText: alt } = product.featuredImage || {};
  const indexable = !product.tags.includes('HIDDEN_PRODUCT_TAG');

  return {
    title: product.seo?.title || product.title,
    description: product.seo?.description || product.description,
    robots: {
      index: indexable,
      follow: indexable,
      googleBot: {
        index: indexable,
        follow: indexable
      }
    },
    openGraph: url
      ? {
          images: [
            {
              url,
              width,
              height,
              alt
            }
          ]
        }
      : null
  };
}

// The main page component
export default async function ProductPage({ params }: { params: Params }) {
  const product = products.find((item: any) => item.handle === params.handle);

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
      <div className="mx-auto max-w-screen-2xl px-4">
        <div className="flex flex-col rounded-lg border border-neutral-200 bg-white p-8 md:p-12 lg:flex-row lg:gap-8 dark:border-neutral-800 dark:bg-black">
          <div className="h-full w-full basis-full lg:basis-4/6">
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
