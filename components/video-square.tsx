'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useRef } from 'react';

const FullScreenVideo = () => {
  const videoRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const handleTap = () => {
      router.push('/search');
    };

    window.addEventListener('click', handleTap);

    return () => {
      window.removeEventListener('click', handleTap);
    };
  }, [router]);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden flex items-center justify-center bg-black">
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        src={'/assets/video/2.mp4'}
        autoPlay
        loop
        muted
      />
    </div>
  );
};

export default FullScreenVideo;
