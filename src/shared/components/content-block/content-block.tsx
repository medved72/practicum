import { FC, ReactNode } from "react";
import styles from "./content-block.module.scss";
import { cn } from "@shared/utils";

export const ContentBlock: FC<{ children?: ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  return <div className={cn([styles.content, className])}>{children}</div>;
};
