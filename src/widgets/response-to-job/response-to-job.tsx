import { FC } from "react";
import { VacancyNotFound } from "./vacancy-not-found";
import { VacancyDto } from "@shared/api";

import { VacancyForm } from "@widgets/response-to-job/vacancy-form";

interface ResponseToJobProps {
  vacancy: VacancyDto | null;
}

export const ResponseToJob: FC<ResponseToJobProps> = ({ vacancy }) => {
  if (!vacancy) {
    return <VacancyNotFound />;
  }

  return <VacancyForm vacancy={vacancy} />;
};
