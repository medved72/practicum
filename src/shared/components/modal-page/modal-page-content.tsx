import { FC, ReactNode, useCallback, useEffect, useRef } from "react";

import styles from "./modal-page-content.module.scss";
import { useRouter } from "next/router";
import { cn } from "@shared/utils";

interface ModalPageContentProps {
  children?: ReactNode;
}

export const ModalPageContent: FC<ModalPageContentProps> = ({ children }) => {
  const router = useRouter();
  const backdropRefElement = useRef<HTMLDivElement>(null);

  const subscribeToIntersectionBackdrop = useCallback(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (!backdropRefElement.current) return;
        const [entry] = entries;
        if (entry.intersectionRatio > 0.97) {
          router.back();
          observer.unobserve(backdropRefElement.current);
        }
        backdropRefElement.current.style.setProperty(
          "--intersection-ratio",
          entry.intersectionRatio.toString()
        );
      },
      {
        rootMargin: "0px",
        threshold: new Array(100)
          .fill(0)
          .map((_, index, values) => index / values.length),
      }
    );

    if (backdropRefElement.current) {
      observer.observe(backdropRefElement.current);
    }

    return () => {
      if (backdropRefElement.current) {
        observer.unobserve(backdropRefElement.current);
      }
    };
  }, [router]);

  useEffect(() => {
    return subscribeToIntersectionBackdrop();
  }, [subscribeToIntersectionBackdrop]);

  return (
    <div
      className={cn([styles.modalPageContent, styles.modalPageContent__start])}
    >
      <div className={styles.modalPageContent__body}>{children}</div>
      <div
        ref={backdropRefElement}
        className={styles.modalPageContent__backdrop}
        onClick={() => router.back()}
      >
        <div className={styles.modalPageContent__backdropText}>
          Scroll to close
        </div>
      </div>
    </div>
  );
};
