import { FC } from "react";
import { Button, Typography } from "@shared/components";
import InvitationPeoplesPng from "@shared/assets/invitation-people.png";
import Image from "next/image";
import styles from "./invitation-block.module.scss";

export const InvitationBlock: FC = () => {
  return (
    <div className={styles.invitationBlock}>
      <div className={styles.message}>
        <Typography.Title className={styles.title}>
          Станьте наставником или ревьюером
        </Typography.Title>
        <Typography.Text className={styles.text}>
          Делитесь своим опытом в программировании, анализе данных, менеджменте,
          маркетинге или дизайне и&nbsp;получайте дополнительный доход
        </Typography.Text>
        <Button>Хочу делиться знаниями</Button>
      </div>
      <div className={styles.imageWrapper}>
        <Image className={styles.image} src={InvitationPeoplesPng} alt="" />
      </div>
    </div>
  );
};
