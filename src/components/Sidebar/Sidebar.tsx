import React from "react";
import { Header } from "../Text/Text";
import "./Sidebar.scss";
import SidebarItem from "./SidebarItem";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

const Sidebar = ({ children, ...props }: SidebarProps) => {
  return (
    <div className={`--sidebar`}>
      <Header is="h4">Contents</Header>
      {children}
    </div>
  );
};

export default Sidebar;
