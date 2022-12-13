import { FC, ReactNode } from "react";
import styles from "./card.module.scss";
import { CardHeader } from "./card-header";
import { cn } from "@shared/utils";

export const Card: FC<{
  className?: string;
  children?: ReactNode;
  color?: "white" | "blue";
}> & { Header: typeof CardHeader } = ({
  className,
  children,
  color = "white",
}) => {
  return (
    <div className={cn([className, styles.card, styles[`card-${color}`]])}>
      {children}
    </div>
  );
};

Card.Header = CardHeader;
