import { FC, ReactNode } from "react";
import styles from "./text.module.scss";
import { cn } from "@shared/utils/className";

export const Text: FC<{
  className?: string;
  children?: ReactNode;
  size?: "l" | "s" | "supportive";
}> = ({ children, className, size = "l" }) => {
  return (
    <div className={cn([className, styles.text, styles[`text-${size}`]])}>
      {children}
    </div>
  );
};
