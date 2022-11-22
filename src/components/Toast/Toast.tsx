import React from "react";

interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {}

export const ToastWrapper = () => {};

const Toast = ({ children }: ToastProps) => {
  return <div className="--tooltip">{children}</div>;
};

export default Toast;
