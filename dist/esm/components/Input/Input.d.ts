import React from "react";
interface InputProps {
    placeholder?: string;
    className?: string;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
}
declare const Input: ({ placeholder, className, startIcon, endIcon, ...props }: InputProps) => JSX.Element;
export default Input;
