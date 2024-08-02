import React from "react";
import RatingStars from "../RatingStars/RatingStars";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

const ProductItem = ({ id, image, title, price,category, rating }) => {
  return (
    <div key={id} className="border rounded-lg ">
      <div className="bg-blue-50 flex items-center justify-center">
        <img src={image} alt="" className="w-32 h-48" />
      </div>
      {/* prd detaisl */}
      <div className="flex flex-col items-start p-4 gap-4">
        <div className="w-full  flex-center justify between">
          <h4 className="truncate text-md font-medium">{title}</h4>
          <p className="red-text">${price}</p>
        </div>
        <div className="text-gray-400">

        <p>{category}</p>
        <RatingStars rating={rating.rate} ratingsCounts={rating?.count} />
        </div>
        <Link to={`/products/${id}`}>
          <Button isCircular>View details</Button>
        </Link>
      </div>
    </div>
  );
};

export default React.memo(ProductItem);
