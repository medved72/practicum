import { FC, useCallback, useRef, useState } from "react";
import { Typography } from "@shared/components";
import { cn } from "@shared/utils";
import PlayImage from "@shared/assets/images/play.svg";
import styles from "./stories-card.module.scss";
import Image from "next/image";

export const StoriesCard: FC<{
  name: string;
  position: string;
  text: string;
  poster: {
    url: string;
    width: number;
    height: number;
    alt: string;
  };
  videoUrl: string;
}> = ({ name, position, text, poster, videoUrl }) => {
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
          <Image
            className={styles.backgroundImage}
            src={poster.url}
            width={poster.width}
            height={poster.height}
            alt={poster.alt}
          />
          <button className={styles.play} onClick={playVideo}>
            <PlayImage />
          </button>
          <video ref={videoRef} autoPlay={false} controls>
            <source src={videoUrl} />
          </video>
        </div>
      </div>
      <div className={styles.content}>
        <Typography.Header
          className={styles.header}
          as="h4"
          type="card-header-s"
        >
          {name}
        </Typography.Header>
        <Typography.Text className={styles.position} size="s">
          {position}
        </Typography.Text>
        <Typography.Text size="s">{text}</Typography.Text>
      </div>
    </div>
  );
};
