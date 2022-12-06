import { FC, ReactNode } from "react";
import styles from "./header.module.scss";

export const Header: FC<{ className?: string; children?: ReactNode }> = ({
  children,
  className,
}) => {
  return <div className={`${className} ${styles.header}`}>{children}</div>;
};
