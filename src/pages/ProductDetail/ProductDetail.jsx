import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { addToCart } from "../../store/cartSlice";
import useGet from "../../hooks/useGet";
import Loading from "../../components/Loading/Loading";
import RatingStars from "../../components/RatingStars/RatingStars";
import Button from "../../components/Button/Button";
import SlideAnimation from "../../components/Animations/SliderAnimation";
import ErrorComponent from "../../components/NoDataFound/ErrorComponent";

const product = {
  id: 1,
  title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  price: 109.95,
  description:
    "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  category: "men's clothing",
  image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  rating: {
    rate: 3.9,
    count: 120,
  },
};
const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  //   const data=product
  const { data, loading, error } = useGet(`/products/${id}`);
  const {
    data: relatedProducts,
    loading: pLdn,
    error: pErr,
  } = useGet(`/products`);

  if (loading) {
    return (
      <div className="h-screen flex-center">
        <Loading isTicks />
      </div>
    );
  }
  if (error) {
    return (
      <div className=" w-screen h-screen text-center">
        <ErrorComponent />
      </div>
    );
  }
  // return <div>dsjkdsak</div>
  return (
    <SlideAnimation>
      <div className="w-full  px-2 sm:px-12  mx-auto my-4 p-4  rounded">
        <div className="flex-center sm:flex-row flex-col gap-8 justify-evenly">
          <img src={data.image} className="h-72 w-44" alt="" />
          <div className="flex flex-col items-start ">
            <RatingStars
              rating={data.rating.rate}
              ratingsCounts={data.rating.count}
            />
            <p className="mb-2 font-bold text-md"> ${data.title}</p>
            <hr
              style={{ height: 0.5 }}
              className=" bg-red-500 border-none w-full"
            />
            <p className="mb-2 font-light text-gray-600 text-sm">
              {" "}
              {data.category}
            </p>
            <p className=" text-red-500 text-2xl font-medium mb-16">
              {" "}
              ${data.price}
            </p>
            <Button width={"full"} onClick={() => dispatch(addToCart(data))}>
              Add To Cart
            </Button>
          </div>
        </div>
        <div className="mt-8">
          <hr className="h-1 bg-red-500 border-none" />
          <h3 className="font-medium my-4">DESCRIPTION</h3>
          <p className="mb-4 text-gray-500">{data.description}</p>
        </div>

        <div className=" my-4 flex-center flex-row justify-between">
          <h3 className="font-bold">RELATED PRODUCTS</h3>
          <Link to={"/"} className="text-red-500">
            View More {`>>`}{" "}
          </Link>
        </div>

        {/* {!pLdn }   */}
        <div className="grid grid-cols-3 md:grid-cols-4 gap-4 ">
          {!pLdn &&
            relatedProducts.slice(0, 4).map((product) => (
              <div className="w-16  h-44" key={product.id}>
                <img src={product.image} alt="" />
                <h4 className="truncate font-medium">{product.title}</h4>
                <p className="font-bold text-md">${product.price}</p>
              </div>
            ))}
        </div>
      </div>
    </SlideAnimation>
  );
};

export default ProductDetail;
