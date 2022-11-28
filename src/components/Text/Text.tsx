import React from "react";
import "./Text.scss";

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

interface HeaderProps extends React.HTMLAttributes<HTMLHeadingElement> {
  is?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children?: React.ReactNode;
}

export const Text = ({ children, ...props }: TextProps) => {
  return <p {...props}>{children}</p>;
};

export const Header = ({ is, className, children }: HeaderProps) => {
  return <span className={`--header-${is} ${className}`}>{children}</span>;
};
