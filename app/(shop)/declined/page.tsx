'use client';

export default function Declined() {
  return (
    <div className="flex min-h-96 items-center justify-center text-white">
      <div className="flex flex-col items-center justify-center">
        <h1 className="mb-6 text-xl" style={{ fontSize: 60 }}>
          Card Declined.
        </h1>
        <div className="relative mt-10 h-32 w-32">
          <img
            src="/assets/images/declined.png"
            alt="Declined"
            className="object-contain" // Use object-contain to ensure the whole image is shown
          />
        </div>
      </div>
    </div>
  );
}
