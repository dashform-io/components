import classNames from "classnames";
import React, { RefObject, useRef, useState, useEffect } from "react";
import "./Input.scss";
import useForwardedRef from "../../hooks/useForwardedRef";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  className?: string;
  errorText?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { variant = "outline", className, startIcon, endIcon, errorText, ...props },
    ref
  ) => {
    const inputRef = useForwardedRef<HTMLInputElement>(ref);

    return (
      <>
        <div
          className={classNames(`--input --input-${variant}`, className, {
            "--input-error": props["aria-invalid"] === "true",
          })}
          onClick={() => inputRef.current!.focus()}
        >
          <span className="--input-icon">{startIcon}</span>
          <input ref={inputRef} {...props} className="--input-inner" />
          <span className="--input-icon">{endIcon}</span>
        </div>
        {props["aria-invalid"] === "true" && (
          <span className="--input-error-text">{errorText}</span>
        )}
      </>
      //<input
      //className={classNames(`--input --input-${variant}`, className)}
      //{...props}
      ///>
    );
  }
);

export default Input;
