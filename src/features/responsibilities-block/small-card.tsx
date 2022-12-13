import { FC } from "react";
import { Card, Typography } from "@shared/components";

import styles from "./small-card.module.scss";

export interface SmallCardProps {
  title: string;
  text: string;
}

export const SmallCard: FC<SmallCardProps> = ({ text, title }) => {
  return (
    <Card color="blue" className={styles.smallCard}>
      <Card.Header size="l">{title}</Card.Header>
      <Typography.Text className={styles.smallCard__text} size="s">
        {text}
      </Typography.Text>
    </Card>
  );
};
