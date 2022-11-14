import React from "react";
import "./Navbar.scss";
interface NavbarProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
}
declare const Navbar: ({ className, ...props }: NavbarProps) => JSX.Element;
export default Navbar;
