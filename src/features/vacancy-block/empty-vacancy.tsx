import { FC } from "react";
import { VacancyListItem } from "@features/vacancy-block/vacancy-list-item";

export const EmptyVacancy: FC = () => {
  return (
    <VacancyListItem
      vacancy={{
        id: "not-found",
        title: "Таких вакансий пока нет ",
        description:
          "Оставьте заявку на вакансию, когда будут места мы с вами свяжимся",
      }}
    />
  );
};
