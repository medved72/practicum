import { FC, ReactNode } from "react";
import styles from "./button.module.scss";
import { cn } from "@shared/utils";

export const Button: FC<{
  className?: string;
  children?: ReactNode;
  disabledHover?: boolean;
  size?: "medium" | "small";
}> = ({ children, size = "medium", className, disabledHover }) => {
  return (
    <button
      className={cn([
        className,
        styles.button,
        styles[`button--${size}`],
        disabledHover && styles.disabledHover,
      ])}
    >
      {children}
    </button>
  );
};
