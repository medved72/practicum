import { FC } from "react";
import { Card, Grid, Typography } from "@shared/components";
import styles from "./role-tab-content.module.scss";

export const RoleTabContent: FC<{ description: string[] }> = ({
  description,
}) => {
  return (
    <div className={styles.roleTabContent}>
      <Grid>
        {description.map((value) => {
          return (
            <Grid.Item key={value} span="2">
              <Card className={styles.roleTabContent__card}>
                <Typography.Text size="s">{value}</Typography.Text>
              </Card>
            </Grid.Item>
          );
        })}
      </Grid>
    </div>
  );
};
