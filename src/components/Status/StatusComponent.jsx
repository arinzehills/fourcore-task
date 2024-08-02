import React from "react";

const StatusComponent = ({ value }) => {
  let isActive =
    value == "online" || value == "active" || value == "completed"
      ? true
      : false;
  let isPending = value == "pending" ? true : false;
  return (
    <td className="text-left">
      <div
        className={`p-2 ${
          isPending ? "pending" : isActive ? "online" : "offline"
        } rounded-xl w-24 h-10 flex items-center justify-center`}
      >
        <span className={``}>{value}</span>
      </div>
    </td>
  );
};

export default StatusComponent;
