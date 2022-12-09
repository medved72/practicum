import { ReactNode } from "react";
import { RoleTabContent } from "./role-tab-content";

export enum Role {
  mentor = "mentor",
  reviewer = "reviewer",
}

export const makeRolesTabsMap = (
  from: Role[]
): { key: string; name: string; content: ReactNode }[] => {
  const RoleTitle: Record<Role, string> = {
    mentor: "Наставник",
    reviewer: "Ревьюер",
  };

  const RoleDescription: Record<Role, string[]> = {
    mentor: [
      "Помогает студентам рефлексировать, ставить цели, и делать выводы",
      "Проводит вебинары 2 раза в месяц и дает обратную связь по работам студентов",
      "Отвечает на вопросы студентов в чате",
      "Делится опытом и мотивиует своим примером",
    ],
    reviewer: [
      "Проверяет код и проекты студентов",
      "Простыми словами объясняет им их ошибки",
      "Дает корректирующую обратную связь",
      "Оценивает работы стендентов ",
    ],
  };

  return from.map((role): { key: string; name: string; content: ReactNode } => {
    return {
      key: role,
      name: RoleTitle[role],
      content: <RoleTabContent description={RoleDescription[role]} />,
    };
  });
};
