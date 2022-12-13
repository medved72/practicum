import { FC } from "react";
import { Button, Card, Typography } from "@shared/components";
import NessiImage from "@shared/assets/images/steps-nessi.svg";
import styles from "./nessi-card.module.scss";

export const NessiCard: FC = () => {
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
