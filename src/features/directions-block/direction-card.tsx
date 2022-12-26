import { FC, ReactNode } from "react";
import { Button, Card, Typography } from "@shared/components";
import { cn } from "@shared/utils";
import { useIsMobile } from "@shared/hooks";
import ArrowMobImage from "@shared/assets/images/arrow_mob.svg";

import styles from "./direction-card.module.scss";

const DirectionCardMobile: FC<{
  header: string;
  previewImage: ReactNode;
  text: string;
}> = ({ header, text, previewImage }) => {
  return (
    <Card className={cn([styles.directionCard])}>
      <div onClick={() => alert(`Переход на страницу "${header}"`)}>
        <Typography.Header
          className={styles.directionCard__header}
          as="h3"
          type="card-header-l"
        >
          {header}
          <Button
            className={styles.directionCard__goToFullDescription}
            type="icon"
          >
            <ArrowMobImage />
          </Button>
        </Typography.Header>
        <Typography.Text
          className={styles.directionCard__shortDescription}
          size="s"
        >
          {text}
        </Typography.Text>
        <div className={styles.directionCard__imageWrapper}>{previewImage}</div>
      </div>
    </Card>
  );
};

const DirectionCardDesktop: FC<{
  header: string;
  previewImage: ReactNode;
  text: string;
  hidePreviewOnDesktop?: boolean;
}> = ({ header, text, previewImage, hidePreviewOnDesktop }) => {
  return (
    <Card
      className={cn([
        styles.directionCard,
        !hidePreviewOnDesktop && styles.withImage,
      ])}
      color="white"
    >
      {!hidePreviewOnDesktop && (
        <div className={styles.directionCard__front}>
          <Typography.Header
            className={styles.directionCard__header}
            as="h3"
            type="card-header-l"
          >
            {header}
          </Typography.Header>
          <div className={styles.directionCard__imageWrapper}>
            {previewImage}
          </div>
        </div>
      )}

      <div
        className={
          !hidePreviewOnDesktop
            ? styles.directionCard__back
            : styles.directionCard__front
        }
      >
        <Typography.Header
          className={styles.directionCard__header}
          type="card-header-l"
          as="h3"
        >
          {header}
        </Typography.Header>
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

export const DirectionCard: FC<{
  header: string;
  previewImage: ReactNode;
  text: string;
  hidePreviewOnDesktop?: boolean;
}> = (props) => {
  const isMobile = useIsMobile();

  if (isMobile) {
    return <DirectionCardMobile {...props} />;
  }

  return <DirectionCardDesktop {...props} />;
};
