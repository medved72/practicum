import { FC } from "react";
import { Button, Typography } from "@shared/components";
import { InvitationBlockImage } from "./invitation-block-image";

import styles from "./invitation-block.module.scss";

export const InvitationBlock: FC = () => {
  return (
    <div className={styles.invitationBlock}>
      <Typography.Header className={styles.title} as="h1" type="header-1">
        Станьте наставником или ревьюером
      </Typography.Header>
      <Typography.Text className={styles.text} size={"s"}>
        Делитесь своим опытом в программировании, анализе данных, менеджменте,
        маркетинге или дизайне и&nbsp;получайте дополнительный доход
      </Typography.Text>
      <div className={styles.imageWrapper}>
        <InvitationBlockImage />
      </div>
      <Button className={styles.button}>Хочу делиться знаниями</Button>
    </div>
  );
};
