import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { formatCurrency } from '../../utils/formatCurrency';

const Checkout = () => {
  const {items:cartItems,total} = useSelector((state) => state.cart);
  const navigate = useNavigate();


  const handleCheckout = () => {
    const order = {
      items: cartItems,
      total: total,
    };
    sessionStorage.setItem('order', JSON.stringify(order));
    navigate('/dashboard');
  };

  return (
    <div className="max-w-xl h-5/6 mx-auto p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">Order Summary</h2>
      <ul className="divide-y divide-gray-200 mb-4">
        {cartItems.map((item) => (
          <li key={item.id} className="flex justify-between py-4 ">
            <div className='w-5/6'>
              <p className="text-sm font-medium">{item.title}</p>
              <p className="text-sm text-gray-500 truncate">{item.description}</p>
            </div>
            <div className="text-sm">
              <p>{item.quantity}</p>
              <p>{formatCurrency(item.price)}</p>
            </div>
          </li>
        ))}
        <li className="flex justify-between py-2">
          <div className="text-sm">Shipping Fee</div>
          <div className="text-sm">{formatCurrency(10000)}</div>
        </li>
      </ul>
      <div className="flex justify-between text-lg font-bold border-t pt-2">
        <div>Total</div>
        <div>{formatCurrency(total + 10000)}</div>
      </div>
      <button   onClick={handleCheckout}  className="w-full mt-4 bg-red-500 text-white py-2 rounded-md">
        Checkout
      </button>
    </div>
  );
};

export default Checkout;
