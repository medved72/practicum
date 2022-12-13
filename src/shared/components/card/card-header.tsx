import { FC, ReactNode } from "react";
import { cn } from "@shared/utils";

import styles from "./card-header.module.scss";

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
