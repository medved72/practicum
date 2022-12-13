import { FC, ReactNode } from "react";
import styles from "./button.module.scss";
import { cn } from "@shared/utils";

export const Button: FC<{
  className?: string;
  children?: ReactNode;
  size?: "medium" | "small";
}> = ({ children, size = "medium", className }) => {
  return (
    <button
      className={cn([className, styles.button, styles[`button--${size}`]])}
    >
      {children}
    </button>
  );
};
