import React from "react";
import "./Input.scss";
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    variant?: string;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    className?: string;
}
declare const Input: ({ variant, className, startIcon, endIcon, ...props }: InputProps) => JSX.Element;
export default Input;
