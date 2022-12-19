import { FC, useEffect, useRef } from "react";
import Image from "next/image";
import InvitationPeoplesPng from "@shared/assets/images/invitation-people.png";
import InvitationPeoplesMobilePng from "@shared/assets/images/invitation-people-mobile.webp";
import InvitationBubbleYellowBigImage from "@shared/assets/images/invitation-bubble-yellow-big.svg";
import InvitationBubbleYellowSmallImage from "@shared/assets/images/invitation-bubble-yellow-small.svg";
import InvitationBubbleBlueImage from "@shared/assets/images/invitation-bubble-blue.svg";

import styles from "./invitation-block-image.module.scss";

export const InvitationBlockImage: FC = () => {
  const imageWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = imageWrapperRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        wrapper?.style.setProperty(
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

    if (wrapper) {
      observer.observe(wrapper);
    }

    return () => {
      if (wrapper) {
        observer.unobserve(wrapper);
      }
    };
  }, []);

  return (
    <div ref={imageWrapperRef} className={styles.invitationBlockImage}>
      <picture>
        <source
          media="(max-width: 980px)"
          srcSet={InvitationPeoplesMobilePng.src}
        />
        <Image src={InvitationPeoplesPng} alt="" priority />
      </picture>
      <InvitationBubbleYellowBigImage className={styles.bubble1} />
      <InvitationBubbleYellowSmallImage className={styles.bubble2} />
      <InvitationBubbleBlueImage className={styles.bubble3} />
    </div>
  );
};
