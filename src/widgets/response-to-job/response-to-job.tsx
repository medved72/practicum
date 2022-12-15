import { FC, useEffect, useState } from "react";
import { ContentBlock, Typography } from "@shared/components";
import { ResponseToJobForm } from "@features/response-to-job-form";
import { ResponseToJobDescription } from "@features/response-to-job-description";

import styles from "./response-to-job.module.scss";
import { getVacancyById, VacancyDto, VacancyType } from "@shared/api";

interface ResponseToJobProps {
  vacancyId?: string;
}

const prefixTitleMap: Record<VacancyType, string> = {
  [VacancyType.MENTOR]: "Наставник на курс",
  [VacancyType.REVIEWER]: "Ревьюер на курс",
};

export const ResponseToJob: FC<ResponseToJobProps> = ({ vacancyId }) => {
  const [vacancy, setVacancy] = useState<VacancyDto | null>(null);

  useEffect(() => {
    if (!!vacancyId) {
      getVacancyById(vacancyId).then(setVacancy);
    }
  }, [vacancyId]);

  if (!vacancyId || !vacancy) {
    return <ContentBlock>Вакансия не найдена</ContentBlock>;
  }

  return (
    <ContentBlock className={styles.responseToJob}>
      <Typography.Header level={1}>
        {prefixTitleMap[vacancy.type]} <br /> {vacancy.name}
      </Typography.Header>
      <div className={styles.responseToJob__sections}>
        <div className={styles.responseToJob__form}>
          <Typography.Header level={3}>
            Откликнуться на&nbsp;предложение
          </Typography.Header>
          <ResponseToJobForm />
        </div>
        <div className={styles.responseToJob__description}>
          <ResponseToJobDescription />
        </div>
      </div>
    </ContentBlock>
  );
};
