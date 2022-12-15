import { VacancyCategory, VacancyDto, VacancyType } from "@shared/api";

export interface VacancyGroupItem {
  category: VacancyCategory;
  vacancies: VacancyDto[];
}

export interface VacancyListItem {
  type: VacancyType;
  vacancyGroups: VacancyGroupItem[];
}

export interface VacancyBlockProps {
  vacancies: VacancyListItem[];
}
