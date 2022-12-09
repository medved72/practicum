import { FC } from "react";
import { Accordion } from "@shared/components";

import { VacancyListItem } from "./vacancy-list-item";
import { EmptyVacancy } from "./empty-vacancy";
import { VacancyGroup } from "./data";

import styles from "./vacancy-list.module.scss";

export const VacancyList: FC<{
  vacancyPrefix: string;
  vacancyGroups: VacancyGroup[];
}> = ({ vacancyGroups, vacancyPrefix }) => {
  return (
    <div className={styles.vacancyList}>
      <Accordion>
        {vacancyGroups.map((vacancyGroup) => (
          <Accordion.Item key={vacancyGroup.name} label={vacancyGroup.name}>
            {vacancyGroup.vacancies.length > 0 ? (
              vacancyGroup.vacancies.map((vacancy) => (
                <VacancyListItem
                  key={vacancy.id}
                  prefix={vacancyPrefix}
                  vacancy={vacancy}
                />
              ))
            ) : (
              <EmptyVacancy />
            )}
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
};
