import React from "react";
import "./Banner.scss";
interface BannerProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
}
declare const Banner: ({ className, ...props }: BannerProps) => JSX.Element;
export default Banner;
