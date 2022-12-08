import { FC, ReactNode } from "react";
import styles from "./card-header.module.scss";
import { cn } from "@shared/utils/className";

export const CardHeader: FC<{
  className?: string;
  size: "l" | "s";
  children?: ReactNode;
}> = ({ className, size, children }) => {
  return (
    <div
      className={cn([
        className,
        styles["card-header"],
        styles[`card-header-${size}`],
      ])}
    >
      {children}
    </div>
  );
};
