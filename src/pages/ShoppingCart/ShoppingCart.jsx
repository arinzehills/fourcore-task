import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../store/cartSlice";
import Button from "../../components/Button/Button";
import NoDataFound from "../../components/NoDataFound/NoDataFound";
import { useNavigate } from "react-router-dom";
import CartItem from "./CartItem";
import SlideAnimation from "../../components/Animations/SliderAnimation";

const ShoppingCart = () => {
  const items = useSelector((state) => state.cart.items);
  const cartTotal = useSelector((state) => state.cart.total);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <SlideAnimation>
      <h2 className="text-2xl mb-4">Shopping Cart</h2>
      {items.length === 0 ? (
        <div className="flex-center flex-col">
          <NoDataFound message={"Your cart is empty."} />
          <Button width={"96"} onClick={() => navigate("/")}>
            Start Shopping
          </Button>
        </div>
      ) : (
        <div className="">
          <div className="flex-center justify-between bg-gray-100 w-full p-2 rounded">
            <h4>Products</h4>
            <h4 className="font-medium">SubTotal:${cartTotal} </h4>
          </div>
          <ul>
            {items.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </ul>
          <div className="flex sm:flex-row flex-col gap-4 justify-between">
            <p className="p-2 border border-red-300 font-bold">Total: <span>${cartTotal}</span></p>
          <Button width={"96"} onClick={() => navigate("/checkout")}>
            Continue
          </Button>
          </div>
        </div>
      )}
    </SlideAnimation>
  );
};

export default ShoppingCart;
