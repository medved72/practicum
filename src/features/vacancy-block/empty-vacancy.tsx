import { FC } from "react";
import { VacancyListItem } from "./vacancy-list-item";
import { VacancyDto } from "@shared/api";

export const EmptyVacancy: FC = () => {
  return (
    <VacancyListItem
      vacancy={
        {
          id: "not-found",
          name: "Таких вакансий пока нет ",
          description:
            "Оставьте заявку на вакансию, когда будут места мы с вами свяжимся",
        } as VacancyDto
      }
    />
  );
};
