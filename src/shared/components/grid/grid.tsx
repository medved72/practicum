import { FC, ReactNode } from "react";
import styles from "./grid.module.scss";
import { cn } from "@shared/utils";

const GridItem: FC<{
  children?: ReactNode;
  span?: "1" | "2" | "3" | "4";
  className?: string;
}> = ({ span = "1", children, className }) => {
  return (
    <div className={cn([styles[`grid-${span}`], className])}>{children}</div>
  );
};

export const Grid: FC<{ className?: string; children?: ReactNode }> & {
  Item: typeof GridItem;
} = ({ children, className }) => {
  return <div className={cn([styles.grid, className])}>{children}</div>;
};

Grid.Item = GridItem;
