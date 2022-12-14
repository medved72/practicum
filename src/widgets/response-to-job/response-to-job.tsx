import { FC } from "react";
import { ContentBlock, Typography } from "@shared/components";
import { ResponseToJobForm } from "@features/response-to-job-form";
import { ResponseToJobDescription } from "@features/response-to-job-description";

import styles from "./response-to-job.module.scss";

interface ResponseToJobProps {}

export const ResponseToJob: FC<ResponseToJobProps> = () => {
  return (
    <ContentBlock className={styles.responseToJob}>
      <Typography.Header level={1}>
        Наставник на курс <br /> «Мидл фронтенд-разработчик»
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
