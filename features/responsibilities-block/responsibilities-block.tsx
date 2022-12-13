import { Grid, Typography } from "@shared/components";
import { FC } from "react";
import RobotPng from "@shared/assets/images/robot.png";
import YodaPng from "@shared/assets/images/yoda.png";
import styles from "./responsibilities-block.module.scss";
import Image from "next/image";
import { Card } from "@shared/components/card";
import { cn } from "@shared/utils/className";

export const ResponsibilitiesBlock: FC = () => {
  return (
    <div className={styles.responsibilitiesBlock}>
      <Typography.Header level={2} className={styles.header}>
        В роли эксперта Практикума вы будете
      </Typography.Header>
      <Grid>
        <Grid.Item span="2">
          <Card className={styles.changePeoplesLifeCard}>
            <Card.Header
              className={styles.changePeoplesLifeCard__header}
              size="l"
            >
              Менять жизнь людей к&nbsp;лучшему
            </Card.Header>
            <Typography.Text
              className={cn([
                styles.changePeoplesLifeCard__text,
                styles.cardText,
              ])}
              size="s"
            >
              Тысячи наших студентов нуждаются в&nbsp;ваших знаниях и опыте — не
              бойтесь ими&nbsp;делиться
            </Typography.Text>
            <div className={styles.changePeoplesLifeCard__image}>
              <Image
                className={styles.changePeoplesLifeCard__image}
                src={RobotPng}
                alt=""
              />
            </div>
          </Card>
        </Grid.Item>
        <Grid.Item span="2">
          <Card className={styles.incomeCard}>
            <Card.Header className={styles.incomeCard__header} size="l">
              Получать доход в&nbsp;среднем 30–55&nbsp;тысяч рублей в месяц
            </Card.Header>
            <Typography.Text
              className={cn([styles.incomeCard__text, styles.cardText])}
              size="s"
            >
              Работая удалённо 2–3 часа в день, график выбираете сами
            </Typography.Text>
            <div className={styles.incomeCard__image}>
              <Image src={YodaPng} alt="" />
            </div>
          </Card>
        </Grid.Item>
        <Grid.Item>
          <Card color="blue" className={styles.responsibilitiesBlock__card}>
            <Card.Header size="l">Общаться в&nbsp;EdTech</Card.Header>
            <Typography.Text className={styles.cardText} size="s">
              Станете частью сообщества экспертов и&nbsp;посмотрите на мир
              онлайн-образования изнутри
            </Typography.Text>
          </Card>
        </Grid.Item>
        <Grid.Item>
          <Card color="blue" className={styles.responsibilitiesBlock__card}>
            <Card.Header size="l">Учиться новому</Card.Header>
            <Typography.Text className={styles.cardText} size="s">
              Узнаете, как давать обратную связь, выступать на публике
              и&nbsp;мотивировать людей
            </Typography.Text>
          </Card>
        </Grid.Item>
        <Grid.Item>
          <Card color="blue" className={styles.responsibilitiesBlock__card}>
            <Card.Header size="l">Развивать личный бренд</Card.Header>
            <Typography.Text className={styles.cardText} size="s">
              Публикуйте статьи в&nbsp;блоге Практикума и&nbsp;выступайте
              на&nbsp;мероприятиях, чтобы о&nbsp;вас узнали
              как&nbsp;об&nbsp;эксперте
            </Typography.Text>
          </Card>
        </Grid.Item>
        <Grid.Item>
          <Card color="blue" className={styles.responsibilitiesBlock__card}>
            <Card.Header size="l">Расти внутри роли</Card.Header>
            <Typography.Text className={styles.cardText} size="s">
              Вы сможете стать старшим наставником или сеньор-ревьюером
            </Typography.Text>
          </Card>
        </Grid.Item>
      </Grid>
    </div>
  );
};
