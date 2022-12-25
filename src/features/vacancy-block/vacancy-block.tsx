import { ComponentProps, FC, useMemo } from "react";
import { Typography, Tabs } from "@shared/components";
import Arrow from "@shared/assets/images/roles-arrow.svg";

import { VacancyList } from "./vacancy-list";
import { VacancyBlockProps } from "./vacancy-block.model";
import {
  VacancyTypeToLabelMap,
  VacancyTypeToPrefixMap,
} from "./vacancy-block.const";

import styles from "./vacancy-block.module.scss";

export const VacancyBlock: FC<VacancyBlockProps> = ({ vacancies }) => {
  const tabs = useMemo((): ComponentProps<typeof Tabs>["tabs"] => {
    return vacancies.map((vacancy) => ({
      key: vacancy.type,
      name: VacancyTypeToLabelMap[vacancy.type],
      content: (
        <VacancyList
          key={vacancy.type}
          vacancyPrefix={VacancyTypeToPrefixMap[vacancy.type]}
          vacancyGroups={vacancy.vacancyGroups}
        />
      ),
    }));
  }, [vacancies]);

  return (
    <div id="vacancies" className={styles.vacancyBlock}>
      <div className={styles.vacancyBlock__arrow}>
        <Arrow />
      </div>
      <Typography.Header
        className={styles.vacancyBlock__header}
        as="h2"
        type="header-2"
      >
        Наши открытые предложения
      </Typography.Header>
      <Tabs tabs={tabs} />
    </div>
  );
};
