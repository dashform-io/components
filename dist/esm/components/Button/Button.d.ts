import React from "react";
import "./Button.css";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary";
    size?: "small" | "default" | "large";
    children?: React.ReactNode;
}
/**
 * Primary UI component for user interaction
 */
declare const Button: ({ variant, size, children, ...props }: ButtonProps) => JSX.Element;
export default Button;
