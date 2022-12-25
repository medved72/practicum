import { FC } from "react";
import { Typography } from "@shared/components";
import { VacancyDto } from "@shared/api";

import styles from "./response-to-job-description.module.scss";

type ResponseToJobDescriptionProps = Pick<
  VacancyDto,
  "requirements" | "terms" | "responsibilities"
>;

export const ResponseToJobDescription: FC<ResponseToJobDescriptionProps> = ({
  responsibilities,
  requirements,
  terms,
}) => {
  return (
    <div className={styles.responseToJobDescription}>
      <section className={styles.section}>
        <Typography.Header as="h3" type="header-3">
          Обязанности
        </Typography.Header>
        <div className={styles.skills}>
          {responsibilities.map((item, index) => (
            <Typography.Text key={index} size="l">
              {item}
            </Typography.Text>
          ))}
        </div>
      </section>
      <section className={styles.section}>
        <Typography.Header as="h3" type="header-3">
          Требования
        </Typography.Header>
        <div className={styles.skills}>
          {requirements.map((item, index) => (
            <Typography.Text key={index} size="l">
              {item}
            </Typography.Text>
          ))}
        </div>
      </section>
      <section className={styles.section}>
        <Typography.Header as="h3" type="header-3">
          Условия
        </Typography.Header>
        <div className={styles.skills}>
          {terms.map((item, index) => (
            <Typography.Text key={index} size="l">
              {item}
            </Typography.Text>
          ))}
        </div>
      </section>
    </div>
  );
};
