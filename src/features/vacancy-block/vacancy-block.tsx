import { FC } from "react";
import { Typography, Tabs } from "@shared/components";
import Arrow from "@shared/assets/images/roles-arrow.svg";

import { mentorVacancies, reviewerVacancies } from "./data";
import { VacancyList } from "./vacancy-list";
import styles from "./vacancy-block.module.scss";

export const VacancyBlock: FC = () => {
  return (
    <div className={styles.vacancyBlock}>
      <div className={styles.vacancyBlock__arrow}>
        <Arrow />
      </div>
      <Typography.Header className={styles.vacancyBlock__header} level={2}>
        Наши открытые предложения
      </Typography.Header>
      <Tabs
        tabs={[
          {
            key: "mentor",
            name: "Наставник",
            content: (
              <VacancyList
                key="mentor"
                vacancyPrefix="Наставник на курс"
                vacancyGroups={mentorVacancies}
              />
            ),
          },
          {
            key: "reviewer",
            name: "Ревьюер",
            content: (
              <VacancyList
                key="reviewer"
                vacancyPrefix="Ревьюер на курс"
                vacancyGroups={reviewerVacancies}
              />
            ),
          },
        ]}
      />
    </div>
  );
};
