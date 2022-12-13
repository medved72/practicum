import { FC, memo, ReactNode } from "react";
import styles from "./grid.module.scss";

const GridItem: FC<{
  children?: ReactNode;
  span?: "1" | "2" | "3" | "4";
}> = ({ span = "1", children }) => {
  return <div className={styles[`grid-${span}`]}>{children}</div>;
};

export const Grid: FC<{ children?: ReactNode }> & {
  Item: typeof GridItem;
} = ({ children }) => {
  return <div className={styles.grid}>{children}</div>;
};

Grid.Item = GridItem;
