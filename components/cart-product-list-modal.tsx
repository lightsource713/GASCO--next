import React from 'react';
// import { confirmPayment } from 'store/payment/payment';
import { useRouter } from 'next/navigation';
import { useAppDispatch } from '../store/store';

interface Product {
  id: number;
  name: string;
  image: string;
  count: number;
  price: number;
}

interface ProductListModalProps {
  show: boolean;
  onClose: () => void;
  products: Product[];
}

const ProductListModal: React.FC<ProductListModalProps> = ({ show, onClose, products }) => {
  if (!show) return null;
const dispatch = useAppDispatch();
const router = useRouter();

//   const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
//     const target = e.target as HTMLElement;
//     if (target.id === "modal") {
//       onClose();
//     }
//   };

  const getTotalInfo = ()=>{
    let totalCount =0
    let totalPrice =0
    products.map(item=>{
        totalCount+=item.count
        totalPrice+=item.price
    })
    return (
        <div>
            <p>{`Total Quantity:${totalCount}`}</p>
            <p>{`Total Price:${totalPrice}SAR`}</p>
        </div>
    )
  }

  const handlePayment = ()=>{
    router.push('/pos')
    // dispatch(confirmPayment(products))
  }


  return (
    <div
      id="modal"
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
    >
      <div className="p-8 rounded-md relative w-96 text-center bg-slate-400">
        <h2 className="text-2xl mb-4">Product List</h2>
        <div className="overflow-y-auto h-64">
          {products.map(product => (
            <div key={product.id} className="flex items-center justify-between mb-4">
              <img src={product.image} alt={product.name} className="w-16 h-16 object-cover"/>
              <div className="flex-1 ml-4">
                <h3 className="text-lg">{product.name}</h3>
                <p>Quantity: {product.count}</p>
                <p>Price: SAR {product.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
        <div className='flex justify-center mt-3'>
           {getTotalInfo()}
        </div>
        <div className="flex justify-evenly mt-3">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded"
            onClick={handlePayment}
          >
            Yes
          </button>
          <button
            className="px-4 py-2 bg-red-500 text-white rounded"
            onClick={onClose}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductListModal