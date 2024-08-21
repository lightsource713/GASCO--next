export default function LogoIcon() {
  return (
    <div className="relative h-36 w-36">
      <img
        src={'/assets/images/estwan-logo.png'}
        alt="logo image"
        className="object-contain" // Use object-contain to ensure the whole image is shown
      />
    </div>
  );
}
