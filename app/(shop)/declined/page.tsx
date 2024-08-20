"use client"

export default function Declined() {

  return (
    <div className="flex items-center justify-center min-h-96 text-white">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-xl mb-6" style={{fontSize:60}}>
          Card Declined.
        </h1>
        <div className="w-32 h-32 relative mt-10">
          {/* <Image 
            src="http://data.its.sa:3000/assets/images/declined.png" 
            alt="Declined" 
            fill
            className="object-contain"
            priority
          /> */}
                <img
                  src="http://data.its.sa:3000/assets/images/declined.png" 
                  alt="Declined" 
                  className="object-contain" // Use object-contain to ensure the whole image is shown
                />
        </div>
      </div>
    </div>
  );
}