import { FC, ReactNode } from "react";
import styles from "./button.module.scss";

export const Button: FC<{ children?: ReactNode }> = ({ children }) => {
  return <button className={styles.button}>{children}</button>;
};
