import { FC } from "react";
import { Typography } from "@shared/components";
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
            <Typography.Header
              className={styles.vacancyListItem__prefix}
              as="h4"
              type="card-header-l"
            >
              {prefix}
            </Typography.Header>
          )}
          <Typography.Header
            className={styles.vacancyListItem__name}
            as="h4"
            type="card-header-l"
          >
            {vacancy.name}
          </Typography.Header>
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
