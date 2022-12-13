import { FC, ReactNode } from "react";
import { cn } from "@shared/utils";

import styles from "./text.module.scss";

export const Text: FC<{
  className?: string;
  children?: ReactNode;
  size?: "l" | "s" | "supportive" | "supportive-s";
}> = ({ children, className, size = "l" }) => {
  return (
    <div className={cn([className, styles.text, styles[`text-${size}`]])}>
      {children}
    </div>
  );
};
