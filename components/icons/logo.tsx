import Image from 'next/image';

export default function LogoIcon() {
  return (
    <Image
      alt="logo image"
      src="http://127.0.0.1:3000/assets/images/estwan-logo.png"
      width={140}
      height={140}
    />
  );
}
