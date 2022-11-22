import React from "react";

interface TooltipProps extends React.HTMLAttributes<HTMLDivElement> {}

export const TooltipWrapper = () => {};

const Tooltip = ({ children }: TooltipProps) => {
  return <div className="--tooltip">{children}</div>;
};

export default Tooltip;
