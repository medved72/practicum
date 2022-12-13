import { FC, useCallback, useRef, useState } from "react";
import { CardHeader, Typography } from "@shared/components";
import { cn } from "@shared/utils";
import IrinaVideo from "@shared/assets/video/irina-video.mp4";
import IrinaPoster from "@shared/assets/video/irina-poster.png";
import PlayImage from "@shared/assets/images/play.svg";
import styles from "./stories-card.module.scss";
import Image from "next/image";

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
          <Image className={styles.backgroundImage} src={IrinaPoster} alt="" />
          <button className={styles.play} onClick={playVideo}>
            <PlayImage />
          </button>
          <video ref={videoRef} autoPlay={false} preload="auto" controls>
            <source src={IrinaVideo} />
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
