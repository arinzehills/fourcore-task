import React from "react";

const NoDataFound = ({ message }) => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <img src="/images/notfound.jpg" alt="" style={{ height: "300px" }} />
        <span className="italics my-2 text-gray-400" style={{ fontSize: "20px" }}>
          {message ?? "No Data Found"}
        </span>
      </div>
    </div>
  );
};

export default NoDataFound;
