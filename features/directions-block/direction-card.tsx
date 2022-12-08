import { FC, ReactNode } from "react";
import { Button, Card, Typography } from "@shared/components";
import styles from "./direction-card.module.scss";
import { cn } from "@shared/utils/className";

export const DirectionCard: FC<{
  header: string;
  previewImage?: ReactNode;
  text: string;
}> = ({ header, text, previewImage }) => {
  const hasPreview = !!previewImage;

  return (
    <Card
      className={cn([styles.directionCard, hasPreview && styles.withImage])}
      color="white"
    >
      {hasPreview && (
        <div className={styles.directionCard__front}>
          <Card.Header className={styles.directionCard__header} size="l">
            {header}
          </Card.Header>
          <div className={styles.directionCard__imageWrapper}>
            {previewImage}
          </div>
        </div>
      )}

      <div
        className={
          hasPreview ? styles.directionCard__back : styles.directionCard__front
        }
      >
        <Card.Header className={styles.directionCard__header} size="l">
          {header}
        </Card.Header>
        <Typography.Text
          className={styles.directionCard__shortDescription}
          size="s"
        >
          {text}
        </Typography.Text>
        <Button
          className={styles.directionCard__goToFullDescription}
          size="small"
        >
          Подробнее
        </Button>
      </div>
    </Card>
  );
};
