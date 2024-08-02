import React, { useRef } from "react";
import ProductList from "../../components/ProductList/ProductList";
import Button from "../../components/Button/Button";
import SlideAnimation from "../../components/Animations/SliderAnimation";
import { ScrollTo } from "../../components/Navbar/Navbar";

const Landing = () => {
  const ref = useRef(null);

  const handleClickToApp = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      <div className="flex sm:flex-row mb-20 flex-col justify-between gap-2">
        <div className="flex-center flex-col items-start">
          <h1 className="text-4xl">Welcome to Four Core Shopping</h1>
          <p className="capitalize my-4">Shop with Ease on this Store</p>
         
            <Button onClick={handleClickToApp} width={"64"} height={"20"}>
                Start Now
            </Button>
        </div>
        {/* img */}
        <img src="/images/notfound.jpg" alt="" className="h-5/6 w-96" />
      </div>
      <SlideAnimation>
        <div ref={ref}>

        <ProductList />
        </div>
      </SlideAnimation>
    </div>
  );
};

export default Landing;
