import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../store/cartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <li
      key={item.id}
      className="p-2 rounded-lg my-2 border border-gray-100  sm:w-1/2 flex-center items-start flex-col gap-2"
    >
      <p className="text-gray-400">{item.category}</p>
      <p> {item.title} </p>
      <div className="flex-center mt-4 w-4/6 justify-between">
        <p className="red-text font-bold">${item.price}</p>
        <button
          onClick={() => dispatch(removeFromCart(item.id))}
          className="bg-red-500 text-white py-1 px-2 ml-4 rounded"
        >
          Remove
        </button>
      </div>
    </li>
  );
};

export default CartItem;
