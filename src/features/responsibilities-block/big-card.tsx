import { FC } from "react";
import Image from "next/image";
import { Card, Typography } from "@shared/components";
import { cn } from "@shared/utils";
import { Responsibility } from "./data";

import styles from "./big-card.module.scss";

interface BigCardProps {
  title: string;
  text: string;
  image: Responsibility["image"];
}

export const BigCard: FC<BigCardProps> = ({ title, text, image }) => {
  return (
    <Card className={styles.bigCard}>
      <Card.Header className={styles.bigCard__header} size="l">
        {title}
      </Card.Header>
      <Typography.Text
        className={cn([styles.bigCard__text, styles.cardText])}
        size="s"
      >
        {text}
      </Typography.Text>
      <div className={styles.bigCard__image}>
        <picture>
          <source media="(max-width: 980px)" srcSet={image.srcSet.mobile.src} />
          <Image
            className={styles.bigCard__image}
            src={image.srcSet.desktop}
            alt={image.alt}
          />
        </picture>
      </div>
    </Card>
  );
};
