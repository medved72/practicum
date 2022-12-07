import { FC, ReactNode } from "react";
import styles from "./text.module.scss";

export const Text: FC<{
  className?: string;
  children?: ReactNode;
  size?: "l" | "s" | "supportive";
}> = ({ children, className, size = "l" }) => {
  return (
    <div className={`${className} ${styles.text} ${styles[`text-${size}`]}`}>
      {children}
    </div>
  );
};
