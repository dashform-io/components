import React from "react";
import "./Label.scss";

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children?: string;
}

const Label = ({ children, className = "", ...props }: LabelProps) => {
  return (
    <label {...props} className={`--label ${className}`}>
      {children}
    </label>
  );
};

export default Label;
