import { Grid, Typography } from "@shared/components";
import { FC } from "react";
import styles from "./responsibilities-block.module.scss";

export const ResponsibilitiesBlock: FC = () => {
  return (
    <div className={styles.responsibilitiesBlock}>
      <Typography.Header className={styles.header}>
        В роли эксперта Практикума вы будете
      </Typography.Header>

      <Grid>
        <Grid.Item span="2">
          <Typography.CardHeader size="l">
            Менять жизнь людей к&nbsp;лучшему
          </Typography.CardHeader>
        </Grid.Item>
        <Grid.Item span="2">
          <Typography.CardHeader size="l">
            Получать доход в&nbsp;среднем 30–55&nbsp;тысяч рублей в месяц
          </Typography.CardHeader>
        </Grid.Item>
        <Grid.Item></Grid.Item>
        <Grid.Item></Grid.Item>
        <Grid.Item></Grid.Item>
        <Grid.Item></Grid.Item>
      </Grid>
    </div>
  );
};
