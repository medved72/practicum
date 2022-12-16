import { FC, useEffect, useRef } from "react";
import styles from "./invitation-block.module.scss";
import Image from "next/image";
import InvitationPeoplesPng from "@shared/assets/images/invitation-people.png";
import InvitationBubbleYellowBigImage from "@shared/assets/images/invitation-bubble-yellow-big.svg";
import InvitationBubbleYellowSmallImage from "@shared/assets/images/invitation-bubble-yellow-small.svg";
import InvitationBubbleBlueImage from "@shared/assets/images/invitation-bubble-blue.svg";

export const InvitationBlockImage: FC = () => {
  const imageWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        imageWrapperRef.current?.style.setProperty(
          "--intersection-ratio",
          entry.intersectionRatio.toString()
        );
      },
      {
        root: null,
        rootMargin: "-200px 0px 0px 0px",
        threshold: new Array(100)
          .fill(0)
          .map((_, index, values) => index / values.length),
      }
    );

    if (imageWrapperRef.current) {
      observer.observe(imageWrapperRef.current);
    }

    return () => {
      if (imageWrapperRef.current) {
        observer.unobserve(imageWrapperRef.current);
      }
    };
  }, []);

  return (
    <div ref={imageWrapperRef} className={styles.imageWrapper}>
      <Image className={styles.image} src={InvitationPeoplesPng} alt="" />
      <InvitationBubbleYellowBigImage className={styles.bubbleYellowBig} />
      <InvitationBubbleYellowSmallImage className={styles.bubbleYellowSmall} />
      <InvitationBubbleBlueImage className={styles.bubbleBlue} />
    </div>
  );
};
