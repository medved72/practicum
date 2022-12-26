import { FC, ReactNode } from "react";
import { cn } from "@shared/utils";

import styles from "./text.module.scss";

export const Text: FC<{
  className?: string;
  children?: ReactNode;
  size?: "l" | "s" | "supportive" | "supportive-s";
  as?: "span" | "p" | "div";
}> = ({ children, className, size = "l", as = "p" }) => {
  const TagName = as;

  return (
    <TagName className={cn([className, styles.text, styles[`text-${size}`]])}>
      {children}
    </TagName>
  );
};
