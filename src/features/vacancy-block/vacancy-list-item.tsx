import { FC } from "react";
import { CardHeader, Typography } from "@shared/components";
import { useRouter } from "next/router";
import Link from "next/link";
import { ResponseToJob } from "@widgets/response-to-job";
import { VacancyDto } from "@shared/api";
import { ModalPage } from "@shared/components/modal-page";

import styles from "./vacancy-list-item.module.scss";

export const VacancyListItem: FC<{
  prefix?: string;
  vacancy: VacancyDto;
}> = ({ prefix, vacancy }) => {
  return (
    <div className={styles.vacancyListItem}>
      <div className={styles.vacancyListItem__description}>
        <div>
          {!!prefix && <CardHeader size="l">{prefix}</CardHeader>}
          <CardHeader size="l">{vacancy.name}</CardHeader>
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
