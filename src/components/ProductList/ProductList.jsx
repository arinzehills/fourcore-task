import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/productSlice";
import { Link } from "react-router-dom";
import useGet from "../../hooks/useGet";
import Button from "../Button/Button";
import Loading from "../Loading/Loading";
import RatingStars from "../RatingStars/RatingStars";
import ProductItem from "./ProductItem";
import ErrorComponent from "../NoDataFound/ErrorComponent";

const ProductList = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useGet("/products");
  const products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  if (loading) {
    return <div className="h-full mb-20"><Loading isTicks /></div>;
  }

  if (error) {
    return <div className="flex-center"><ErrorComponent/></div>;
  }
  // console.log(data[0])
  return (
    <div id="products">
       <h3 className="text-xl font-bold my-6">Sponsored Products</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {data?.slice(0,4).map((product) => (
          <ProductItem {...product}/>
        ))}
      </div>
        <h3 className="text-xl font-bold my-6">Trending Products</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {data?.slice(4,12).map((product) => (
          <ProductItem {...product}/>
        ))}
      </div>
        <h3 className="text-xl font-bold my-6">More Products</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {data?.slice(12,20).map((product) => (
           <ProductItem {...product}/>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
