import { FC } from "react";
import { ResponseToJobForm } from "@features/response-to-job-form";
import { ResponseToJobDescription } from "@features/response-to-job-description";
import { VacancyNotFound } from "@features/vacancy-not-found";
import { ContentBlock, Typography } from "@shared/components";
import { VacancyDto, VacancyType } from "@shared/api";

import styles from "./response-to-job.module.scss";

interface ResponseToJobProps {
  vacancy: VacancyDto | null;
}

const prefixTitleMap: Record<VacancyType, string> = {
  [VacancyType.MENTOR]: "Наставник на курс",
  [VacancyType.REVIEWER]: "Ревьюер на курс",
};

export const ResponseToJob: FC<ResponseToJobProps> = ({ vacancy }) => {
  if (!vacancy) {
    return <VacancyNotFound />;
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
          <ResponseToJobDescription
            responsibilities={vacancy.responsibilities}
            terms={vacancy.terms}
            requirements={vacancy.requirements}
          />
        </div>
      </div>
    </ContentBlock>
  );
};
