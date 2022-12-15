export enum VacancyCategory {
  PROGRAMMING = "PROGRAMMING",
  DATA_ANALYZING = "DATA_ANALYZING",
  DESIGN = "DESIGN",
  MARKETING = "MARKETING",
  MANAGEMENT = "MANAGEMENT",
}

export enum VacancyType {
  MENTOR = "MENTOR",
  REVIEWER = "REVIEWER",
}

export interface VacancyDto {
  id: string;
  type: VacancyType;
  category: VacancyCategory;
  name: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  terms: string[];
}

const vacancies: VacancyDto[] = [
  {
    id: "middle-frontend-mentor",
    type: VacancyType.MENTOR,
    name: "«Мидл фронтенд-разработчик»",
    description: "(Оплата за ведение группы) (В среднем 35 000 ₽ в месяц)",
    category: VacancyCategory.PROGRAMMING,
    requirements: [
      "Помощь студентам в учебной деятельности",
      "Курирование группы из 50 студентов",
      "Общение со студентами и сотрудниками Практикума через в Slack",
      "Проводить групповые звонки 2-3 часа в день",
    ],
    responsibilities: [
      "Опыт работы программистом больше трех лет",
      "Владение HTML, CSS",
      "Практиковались с JavaScript, React, TypeScript, Node.js",
      "Работа по проекту от 8 до 12 часов в неделю",
    ],
    terms: [
      "Удалённое сотрудничество и ежемесячное вознаграждение",
      "Частичная занятость и возможность совмещать участие в проекте с основной работой",
      "Обмен опытом с разработчиками в нашем сообществе",
      "Обучение в Школе наставников Яндекс.Практикума",
    ],
  },
  {
    id: "middle-frontend-reviewer",
    type: VacancyType.REVIEWER,
    name: "«Мидл фронтенд-разработчик»",
    description: "(Оплата за ведение группы) (В среднем 35 000 ₽ в месяц)",
    category: VacancyCategory.PROGRAMMING,
    requirements: [
      "Помощь студентам в учебной деятельности",
      "Курирование группы из 50 студентов",
      "Общение со студентами и сотрудниками Практикума через в Slack",
      "Проводить групповые звонки 2-3 часа в день",
    ],
    responsibilities: [
      "Опыт работы программистом больше трех лет",
      "Владение HTML, CSS",
      "Практиковались с JavaScript, React, TypeScript, Node.js",
      "Работа по проекту от 8 до 12 часов в неделю",
    ],
    terms: [
      "Удалённое сотрудничество и ежемесячное вознаграждение",
      "Частичная занятость и возможность совмещать участие в проекте с основной работой",
      "Обмен опытом с разработчиками в нашем сообществе",
      "Обучение в Школе наставников Яндекс.Практикума",
    ],
  },
];

export const getVacancies = async (): Promise<VacancyDto[]> => {
  return vacancies;
};

export const getVacanciesByCategories = async (
  categories: VacancyCategory[]
): Promise<Record<VacancyCategory, VacancyDto[]>> => {
  const groupedByCategory = vacancies.reduce<
    Record<VacancyCategory, VacancyDto[]>
  >((acc, vacancy) => {
    if (acc[vacancy.category]) {
      acc[vacancy.category].push(vacancy);
    } else {
      acc[vacancy.category] = [vacancy];
    }
    return acc;
  }, {} as Record<VacancyCategory, VacancyDto[]>);

  return categories.reduce<Record<VacancyCategory, VacancyDto[]>>(
    (acc, category) => {
      acc[category] = groupedByCategory[category] ?? [];
      return acc;
    },
    {} as Record<VacancyCategory, VacancyDto[]>
  );
};

export const getVacancyById = async (
  id: string
): Promise<VacancyDto | null> => {
  return vacancies.find((vacancy) => vacancy.id === id) ?? null;
};
