import React from "react";
interface ButtonProps {
    variant?: "primary" | "secondary";
    size?: "small" | "default" | "large";
    children?: React.ReactNode;
}
/**
 * Primary UI component for user interaction
 */
declare const Button: ({ variant, size, children, ...props }: ButtonProps) => JSX.Element;
export default Button;
