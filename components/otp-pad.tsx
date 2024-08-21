import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useAppSelector } from '../store/store';
import ProductListModal from './cart-product-list-modal';
import Modal from './cylinder-dist-modal';

type ProductListType= {
  id:number,
  name:string,
  image:string,
  count:number,
  price:number
}

const OTPpad = () => {
  const [number, setNumber] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [showSecondModal, setShowSecondModal] = useState(false);
  const [productList,setProductList] = useState<ProductListType[]>([])
  const otp = useAppSelector((state) => state.otp.otp);
  const storeCart = useAppSelector((state) => state.cart.productsInCart);
  const router = useRouter();

  useEffect(()=>{
    const tempProducts:ProductListType[] = []
    storeCart.lines.map((item,index)=>{
      const cartItem= {
        id:index,
        name:item.merchandise.product.title,
        image:item.merchandise.product.featuredImage.url,
        count:item.quantity,
        price:Number(item.cost.totalAmount.amount)
      }
      tempProducts.push(cartItem)
    })
    setProductList(tempProducts)
  },[storeCart])
 
  const handleButtonClick = (value: string) => {
    setNumber((prev) => prev + value);
  };

  const handleSubmit = () => {

    if(number == otp){
      console.log("i'm correct")
      setShowModal(true);
    }else{
      alert("Incorrect Code!");
      router.push('/checkout')
    }
  };

  const handleClear = () => {
    setNumber('');
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleConfirm = () => {
    // Dummy function to confirm the action
    setShowModal(false);
    setShowSecondModal(true)
  };

  const handleCloseSecondModal = () => {
    setShowSecondModal(false);
  };


  return (
    <div className="mt-10 flex flex-col items-center w-200">
      <input
        type="text"
        value={number}
        readOnly
        placeholder="Please enter OTP"
        className="mb-3 w-150 border-b-2 p-2 text-center text-black"
      />
      
      <div className="mb-3 grid grid-cols-3 gap-2">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, '*', 0, '#'].map((item) => (
          <button
            key={item}
            onClick={() => handleButtonClick(item.toString())}
            className="h-16 w-16 rounded-full bg-gray-300 text-2xl shadow-md"
          >
            {item}
          </button>
        ))}
      </div>
      <div className="flex flex-col items-center space-y-3">
        <button
          onClick={handleSubmit}
          className="rounded-md bg-blue-500 px-6 py-2 text-white shadow-md"
        >
          Submit
        </button>
        <button
          onClick={handleClear}
          className="rounded-md bg-red-500 px-6 py-2 text-white shadow-md"
        >
          Clear
        </button>
      </div>
      <Modal show={showModal} onClose={handleCloseModal} onConfirm={handleConfirm} />
      <ProductListModal show={showSecondModal} onClose={handleCloseSecondModal} products={productList} />
    </div>
  );
};

export default OTPpad;
