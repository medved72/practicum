import { FC, ReactNode } from "react";
import styles from "./content-block.module.scss";

export const ContentBlock: FC<{ children?: ReactNode }> = ({ children }) => {
  return <div className={styles.content}>{children}</div>;
};
