import { FC, ReactNode } from "react";
import styles from "./title.module.scss";

export const Title: FC<{ className?: string; children?: ReactNode }> = ({
  children,
  className,
}) => {
  return <div className={`${className} ${styles.title}`}>{children}</div>;
};
