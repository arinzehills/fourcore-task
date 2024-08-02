import React from "react";
import "./Button.css";
import Loading from "../Loading/Loading";

const Button = ({
  color ='red',
  width,
  height,
  children,
  isBorderOnly=false,
  isCircular,
  buttonColor,
  loading,
  prefixIcon,
  suffixIcon,
  ...rest
}) => {
  const styles = ` bg-${color}-500 $hover:bg-${color}-700  font-medium py-2 px-4 ${
    isCircular ? "rounded-full" : "rounded"
  }`;
  const widthStyle = width ? `w-${width}` : "";
  const heightStyle = height ? `h-${height}` : "";
  const classNames = `${buttonColor} inline-block ${styles} ${widthStyle} ${heightStyle} `;
  let { disabled } = rest;

  return (
    <button
      className={classNames}
      {...rest}
      // type="button"
      style={{
        minHeight: "50px",
        opacity: disabled && 0.4,
        color:isBorderOnly?"black":'white',
        ...rest,
        // background:
        //   buttonColor === "btn-orange"
        //     ? "var(--orange-gradient)"
        //     : "var(--blue-gradient)",
      }}
    >
      {loading ? (
        <div className="flex-center -mt-8 -ml-8">
        <Loading height={20} isTicks={true} />
        </div>
      ) : children}
      {}
      {/* {suffixIcon && <span className="ml-2">{suffixIcon}</span>} */}
    </button>
  );
};

export default Button;
