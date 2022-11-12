import React from "react";
interface NavbarProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
}
declare const Navbar: ({ className, ...props }: NavbarProps) => JSX.Element;
export default Navbar;
