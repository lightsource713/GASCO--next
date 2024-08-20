"use client"
import { useRouter } from 'next/navigation';
export default function ThankYou() {
  const router = useRouter();
  const sendReceiptViaWhatsapp=()=>{
    router.push('/whatsapp')
  }
  const replaceCylinder= ()=>{
    console.log("replace cylinder")
  }
  return (
    <div className="flex items-center justify-center  min-h-96 text-white">
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="text-6xl font-bold bg-green-300 text-center p-4 rounded-lg drop-shadow-lg shadow-black">
          Thank You!
        </h1>
        <div className="flex justify-between mt-3" >
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded mr-4"
            onClick={sendReceiptViaWhatsapp}
          >
            Full Cylinder
          </button>
          <button
            className="px-4 py-2 bg-red-500 text-white rounded ml-4"
            onClick={replaceCylinder}
          >
            Replace Cylinder
          </button>
        </div>
      </div>
    </div>
  );
}