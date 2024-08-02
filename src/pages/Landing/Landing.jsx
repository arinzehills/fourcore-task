import React from "react";
import ProductList from "../../components/ProductList/ProductList";
import Button from "../../components/Button/Button";
import SlideAnimation from "../../components/Animations/SliderAnimation";

const Landing = () => {
  return (
    <div>
      <div className="flex sm:flex-row mb-20 flex-col justify-between gap-2">
        <div className="flex-center flex-col items-start">
          <h1 className="text-4xl">Welcome to Four Core Shopping</h1>
          <p className="capitalize my-4">Shop with Ease on this Store</p>
          <Button width={"64"} height={'20'} onClick={() => navigate("/")}>
            Start Now
          </Button>
        </div>
        {/* img */}
        <img src="/images/notfound.jpg" alt="" className="h-5/6 w-96" />
      </div>
      <SlideAnimation>

      <ProductList />
      </SlideAnimation>
    </div>
  );
};

export default Landing;
