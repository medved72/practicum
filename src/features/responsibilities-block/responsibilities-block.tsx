import { FC } from "react";
import { Grid, Typography } from "@shared/components";
import RobotPng from "@shared/assets/images/robot.png";
import YodaPng from "@shared/assets/images/yoda.png";

import { BigCard } from "./big-card";

import styles from "./responsibilities-block.module.scss";
import { SmallCard } from "@features/responsibilities-block/small-card";

export const ResponsibilitiesBlock: FC = () => {
  return (
    <div className={styles.responsibilitiesBlock}>
      <Typography.Header level={2} className={styles.header}>
        В роли эксперта Практикума вы будете
      </Typography.Header>
      <Grid>
        <Grid.Item span="2">
          <BigCard
            title="Менять жизнь людей к лучшему"
            text="Тысячи наших студентов нуждаются в ваших знаниях и опыте — не
        бойтесь ими делиться"
            image={RobotPng}
          />
        </Grid.Item>
        <Grid.Item span="2">
          <BigCard
            title={`Получать доход в среднем 30–55 тысяч рублей в месяц`}
            text={`Работая удалённо 2–3 часа в день, график выбираете сами`}
            image={YodaPng}
          />
        </Grid.Item>
        <Grid.Item>
          <SmallCard
            title="Общаться в EdTech"
            text="Станете частью сообщества экспертов и посмотрите на мир
              онлайн-образования изнутри"
          />
        </Grid.Item>
        <Grid.Item>
          <SmallCard
            title="Учиться новому"
            text="Узнаете, как давать обратную связь, выступать на публике
              и мотивировать людей"
          />
        </Grid.Item>
        <Grid.Item>
          <SmallCard
            title="Развивать личный бренд"
            text="Публикуйте статьи в блоге Практикума и выступайте на мероприятиях,
              чтобы о вас узнали как об эксперте"
          />
        </Grid.Item>
        <Grid.Item>
          <SmallCard
            title="Расти внутри роли"
            text="Вы сможете стать старшим наставником или сеньор-ревьюером"
          />
        </Grid.Item>
      </Grid>
    </div>
  );
};
