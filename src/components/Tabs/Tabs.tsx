import classNames from "classnames";
import React, { useContext, useEffect, useState } from "react";
import "./Tabs.scss";

interface TabProps extends React.HTMLAttributes<HTMLDivElement> {
  isActive?: boolean;
}
interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {}

interface TabContextType {
  activeTab: number;
  setActiveTab: (newValue: number) => void;
}

const TabsContext = React.createContext<TabContextType | null>(null);

const useTabs = () => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error("This component must be used within the Tabs component!");
  }

  return context;
};

export const TabGroup = ({ children }) => {
  const { activeTab, setActiveTab } = useTabs();
  return (
    <div className="--tab-group">
      {React.Children.map(children, (el: React.ReactElement, index) => {
        const newObject = React.cloneElement(el, {
          isActive: index === activeTab,
        });
        return <span onClick={() => setActiveTab(index)}>{newObject}</span>;
      })}
    </div>
  );
};

export const Tab = ({ children, isActive }: TabProps) => {
  return (
    <button
      className={classNames(`--tab`, {
        "--tab-active": isActive,
      })}
      aria-role="tab"
    >
      {children}
    </button>
  );
};

export const TabContents = ({ children }) => {
  const { activeTab } = useTabs();
  return (
    <div className="--tab-contents">
      {React.Children.toArray(children).length > activeTab
        ? React.Children.toArray(children)[activeTab]
        : null}
    </div>
  );
};

export const Tabs = ({ children }: TabsProps) => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div>{children}</div>
    </TabsContext.Provider>
  );
};
