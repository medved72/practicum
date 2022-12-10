import { FC, useCallback, useRef, useState } from "react";
import { CardHeader, Typography } from "@shared/components";
import { cn } from "@shared/utils/className";
import PlayImage from "@shared/assets/play.svg";
import styles from "./stories-card.module.scss";

export const StoriesCard: FC<{
  name: string;
  position: string;
  text: string;
}> = ({ name, position, text }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playPressed, setPlayPressed] = useState(false);

  const playVideo = useCallback(() => {
    setPlayPressed(true);
    videoRef.current?.play();
  }, []);

  return (
    <div className={styles.storiesCard}>
      <div className={styles.videoContainer}>
        <div className={cn([styles.video, playPressed && styles.playPressed])}>
          <button className={styles.play} onClick={playVideo}>
            <PlayImage />
          </button>
          <video ref={videoRef} autoPlay={false} preload="auto" controls>
            <source src="/video/irina-video.mp4" />
          </video>
        </div>
      </div>
      <div className={styles.content}>
        <CardHeader className={styles.header} size="s">
          {name}
        </CardHeader>
        <Typography.Text className={styles.position} size="s">
          {position}
        </Typography.Text>
        <Typography.Text size="s">{text}</Typography.Text>
      </div>
    </div>
  );
};
