import React, { useState } from "react";
import "./Switch.scss";

interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Switch = ({ ...props }: SwitchProps) => {
  const [toggled, setToggled] = useState(false);

  const onToggle = () => {
    console.log(toggled);
    setToggled(!toggled);
  };

  return (
    <label className="--switch-wrapper">
      <input type="checkbox" className="--switch-check" {...props} />
      <span className="--switch-inner-knob" />
      <span className="--switch-inner-bg" />
      <span
        className={`--switch-inner ${
          props.checked && "--switch-inner-toggled"
        }`}
      />
    </label>
  );
};

export default Switch;
