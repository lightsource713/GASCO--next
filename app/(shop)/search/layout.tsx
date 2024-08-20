import ScrollingCarousel from 'components/scrolling-carousel';
import { Suspense } from 'react';
import Search from './page';

export default function SearchLayout() {
  return (
    <Suspense>
      <div className="mx-auto flex max-w-screen-2xl flex-col gap-8 px-4 pb-4 text-black md:flex-row dark:text-white">
        <div className="order-last min-h-screen w-full md:order-none">
          <Search />
          <ScrollingCarousel />
        </div>
      </div>
    </Suspense>
  );
}
