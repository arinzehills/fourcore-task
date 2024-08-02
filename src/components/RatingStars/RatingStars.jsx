import React from "react";
import { AiTwotoneStar } from "react-icons/ai";
import { Icon } from "@iconify/react";

const RatingStars = ({ setRating, rating,ratingsCounts }) => {
  const ratingIcon = [
    { ratings: 1 },
    { ratings: 2 },
    { ratings: 3 },
    { ratings: 4 },
    { ratings: 5 },
  ];
  console.log(rating);
  return (
    <div>
      <div
        className="flex items-center  justify-center gap-1 "
      >
        {ratingIcon.map((rate, index) => (
          <div key={rate.ratings}>
            <Icon icon="solar:star-bold-duotone" color={rating >= rate.ratings && "red"} />
             
            {/* <AiTwotoneStar
              size={"25px"}
              
              className={"product-item-icon"}
              onClick={() => setRating({ ratings: index + 1 })}
            /> */}
            {/* <pre className="showTip">
              {index === 0
                ? "it's bad"
                : index === 1
                ? "it's fair"
                : index === 2
                ? "its good"
                : index === 3
                ? "its good"
                : "Excellent"}
            </pre> */}
          </div>
        ))}
         {ratingsCounts&&<span>({ratingsCounts})</span>}
      </div>
    </div>
  );
};

export default RatingStars;