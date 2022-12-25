import { ComponentProps, FC } from "react";
import { StepCard } from "./step-card";

import { Grid, Typography } from "@shared/components";
import RoleImage from "@shared/assets/images/steps-role.svg";
import RequestImage from "@shared/assets/images/steps-request.svg";
import LearningImage from "@shared/assets/images/steps-learning.svg";
import ShareKnowledgeImage from "@shared/assets/images/steps-share-knowledge.svg";
import { useIsMobile } from "@shared/hooks";
import Slider from "react-slick";

import { NessiCard } from "./nessi-card";

import styles from "./steps.module.scss";

const settings: ComponentProps<typeof Slider> = {
  speed: 300,
  slidesToShow: 1,
  variableWidth: true,
  touchMove: true,
  swipeToSlide: true,
  dots: true,
};

export const StepsMobile: FC = () => {
  return (
    <div className={styles.steps}>
      <Typography.Header
        className={styles.steps__header}
        as="h2"
        type="header-2"
      >
        Как стать экспертом Практикума
      </Typography.Header>
      <Slider className={styles.slickSlider} {...settings}>
        <StepCard
          previewImage={<RoleImage />}
          title="Выберите роль"
          description="Определитесь с курсом и&nbsp;поймите, что ближе: быть наставником или&nbsp;ревьюером"
        />
        <StepCard
          previewImage={<RequestImage />}
          title="Заполните заявку"
          description="Начать можно прямо сейчас. Даже если нет предложений, мы&nbsp;свяжемся с&nbsp;вами"
        />
        <StepCard
          previewImage={<LearningImage />}
          title="Пройдите обучение"
          description="Пригласим на&nbsp;двухнедельное бесплатное обучение для&nbsp;прокачки софтов"
        />
        <StepCard
          previewImage={<ShareKnowledgeImage />}
          title="Делитесь знаниями"
          description="Студенты Практикума ждут поддержки опытных коллег на&nbsp;курсах"
        />
      </Slider>

      <NessiCard />
    </div>
  );
};

export const StepsDesktop: FC = () => {
  return (
    <div className={styles.steps}>
      <Typography.Header
        className={styles.steps__header}
        as="h2"
        type="header-2"
      >
        Как стать экспертом Практикума
      </Typography.Header>
      <Grid>
        <Grid.Item>
          <StepCard
            previewImage={<RoleImage />}
            title="Выберите роль"
            description="Определитесь с курсом и&nbsp;поймите, что ближе: быть наставником или&nbsp;ревьюером"
          />
        </Grid.Item>
        <Grid.Item>
          <StepCard
            previewImage={<RequestImage />}
            title="Заполните заявку"
            description="Начать можно прямо сейчас. Даже если нет предложений, мы&nbsp;свяжемся с&nbsp;вами"
          />
        </Grid.Item>
        <Grid.Item>
          <StepCard
            previewImage={<LearningImage />}
            title="Пройдите обучение"
            description="Пригласим на&nbsp;двухнедельное бесплатное обучение для&nbsp;прокачки софтов"
          />
        </Grid.Item>
        <Grid.Item>
          <StepCard
            previewImage={<ShareKnowledgeImage />}
            title="Делитесь знаниями"
            description="Студенты Практикума ждут поддержки опытных коллег на&nbsp;курсах"
          />
        </Grid.Item>
        <Grid.Item span="4">
          <NessiCard />
        </Grid.Item>
      </Grid>
    </div>
  );
};

export const Steps: FC = () => {
  const isMobile = useIsMobile();

  if (isMobile) {
    return <StepsMobile />;
  }

  return <StepsDesktop />;
};
