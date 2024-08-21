// import Image from 'next/image';

export default function LogoIcon() {
  return (
    <div className="relative h-36 w-36">
      {/* <Image
        alt="logo image"
        src="/assets/images/estwan-logo.png"
        fill
        sizes="(max-width: 640px) 100vw, 36px" // Adjust sizes based on your design
        className="object-contain"
        priority
      /> */}
      <img
        src={'assets/images/estwan-logo.png'}
        alt="logo image"
        className="object-contain" // Use object-contain to ensure the whole image is shown
      />
    </div>
  );
}
