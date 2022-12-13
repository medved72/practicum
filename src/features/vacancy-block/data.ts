export interface Vacancy {
  id: string;
  title: string;
  description: string;
}

export interface VacancyGroup {
  name: string;
  vacancies: Vacancy[];
}

export const reviewerVacancies: VacancyGroup[] = [
  {
    name: "Программирование",
    vacancies: [
      {
        id: "middle-frontend-reviewer",
        title: "«Мидл фронтенд-разработчик»",
        description: "(Оплата за ведение группы) (В среднем 35 000 ₽ в месяц)",
      },
    ],
  },
  { name: "Анализ данных", vacancies: [] },
  { name: "Дизайн", vacancies: [] },
  { name: "Маркетинг", vacancies: [] },
  { name: "Менеджмент", vacancies: [] },
];

export const mentorVacancies: VacancyGroup[] = [
  {
    name: "Программирование",
    vacancies: [
      {
        id: "middle-frontend-mentor",
        title: "«Мидл фронтенд-разработчик»",
        description: "(Оплата за ведение группы) (В среднем 35 000 ₽ в месяц)",
      },
    ],
  },
  { name: "Анализ данных", vacancies: [] },
  { name: "Дизайн", vacancies: [] },
  { name: "Маркетинг", vacancies: [] },
  { name: "Менеджмент", vacancies: [] },
];
