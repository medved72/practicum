import { ComponentProps, FC } from "react";
import { Grid, Typography } from "@shared/components";
import { useIsMobile } from "@shared/hooks";

import { SmallCard } from "./small-card";
import { BigCard } from "./big-card";
import { responsibilities } from "./data";

import styles from "./responsibilities-block.module.scss";
import Slider from "react-slick";

const settings: ComponentProps<typeof Slider> = {
  speed: 300,
  slidesToShow: 1,
  variableWidth: true,
  touchMove: true,
  dots: true,
};

const MobileResponsibilities: FC = () => {
  return (
    <div className={styles.responsibilitiesBlock}>
      <Typography.Header className={styles.header} as="h2" type="header-2">
        В роли эксперта Практикума вы будете
      </Typography.Header>
      <Slider {...settings}>
        {responsibilities.map((responsibility, index) => (
          <BigCard key={index} {...responsibility} />
        ))}
      </Slider>
    </div>
  );
};

const DesktopResponsibilities: FC = () => {
  return (
    <div className={styles.responsibilitiesBlock}>
      <Typography.Header className={styles.header} as="h2" type="header-2">
        В роли эксперта Практикума вы будете
      </Typography.Header>
      <Grid>
        {responsibilities.map((responsibility, index) => {
          const span = index < 2 ? "2" : "1";
          const Component = index < 2 ? BigCard : SmallCard;
          return (
            <Grid.Item key={index} span={span}>
              <Component {...responsibility} />
            </Grid.Item>
          );
        })}
      </Grid>
    </div>
  );
};

export const ResponsibilitiesBlock: FC = () => {
  const isMobile = useIsMobile();

  if (isMobile) {
    return <MobileResponsibilities />;
  }

  return <DesktopResponsibilities />;
};
