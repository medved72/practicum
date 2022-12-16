import { useEffect, useRef } from "react";
import Image from "next/image";
import RolesPeopleMentorImage from "@shared/assets/images/roles-peoples-mentor.png";
import RolesPeopleReviewerImage from "@shared/assets/images/roles-peoples-reviewer.png";
import { Role } from "./utils";

import BubbleOneMentorImage from "@shared/assets/images/bubble-one-mentor.svg";
import BubbleTwoMentorImage from "@shared/assets/images/bubble-two-mentor.svg";
import BubbleThreeMentorImage from "@shared/assets/images/bubble-three-mentor.svg";

import BubbleOneReviewerImage from "@shared/assets/images/bubble-one-reviewer.svg";
import BubbleTwoReviewerImage from "@shared/assets/images/bubble-two-reviewer.svg";
import BubbleThreeReviewerImage from "@shared/assets/images/bubble-three-reviewer.svg";

import styles from "./roles-image.module.scss";
import { cn } from "@shared/utils";

export const RolesImage = (props: {
  activeTab: Role.mentor | Role.reviewer;
}) => {
  const rolesImageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log({ entry });
        rolesImageRef.current?.style.setProperty(
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

    if (rolesImageRef.current) {
      observer.observe(rolesImageRef.current);
    }

    return () => {
      if (rolesImageRef.current) {
        observer.unobserve(rolesImageRef.current);
      }
    };
  }, []);

  return (
    <div ref={rolesImageRef} className={styles.rolesImage}>
      {props.activeTab === Role.mentor && (
        <Image src={RolesPeopleMentorImage} alt="" />
      )}

      {props.activeTab === Role.reviewer && (
        <Image src={RolesPeopleReviewerImage} alt="" />
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
