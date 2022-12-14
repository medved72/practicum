import { FC } from "react";
import { Vacancy } from "./data";
import { CardHeader, Typography } from "@shared/components";
import Link from "next/link";

import styles from "./vacancy-list-item.module.scss";

export const VacancyListItem: FC<{ prefix?: string; vacancy: Vacancy }> = ({
  prefix,
  vacancy,
}) => {
  return (
    <div className={styles.vacancyListItem}>
      <div className={styles.vacancyListItem__description}>
        <div>
          {!!prefix && <CardHeader size="l">{prefix}</CardHeader>}
          <CardHeader size="l">{vacancy.title}</CardHeader>
        </div>
        <Typography.Text size="l">{vacancy.description}</Typography.Text>
      </div>
      <Link
        href={`/?vacancyId=${vacancy.id}`}
        as={`/vacancy/${vacancy.id}`}
        scroll={false}
        className={styles.vacancyListItem__detailsButton}
      >
        Подробнее
      </Link>
    </div>
  );
};
