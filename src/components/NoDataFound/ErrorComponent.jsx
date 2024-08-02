import { Icon } from "@iconify/react";
import React from "react";

const ErrorComponent = ({ error }) => {
  return (
    <div className="bg-white flex justify-center items-center p-12">
      <div
        className="flex items-center justify-center flex-col text-8xl text-red-400"
        // style={{ color: "var(--danger)" }}
      >
        <Icon icon="material-symbols:error-rounded" />
        <h1 className="text-xl">{error ?? "Network error"}</h1>
      </div>
    </div>
  );
};

export default ErrorComponent;
