import { ComponentProps, FC, useMemo, useRef } from "react";
import Slider from "react-slick";
import { Typography } from "@shared/components";
import BackwardImage from "@shared/assets/images/backward.svg";
import ForwardImage from "@shared/assets/images/forward.svg";
import ArrowImage from "@shared/assets/images/roles-arrow.svg";
import { StoriesCard } from "./stories-card";
import { stories } from "./stories-block.data";

import styles from "./stories-block.module.scss";
import { useIsMobile } from "@shared/hooks";

const desktopSettings: ComponentProps<typeof Slider> = {
  speed: 300,
  slidesToShow: 2,
  variableWidth: true,
  dots: false,
};

const mobileSettings: ComponentProps<typeof Slider> = {
  speed: 300,
  slidesToShow: 1,
  variableWidth: false,
  dots: true,
};

export const StoriesBlock: FC = () => {
  const isMobile = useIsMobile();
  const settings = useMemo(
    () => (isMobile ? mobileSettings : desktopSettings),
    [isMobile]
  );
  const sliderRef = useRef<Slider>(null);

  return (
    <div className={styles.storiesBlock}>
      <div className={styles.arrow}>
        <ArrowImage />
      </div>
      <Typography.Header className={styles.header} as="h2" type="header-2">
        Истории ребят из нашей команды
      </Typography.Header>
      <div className={styles.motionControls}>
        <button
          className={styles.button}
          onClick={() => sliderRef.current?.slickPrev()}
        >
          <BackwardImage />
        </button>
        <button
          className={styles.button}
          onClick={() => sliderRef.current?.slickNext()}
        >
          <ForwardImage />
        </button>
      </div>
      <Slider ref={sliderRef} className={styles.storiesList} {...settings}>
        {stories.map((story, index) => (
          <div key={index} className={styles.story}>
            <StoriesCard
              name={story.name}
              position={story.position}
              text={story.text}
              poster={story.poster}
              videoUrl={story.videoUrl}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};
