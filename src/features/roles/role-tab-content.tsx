import { FC } from "react";
import { Card, Grid, Typography } from "@shared/components";
import styles from "./role-tab-content.module.scss";
import { useIsMobile } from "@shared/hooks";

export const RoleTabContent: FC<{ description: string[] }> = ({
  description,
}) => {
  const isMobile = useIsMobile();

  return (
    <div className={styles.roleTabContent}>
      <Grid className={styles.roleTabContent__grid}>
        {description.map((value) => {
          return (
            <Grid.Item key={value} span={isMobile ? "4" : "2"}>
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
