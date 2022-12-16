import { FC } from "react";
import { Button, Card, Typography } from "@shared/components";
import NessiImage from "@shared/assets/images/steps-nessi.svg";
import NessiLeftMobileImage from "@shared/assets/images/nessi-mobile-left.svg";
import NessiRightMobileImage from "@shared/assets/images/nessi-mobile-right.svg";
import styles from "./nessi-card.module.scss";
import { useIsMobile } from "@shared/hooks";

const NessiCardDesktop: FC = () => {
  return (
    <Card className={styles.nessiCard}>
      <div className={styles.nessiCard__nessiLeft}>
        <NessiImage />
      </div>
      <Typography.Header className={styles.nessiCard__header} level={3}>
        Станьте частью команды и вдохновляйте своих первых студентов
      </Typography.Header>
      <Button className={styles.nessiCard__button} disabledHover>
        Стать частью команды
      </Button>
      <div className={styles.nessiCard__nessiRight}>
        <NessiImage />
      </div>
    </Card>
  );
};

export const NessiCardMobile: FC = () => {
  return (
    <div className={styles.nessiCard}>
      <div className={styles.nessiCard__nessiLeft}>
        <NessiLeftMobileImage />
      </div>
      <div className={styles.nessiCard__nessiRight}>
        <NessiRightMobileImage />
      </div>
      <Typography.Header className={styles.nessiCard__header} level={3}>
        Станьте частью команды Практикума и вдохновляйте своих первых студентов
      </Typography.Header>
      <Button className={styles.nessiCard__button} disabledHover>
        Стать частью команды
      </Button>
    </div>
  );
};

export const NessiCard: FC = () => {
  const isMobile = useIsMobile();

  if (isMobile) {
    return <NessiCardMobile />;
  }

  return <NessiCardDesktop />;
};
