import React from "react";

interface TooltipType {
    message: string;
    children: React.ReactNode;
}

const Tooltip = ({ message, children }: TooltipType) => {
  return (
    <div className="group self-end absolute">
      {children}
      <span className="mr-20 absolute top-10 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white
        group-hover:scale-100">{message}
      </span>
    </div>
  );
};

export default Tooltip;