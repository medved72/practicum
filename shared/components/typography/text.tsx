import { FC, ReactNode } from "react";
import styles from "./text.module.scss";

export const Text: FC<{ className?: string; children?: ReactNode }> = ({
  children,
  className,
}) => {
  return <div className={`${className} ${styles.text}`}>{children}</div>;
};
