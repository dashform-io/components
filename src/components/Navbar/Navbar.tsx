import React from "react";
import Input from "../Input/Input";
import Key from "../Key/Key";
import { Header } from "../Text/Text";
import { FaSearch } from "react-icons/fa";
import Button from "../Button/Button";
import Logo from "../../assets/images/logo.svg";
import "./Navbar.scss";

interface NavbarProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const Navbar = ({ className, ...props }: NavbarProps) => {
  return (
    <div className={`--navbar ${className}`}>
      <div className="flex flex-row items-start">
        <img alt="DashForm Logo" src={Logo} className="w-[200px]" />
        <div className="px-2 py-0.5 rounded-md ml-2 bg-gray-200 font-medium text-xs mt-1">
          Beta
        </div>
      </div>
      <div className="--navbar-links">{props.children}</div>
      <div className="mr-4 flex flex-row items-center gap-4">
        <a href="/login">
          <Button variant="ghost">Sign in</Button>
        </a>
        <Button>Get Started</Button>
      </div>
    </div>
  );
};

export default Navbar;
