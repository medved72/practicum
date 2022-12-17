import { FC } from "react";
import { CardHeader, Typography } from "@shared/components";
import Link from "next/link";
import { VacancyDto } from "@shared/api";

import styles from "./vacancy-list-item.module.scss";

export const VacancyListItem: FC<{
  prefix?: string;
  vacancy: VacancyDto;
}> = ({ prefix, vacancy }) => {
  return (
    <div className={styles.vacancyListItem}>
      <div className={styles.vacancyListItem__descriptionBlock}>
        <div>
          {!!prefix && (
            <CardHeader className={styles.vacancyListItem__prefix} size="l">
              {prefix}
            </CardHeader>
          )}
          <CardHeader className={styles.vacancyListItem__name} size="l">
            {vacancy.name}
          </CardHeader>
        </div>
        <Typography.Text
          className={styles.vacancyListItem__description}
          size="l"
        >
          {vacancy.description}
        </Typography.Text>
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
