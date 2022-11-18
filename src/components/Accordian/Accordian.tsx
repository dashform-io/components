import React, { useContext, useEffect, useRef, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import "./Accordian.scss";
import { Collapse } from "react-collapse";

interface AccordianContextType {
  isOpen: boolean;
  togglePanel: () => void;
}

const AccordianContext = React.createContext<AccordianContextType | null>(null);

const useAccordian = () => {
  const context = useContext(AccordianContext);
  if (!context) {
    throw Error("You must use this component within the Accordian component!");
  }
  return context;
};

const Accordian = ({ children }) => {
  const [openPanel, setOpenPanel] = useState(false);
  const togglePanel = () => {
    setOpenPanel(!openPanel);
  };

  return (
    <AccordianContext.Provider value={{ isOpen: openPanel, togglePanel }}>
      <div className="--accordian">{children}</div>
    </AccordianContext.Provider>
  );
};

const AccordianButton = ({ children }) => {
  const context = useAccordian();

  return (
    <button className="--accordian-button" onClick={context.togglePanel}>
      {children}
      <FaChevronDown />
    </button>
  );
};

const AccordianContent = ({ children }) => {
  const context = useAccordian();

  return (
    <Collapse isOpened={context.isOpen}>
      <div className={`--accordian-content`}>{children}</div>
    </Collapse>
  );
};

export { Accordian, AccordianButton, AccordianContent };
