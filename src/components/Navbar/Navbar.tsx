import React from "react";
import Input from "../Input/Input";
import Key from "../Key/Key";
import { Header } from "../Text";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="h-24 flex flex-row justify-between items-center px-12 shadow-lg">
      <div>
        <Header>DashForm</Header>
      </div>
      <div>
        <Input
          placeholder="Search"
          startIcon={<FaSearch />}
          endIcon={
            <span className="flex flex-row gap-1">
              <Key keystroke="⌘" /> +
              <Key keystroke="K" />
            </span>
          }
        />
      </div>
      <div className="w-32"></div>
    </div>
  );
};

export default Navbar;
