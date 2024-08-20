import { Carousel } from 'components/carousel';
import OutOfStock from 'components/out-of-stock';
import VideoSquare from 'components/video-square';
import { Suspense } from 'react';
import { products } from '../../db/products';

export const runtime = 'edge';

export const metadata = {
  description:
    'High-performance ecommerce store built with Next.js, Vercel, and Ecwid by Lightspeed.',
  openGraph: {
    type: 'website'
  }
};

export default async function HomePage() {
  return (
    <>
      <Suspense>
        {products.length !== 0 ? <VideoSquare /> : <OutOfStock />}
        <Carousel />
      </Suspense>
    </>
  );
}
