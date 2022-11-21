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
      <div className="text-gray-100">{startIcon}</div>
      <input
        ref={inputRef}
        {...props}
        className="w-96 placeholder:text-gray-100 bg-gray-60 outline-none font-semibold"
      />
      <div className="text-gray-100">{endIcon}</div>
    </div>
    //<input
    //className={classNames(`--input --input-${variant}`, className)}
    //{...props}
    ///>
  );
};

export default Input;
