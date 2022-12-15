import { FC } from "react";
import { Accordion } from "@shared/components";

import { VacancyGroupItem } from "./vacancy-block.model";
import { CategoryToLabelMap } from "./vacancy-block.const";
import { VacancyListItem } from "./vacancy-list-item";
import { EmptyVacancy } from "./empty-vacancy";

import styles from "./vacancy-list.module.scss";

interface VacancyListProps {
  vacancyPrefix: string;
  vacancyGroups: VacancyGroupItem[];
}

export const VacancyList: FC<VacancyListProps> = ({
  vacancyGroups,
  vacancyPrefix,
}) => {
  return (
    <div className={styles.vacancyList}>
      <Accordion>
        {vacancyGroups.map((vacancy) => (
          <Accordion.Item
            key={vacancy.category}
            label={CategoryToLabelMap[vacancy.category]}
          >
            {vacancy.vacancies.length > 0 ? (
              vacancy.vacancies.map((vacancy) => (
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
