import { FC } from "react";
import { StepCard } from "@features/steps/step-card";

import { Grid, Typography } from "@shared/components";
import RoleImage from "@shared/assets/images/steps-role.svg";
import RequestImage from "@shared/assets/images/steps-request.svg";
import LearningImage from "@shared/assets/images/steps-learning.svg";
import ShareKnowledgeImage from "@shared/assets/images/steps-share-knowledge.svg";
import NessiImage from "@shared/assets/images/steps-nessi.svg";

import styles from "./steps.module.scss";
import { NessiCard } from "@features/steps/nessi-card";

export const Steps: FC = () => {
  return (
    <div className={styles.steps}>
      <Typography.Header className={styles.steps__header} level={2}>
        Как стать экспертом Практикума
      </Typography.Header>
      <Grid>
        <Grid.Item>
          <StepCard
            previewImage={<RoleImage />}
            title="Выберите роль"
            description="Определитесь с курсом и поймите, что ближе: быть наставником или ревьюером"
          />
        </Grid.Item>
        <Grid.Item>
          <StepCard
            previewImage={<RequestImage />}
            title="Заполните заявку"
            description="Начать можно прямо сейчас. Даже если нет предложений, мы свяжемся с вами"
          />
        </Grid.Item>
        <Grid.Item>
          <StepCard
            previewImage={<LearningImage />}
            title="Пройдите обучение"
            description="Пригласим на двухнедельное бесплатное обучение для прокачки софтов"
          />
        </Grid.Item>
        <Grid.Item>
          <StepCard
            previewImage={<ShareKnowledgeImage />}
            title="Делитесь знаниями"
            description="Студенты Практикума ждут поддержки опытных коллег на курсах"
          />
        </Grid.Item>
        <Grid.Item span="4">
          <NessiCard />
        </Grid.Item>
      </Grid>
    </div>
  );
};
