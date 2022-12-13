import { FC, ReactNode } from "react";
import CrossImage from "../../assets/images/cross.svg";
import styles from "./accordion.module.scss";
import { Typography } from "../index";

const AccordionItem: FC<{ label: string; children: ReactNode }> = ({
  label,
  children,
}) => {
  return (
    <div className={styles.item}>
      <label className={styles.label}>
        <input type="checkbox" />
        <Typography.Header level={3}>{label}</Typography.Header>
        <div className={styles.crossIcon}>
          <CrossImage />
        </div>
      </label>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export const Accordion: FC<{ children: ReactNode }> & {
  Item: typeof AccordionItem;
} = ({ children }) => {
  return <div className={styles.accordion}>{children}</div>;
};

Accordion.Item = AccordionItem;
