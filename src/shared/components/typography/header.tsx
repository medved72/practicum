import { FC, ReactNode } from "react";
import styles from "./header.module.scss";
import { cn } from "@shared/utils/className";

export const Header: FC<{
  level: 1 | 2 | 3 | 4;
  className?: string;
  children?: ReactNode;
}> = ({ children, className, level }) => {
  return (
    <div className={cn([className, styles.header, styles[`header-${level}`]])}>
      {children}
    </div>
  );
};
