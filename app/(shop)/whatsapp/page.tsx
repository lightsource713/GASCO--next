"use client"
// import Image from 'next/image';

export default function Whatsapp() {

  return (
    <div className="flex items-center justify-center min-h-96 text-white">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-xl mb-6" style={{fontSize:40}}>
          We sent your receipt in your WhatsApp
        </h1>
        <div className="w-32 h-32 relative mt-8">
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