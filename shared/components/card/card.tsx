import { FC, ReactNode } from "react";
import styles from "./card.module.scss";
import { CardHeader } from "@shared/components/card/card-header";

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
    <div className={`${className} ${styles.card} ${styles[`card-${color}`]}`}>
      {children}
    </div>
  );
};

Card.Header = CardHeader;
