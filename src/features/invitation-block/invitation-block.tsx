import { FC } from "react";
import { Button, Typography } from "@shared/components";
import { InvitationBlockImage } from "./invitation-block-image";

import styles from "./invitation-block.module.scss";

export const InvitationBlock: FC = () => {
  return (
    <div className={styles.invitationBlock}>
      <Typography.Header level={1} className={styles.title}>
        Станьте наставником или ревьюером
      </Typography.Header>
      <Typography.Text className={styles.text} size={"s"}>
        Делитесь своим опытом в программировании, анализе данных, менеджменте,
        маркетинге или дизайне и&nbsp;получайте дополнительный доход
      </Typography.Text>
      <Button className={styles.button}>Хочу делиться знаниями</Button>
      <div className={styles.imageWrapper}>
        <InvitationBlockImage />
      </div>
    </div>
  );
};
