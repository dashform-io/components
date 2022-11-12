import React from "react";
import "./SidebarItem.scss";

interface SidebarItemProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
  href?: string;
}

const SidebarItem = ({ children, className, ...props }: SidebarItemProps) => {
  return (
    <a className={`--sidebar-item ${className}`} {...props}>
      {children}
    </a>
  );
};

export default SidebarItem;
