import React from "react";
import "./Loading.css";
import "./Second.css";

const Loading = ({ isTicks=false, height }) => {
  return (
    <div className="flex-center">
      {!isTicks ? (
        <div
          className="loadingio-spinner-double-ring-2ll2zpwl0cy"
          style={{ height: height??'100px' }}
        >
          <div className="ldio-gkmvno3v208">
            <div></div>
            <div></div>
            <div>
              <div></div>
            </div>
            <div>
              <div></div>
            </div>
          </div>
        </div>
      ) : (
        <div className=" lds-facebook">
          <div></div>
          <div></div>
          <div></div>
        </div>
      )}
    </div>
  );
};

export default Loading;
