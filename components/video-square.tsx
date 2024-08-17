'use client';

import { useRouter } from 'next/navigation';

const VideoSquare = () => {
  const router = useRouter();

  const goSearchPage = () => {
    router.push('/search');
  };

  return (
    <div style={{ width: '100%', height: 500, marginTop: 20 }} className="text-center">
      <video preload="auto" controls style={{ width: '100%', height: '100%' }}>
        <source src="/assets/video/2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <button
        className="relative mt-3 w-60 items-center rounded-full bg-blue-600 p-4 tracking-wide text-white hover:opacity-90"
        onClick={() => goSearchPage()}
      >
        Start
      </button>
    </div>
  );
};

export default VideoSquare;
