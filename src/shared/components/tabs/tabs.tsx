import React, { ChangeEvent, useCallback, useMemo } from "react";
import { FC, ReactNode, useState } from "react";
import { Typography } from "../typography";
import styles from "./tabs.module.scss";
import { cn } from "@shared/utils";

interface Tab {
  key: string;
  name: string;
  content: ReactNode;
}

interface TabsProps {
  tabs: Tab[];
  onChangeActiveTab?: (role: Tab) => void;
}

export const Tabs: FC<TabsProps> = ({ tabs, onChangeActiveTab }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]?.key);

  const content = useMemo(() => {
    return tabs.find(({ key }) => key === activeTab)?.content;
  }, [activeTab, tabs]);

  return (
    <div className={styles.tabs}>
      <div className={styles.tabs__panel}>
        {tabs.map((tab) => {
          const isChecked = tab.key === activeTab;
          return (
            <label
              key={tab.key}
              className={cn([
                styles.tabs__tabButton,
                isChecked && styles.tabs__tabButton__active,
              ])}
            >
              <input
                type="radio"
                name="tabs"
                value={tab.key}
                key={tab.key}
                checked={isChecked}
                onChange={() => {
                  setActiveTab(() => tab.key);
                  onChangeActiveTab?.(tab);
                }}
              />
              {tab.name}
            </label>
          );
        })}
      </div>

      <div>{content}</div>
    </div>
  );
};
