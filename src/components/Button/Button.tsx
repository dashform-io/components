import classNames from "classnames";
import React from "react";
import "./Button.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  colorScheme?: "primary" | "secondary";
  variant?: "rounded" | "pill" | "ghost";
  size?: "small" | "default" | "large";
  children?: React.ReactNode;
}

/**
 * Primary UI component for user interaction
 */
const Button = ({
  colorScheme = "primary",
  size = "default",
  variant = "rounded",
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={`--button --button-${colorScheme} --button-${variant}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
