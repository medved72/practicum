import { VacancyCategory, VacancyType } from "@shared/api";

export const VacancyTypeToLabelMap: Record<VacancyType, string> = {
  [VacancyType.MENTOR]: "Для наставников",
  [VacancyType.REVIEWER]: "Для ревьюеров",
};

export const VacancyTypeToPrefixMap: Record<VacancyType, string> = {
  [VacancyType.MENTOR]: "Наставник на курс",
  [VacancyType.REVIEWER]: "Ревьюер на курс",
};

export const CategoryToLabelMap: Record<VacancyCategory, string> = {
  [VacancyCategory.DESIGN]: "Дизайн",
  [VacancyCategory.DATA_ANALYZING]: "Анализ данных",
  [VacancyCategory.MANAGEMENT]: "Менеджмент",
  [VacancyCategory.MARKETING]: "Маркетинг",
  [VacancyCategory.PROGRAMMING]: "Программирование",
};
