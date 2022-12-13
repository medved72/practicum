import { FC } from "react";
import { Button, Typography } from "@shared/components";
import InvitationPeoplesPng from "@shared/assets/images/invitation-people.png";
import Image from "next/image";
import styles from "./invitation-block.module.scss";

export const InvitationBlock: FC = () => {
  return (
    <div className={styles.invitationBlock}>
      <div className={styles.message}>
        <Typography.Header level={1} className={styles.title}>
          Станьте наставником или ревьюером
        </Typography.Header>
        <Typography.Text className={styles.text} size={"s"}>
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
