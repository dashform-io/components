import classNames from "classnames";
import React, { useRef } from "react";

interface PinItemProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  value?: string;
  innerRef: React.LegacyRef<HTMLInputElement>;
}

const PinItem = ({
  className,
  value,
  onChange,
  innerRef,
  ...props
}: PinItemProps) => {
  return (
    <div
      className={classNames(
        "bg-gray-60 rounded-[3px] py-1 px-2 font-normal focus:outline-primary-60 max-w-fit",
        className
      )}
      // onClick={() => inputRef.current!.focus()}
    >
      <input
        ref={innerRef}
        {...props}
        value={value}
        onChange={onChange}
        maxLength={1}
        className="w-[12px] text-lg placeholder:text-gray-100 bg-gray-60 outline-none text-center"
      />
    </div>
  );
};

export default PinItem;
