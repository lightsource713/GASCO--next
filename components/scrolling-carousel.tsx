'use client';
import { products } from "../db/products";
const ScrollingCarousel = () => {
  return (
    <div className="overflow-x-auto">
      <div className="scrolling-wrapper flex space-x-4 py-4">
        {products.concat(products).map((product, index) => {
          return (
            <div
              key={product.handle + index}
              className="flex-shrink-0 bg-black"
              style={{ width: '470px', height: '270px' }}
            >
              <img
                src={product.featuredImage.url}
                alt={`Cylinder ${index + 1}`}
                className="w-full h-full object-contain bg-black" // Use object-contain to ensure the whole image is shown
              />
              {/* <div className="absolute bottom-2 left-2 flex items-center justify-center bg-white bg-opacity-75 p-1 rounded-md">
                <span>{product.title}</span>
              </div> */}
            </div>
          );
        })}
      </div>
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .scrolling-wrapper {
          animation: scroll 50s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default ScrollingCarousel;