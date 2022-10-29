import React from "react";
interface PinItemProps extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    value?: string;
    innerRef: React.LegacyRef<HTMLInputElement>;
}
declare const PinItem: ({ className, value, onChange, innerRef, ...props }: PinItemProps) => JSX.Element;
export default PinItem;
