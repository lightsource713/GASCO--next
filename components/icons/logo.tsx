import Image from 'next/image';

export default function LogoIcon() {
  return (
    <div className="relative w-36 h-36">
      <Image
        alt="logo image"
        src="http://data.its.sa:3000/assets/images/estwan-logo.png"
        fill
        sizes="(max-width: 640px) 100vw, 36px" // Adjust sizes based on your design
        className="object-contain"
        priority
      />
    </div>
  );
}
