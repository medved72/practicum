import { FC, ReactNode } from "react";
import styles from "./card-header.module.scss";

export const CardHeader: FC<{ size: "l" | "s"; children?: ReactNode }> = ({
  size,
  children,
}) => {
  return (
    <div
      className={`${styles["card-header"]} ${styles[`card-header-${size}`]}`}
    >
      {children}
    </div>
  );
};
