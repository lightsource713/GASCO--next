import Image from 'next/image';

export default function LogoIcon() {
  return (
    <Image
      alt="logo image"
      src="http://data.its.sa:3000/assets/images/estwan-logo.png"
      width={140}
      height={140}
    />
  );
}
