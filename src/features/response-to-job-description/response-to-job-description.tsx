import { FC } from "react";
import { Typography } from "@shared/components";

import styles from "./response-to-job-description.module.scss";

interface ResponseToJobDescriptionProps {}

export const ResponseToJobDescription: FC<
  ResponseToJobDescriptionProps
> = () => {
  return (
    <div className={styles.responseToJobDescription}>
      <section className={styles.section}>
        <Typography.Header level={3}>Обязанности</Typography.Header>
        <div className={styles.skills}>
          <Typography.Text size="l">
            Помощь студентам в учебной деятельности
          </Typography.Text>
          <Typography.Text size="l">
            Курирование группы из 50 студентов
          </Typography.Text>
          <Typography.Text size="l">
            Общение со студентами и сотрудниками Практикума через в Slack
          </Typography.Text>
          <Typography.Text size="l">
            Проводить групповые звонки 2-3 часа в день
          </Typography.Text>
        </div>
      </section>
      <section className={styles.section}>
        <Typography.Header level={3}>Требования</Typography.Header>
        <div className={styles.skills}>
          <Typography.Text size="l">
            Опыт работы программистом больше трех лет
          </Typography.Text>
          <Typography.Text size="l">Владение HTML, CSS</Typography.Text>
          <Typography.Text size="l">
            Практиковались с JavaScript, React, TypeScript, Node.js
          </Typography.Text>
          <Typography.Text size="l">
            Работа по проекту от 8 до 12 часов в неделю
          </Typography.Text>
        </div>
      </section>
      <section className={styles.section}>
        <Typography.Header level={3}>Условия</Typography.Header>
        <div className={styles.skills}>
          <Typography.Text size="l">
            Удалённое сотрудничество и ежемесячное вознаграждение
          </Typography.Text>
          <Typography.Text size="l">
            Частичная занятость и возможность совмещать участие в проекте с
            основной работой
          </Typography.Text>
          <Typography.Text size="l">
            Обмен опытом с разработчиками в нашем сообществе
          </Typography.Text>
          <Typography.Text size="l">
            Обучение в Школе наставников Яндекс.Практикума
          </Typography.Text>
        </div>
      </section>
    </div>
  );
};
