import React, { useContext, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import "./Accordian.scss";
import { Collapse } from "react-collapse";

interface AccordianProps {
  children?: React.ReactNode;
  className?: string;
}
interface AccordianButtonProps {
  children?: React.ReactNode;
  className?: string;
}

interface AccordianContentProps {
  children?: React.ReactNode;
  className?: string;
}

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

const Accordian = ({ children, className }: AccordianProps) => {
  const [openPanel, setOpenPanel] = useState(false);
  const togglePanel = () => {
    setOpenPanel(!openPanel);
  };

  return (
    <AccordianContext.Provider value={{ isOpen: openPanel, togglePanel }}>
      <div className={`--accordian ${className}`}>{children}</div>
    </AccordianContext.Provider>
  );
};

const AccordianButton = ({ children, className }: AccordianButtonProps) => {
  const context = useAccordian();

  return (
    <button
      className={`--accordian-button ${className}`}
      onClick={context.togglePanel}
    >
      {children}
      <span
        className={`--accordian-chevron --accordian-chevron-${context.isOpen}`}
      >
        <FaChevronDown />
      </span>
    </button>
  );
};

const AccordianContent = ({ children, className }: AccordianContentProps) => {
  const context = useAccordian();

  return (
    <Collapse isOpened={context.isOpen}>
      <div className={`--accordian-content ${className}`}>{children}</div>
    </Collapse>
  );
};

export { Accordian, AccordianButton, AccordianContent };
