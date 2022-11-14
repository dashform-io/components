import React, { useState } from "react";
import "./Switch.scss";

const Switch = () => {
  const [toggled, setToggled] = useState(false);

  const onToggle = () => {
    console.log(toggled);
    setToggled(!toggled);
  };

  return (
    <label className="--switch-wrapper">
      <input
        type="checkbox"
        className="--switch-check"
        checked={toggled}
        onChange={onToggle}
      />
      <span className="--switch-inner-knob" />
      <span className="--switch-inner-bg" />
      <span
        className={`--switch-inner ${toggled && "--switch-inner-toggled"}`}
      />
    </label>
  );
};

export default Switch;
