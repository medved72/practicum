import { FC, ReactNode } from "react";
import { cn } from "@shared/utils";

import styles from "./header.module.scss";

export const Header: FC<{
  as: "h1" | "h2" | "h3" | "h4";
  type:
    | "header-1"
    | "header-2"
    | "header-3"
    | "header-4"
    | "card-header-l"
    | "card-header-s";
  className?: string;
  children?: ReactNode;
}> = ({ children, className, type, as }) => {
  const TagName = as;
  const classes = cn([className, styles[type]]);

  return <TagName className={classes}>{children}</TagName>;
};
