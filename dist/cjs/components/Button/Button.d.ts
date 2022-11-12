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
declare const Button: ({ colorScheme, size, variant, children, ...props }: ButtonProps) => JSX.Element;
export default Button;
