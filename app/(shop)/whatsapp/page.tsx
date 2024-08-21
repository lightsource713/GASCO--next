'use client';
// import Image from 'next/image';

export default function Whatsapp() {
  return (
    <div className="flex min-h-96 items-center justify-center text-white">
      <div className="flex flex-col items-center justify-center">
        <h1 className="mb-6 text-xl" style={{ fontSize: 40 }}>
          We sent your receipt in your WhatsApp
        </h1>
        <div className="relative mt-8 h-32 w-32">
          {/* <Image 
            src="/assets/images/whatsapp.png" 
            alt="whatsapp" 
            fill
            className="object-contain"
            sizes="(max-width: 640px) 100vw, 36px"
            priority
          /> */}
          <img
            src="/assets/images/whatsapp.png"
            alt="whatsapp"
            className="object-contain" // Use object-contain to ensure the whole image is shown
          />
        </div>
      </div>
    </div>
  );
}
