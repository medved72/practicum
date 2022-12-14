import { FC, ReactNode } from "react";
import ReactModal from "react-modal";
import { ModalPageContent } from "@shared/components/modal-page/modal-page-content";

import styles from "./modal-page.module.scss";

interface ModalPageProps {
  isOpen: boolean;
  children?: ReactNode;
}

export const ModalPage: FC<ModalPageProps> = ({ isOpen, children }) => {
  return (
    <ReactModal className={styles.modalPage} isOpen={isOpen}>
      <ModalPageContent>{children}</ModalPageContent>
    </ReactModal>
  );
};
