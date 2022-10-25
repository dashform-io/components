import classNames from "classnames";
import React, { useRef } from "react";

interface InputProps {
  placeholder?: string;
  className?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

const Input = ({
  placeholder,
  className,
  startIcon,
  endIcon,
  ...props
}: InputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div
      className={classNames(
        "bg-gray-60 rounded-[3px] py-2 px-1 font-normal focus:outline-primary-60 max-w-fit flex flex-row gap-3 items-center",
        className
      )}
      onClick={() => inputRef.current!.focus()}
    >
      <div className="text-gray-100">{startIcon}</div>
      <input
        ref={inputRef}
        placeholder={placeholder}
        {...props}
        className="w-96 placeholder:text-gray-100 bg-gray-60 outline-none font-semibold"
      />
      <div className="text-gray-100">{endIcon}</div>
    </div>
  );
};

export default Input;
