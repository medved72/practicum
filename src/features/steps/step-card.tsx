import { FC, ReactNode } from "react";
import { Card, Typography } from "@shared/components";
import styles from "./step-card.module.scss";

export const StepCard: FC<{
  previewImage: ReactNode;
  title: string;
  description: string;
}> = ({ previewImage, title, description }) => {
  return (
    <Card className={styles.stepCard}>
      {previewImage}
      <div className={styles.stepCard__description}>
        <Typography.Header as="h3" type="card-header-s">
          {title}
        </Typography.Header>
        <Typography.Text className={styles.stepCard__descriptionText} size="s">
          {description}
        </Typography.Text>
      </div>
    </Card>
  );
};
