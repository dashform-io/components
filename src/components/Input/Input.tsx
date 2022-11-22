import classNames from "classnames";
import React, { RefObject, useRef } from "react";
import "./Input.scss";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  className?: string;
}

const Input = ({
  variant = "outline",
  className,
  startIcon,
  endIcon,
  ...props
}: InputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div
      className={classNames(`--input --input-${variant}`, className)}
      onClick={() => inputRef.current!.focus()}
    >
      <span className="--input-icon">{startIcon}</span>
      <input ref={inputRef} {...props} className="--input-inner" />
      <span className="--input-icon">{endIcon}</span>
    </div>
    //<input
    //className={classNames(`--input --input-${variant}`, className)}
    //{...props}
    ///>
  );
};

export default Input;
