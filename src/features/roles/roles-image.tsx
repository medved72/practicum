import { FC, useEffect, useRef } from "react";
import Image from "next/image";
import RolesPeopleMentorImage from "@shared/assets/images/roles-peoples-mentor.png";
import RolesPeopleReviewerImage from "@shared/assets/images/roles-peoples-reviewer.png";
import RolesPeopleMobileImage from "@shared/assets/images/roles-peoples-mobile.webp";

import BubbleOneMentorImage from "@shared/assets/images/bubble-one-mentor.svg";
import BubbleTwoMentorImage from "@shared/assets/images/bubble-two-mentor.svg";
import BubbleThreeMentorImage from "@shared/assets/images/bubble-three-mentor.svg";

import BubbleOneReviewerImage from "@shared/assets/images/bubble-one-reviewer.svg";
import BubbleTwoReviewerImage from "@shared/assets/images/bubble-two-reviewer.svg";
import BubbleThreeReviewerImage from "@shared/assets/images/bubble-three-reviewer.svg";

import { cn } from "@shared/utils";
import { Role } from "./utils";

import styles from "./roles-image.module.scss";

export const RolesImage: FC<{
  activeTab: Role;
}> = (props) => {
  const rolesImageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = rolesImageRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        wrapper?.style.setProperty(
          "--intersection-ratio",
          entry.intersectionRatio.toString()
        );
      },
      {
        rootMargin: "-20% 0px -20% 0px",
        threshold: new Array(100)
          .fill(0)
          .map((_, index, values) => index / values.length),
      }
    );

    if (wrapper) {
      observer.observe(rolesImageRef.current);
    }

    return () => {
      if (wrapper) {
        observer.unobserve(wrapper);
      }
    };
  }, []);

  return (
    <div ref={rolesImageRef} className={styles.rolesImage}>
      {props.activeTab === Role.mentor && (
        <picture>
          <source
            media="(max-width: 980px)"
            srcSet={RolesPeopleMobileImage.src}
          />
          <Image src={RolesPeopleMentorImage} alt="" />
        </picture>
      )}

      {props.activeTab === Role.reviewer && (
        <picture>
          <source
            media="(max-width: 980px)"
            srcSet={RolesPeopleMobileImage.src}
          />
          <Image src={RolesPeopleReviewerImage} alt="" />
        </picture>
      )}

      {props.activeTab === Role.mentor && (
        <>
          <BubbleOneMentorImage
            className={cn([styles.mentor, styles.bubble1])}
          />
          <BubbleTwoMentorImage
            className={cn([styles.mentor, styles.bubble2])}
          />
          <BubbleThreeMentorImage
            className={cn([styles.mentor, styles.bubble3])}
          />
        </>
      )}

      {props.activeTab === Role.reviewer && (
        <>
          <BubbleOneReviewerImage
            className={cn([styles.reviewer, styles.bubble1])}
          />
          <BubbleTwoReviewerImage
            className={cn([styles.reviewer, styles.bubble2])}
          />
          <BubbleThreeReviewerImage
            className={cn([styles.reviewer, styles.bubble3])}
          />
        </>
      )}
    </div>
  );
};
