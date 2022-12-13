import { FC } from "react";
import { Typography } from "@shared/components";
import FacultativeManagementImage from "@shared/assets/images/facultative-management.svg";
import FacultativeDesignImage from "@shared/assets/images/facultative-design.svg";
import FacultativeDataAnalyzingImage from "@shared/assets/images/facultative-data-analyzing.svg";
import FacultativeMarketingImage from "@shared/assets/images/facultative-marketing.svg";
import FacultativeProgrammingImage from "@shared/assets/images/facultative-programming.svg";

import { DirectionCard } from "./direction-card";

import styles from "./directions-block.module.scss";

export const DirectionsBlock: FC = () => {
  return (
    <div className={styles.directionsBlock}>
      <Typography.Header className={styles.directionsBlock__header} level={2}>
        Помогаем развиваться по направлениям
      </Typography.Header>
      <div className={styles.directionsBlock__cards}>
        <DirectionCard
          previewImage={<FacultativeManagementImage />}
          header="Менеджмент"
          text="Интернет-маркетинг и управление трафиком"
        />
        <DirectionCard
          previewImage={<FacultativeDesignImage />}
          header="Дизайн"
          text="Графический, коммуникационный, для интерфейсов и продуктов"
        />
        <DirectionCard
          previewImage={<FacultativeDataAnalyzingImage />}
          header="Анализ данных"
          text="SQL, аналитика, Data Science  и архитектура данных"
        />
        <DirectionCard
          previewImage={<FacultativeMarketingImage />}
          header="Маркентинг"
          text="Интернет-маркетинг и управление трафиком"
        />
        <DirectionCard
          previewImage={<FacultativeProgrammingImage />}
          header="Программирование"
          text="Тестирование, фронтенд, бэкенд, DevOps и алгоритмы"
        />
        <DirectionCard
          header="Все курсы"
          text="76 программ для обучения онлайн"
        />
      </div>
    </div>
  );
};
