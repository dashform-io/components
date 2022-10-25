import classNames from "classnames";
import React from "react";

interface ButtonProps {
  variant: "primary" | "secondary";
  size?: "small" | "default" | "large";
  children: React.ReactNode;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  variant = "primary",
  size = "default",
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={classNames(
        "transition-colors px-6 py-2 rounded-md font-semibold bg-primary-60 text-white hover:bg-primary-80 active:bg-primary-100",
        {
          "bg-primary-60 font-semibold text-white px-6 py-2 rounded-md hover:bg-primary-80 active:bg-primary-100":
            variant === "primary",
          "border border-primary-60 text-primary-60 hover:bg-primary-80 hover:text-white px-[23px] py-[7px] bg-white":
            variant === "secondary",
        }
      )}
      {...props}
    >
      {children}
    </button>
  );
};
