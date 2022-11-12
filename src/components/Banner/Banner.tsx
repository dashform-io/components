import React from "react";
import "./Banner.scss";

interface BannerProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const Banner = ({ className, ...props }: BannerProps) => {
  return <div className="--banner">DashForm is currently in beta!</div>;
};

export default Banner;
