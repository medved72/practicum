import { FC } from "react";
import { Button, Typography } from "@shared/components";
import styles from "./nessi-card.module.scss";

export const NessiCard: FC = () => {
  return (
    <div className={styles.nessiCard}>
      <Typography.Header className={styles.nessiCard__header} level={3}>
        Станьте частью команды и вдохновляйте своих первых студентов
      </Typography.Header>
      <Button className={styles.nessiCard__button} disabledHover>
        Стать частью команды
      </Button>
    </div>
  );
};
