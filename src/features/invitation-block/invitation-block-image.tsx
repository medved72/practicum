import { FC, useEffect, useMemo, useRef } from "react";
import Image from "next/image";
import InvitationPeoplesPng from "@shared/assets/images/invitation-people.png";
import InvitationPeoplesMobilePng from "@shared/assets/images/invitation-people-mobile.png";
import InvitationBubbleYellowBigImage from "@shared/assets/images/invitation-bubble-yellow-big.svg";
import InvitationBubbleYellowSmallImage from "@shared/assets/images/invitation-bubble-yellow-small.svg";
import InvitationBubbleBlueImage from "@shared/assets/images/invitation-bubble-blue.svg";
import { useWindowSize } from "@shared/hooks";

import styles from "./invitation-block-image.module.scss";

export const InvitationBlockImage: FC = () => {
  const windowSize = useWindowSize();

  const mainImage = useMemo(() => {
    return windowSize.width <= 1000
      ? InvitationPeoplesMobilePng
      : InvitationPeoplesPng;
  }, [windowSize.width]);

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
    <div ref={imageWrapperRef} className={styles.invitationBlockImage}>
      <Image src={mainImage} alt="" />
      <InvitationBubbleYellowBigImage className={styles.bubble1} />
      <InvitationBubbleYellowSmallImage className={styles.bubble2} />
      <InvitationBubbleBlueImage className={styles.bubble3} />
    </div>
  );
};
