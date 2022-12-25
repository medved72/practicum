import { FC } from "react";
import ReactModal from "react-modal";
import { Button, Typography } from "@shared/components";
import RequestSendSuccessImage from "@shared/assets/images/request-sended.svg";

import styles from "./request-send-successfull-modal.module.scss";
import { useRouter } from "next/router";

interface RequestSendSuccessfullModalProps {
  isOpen: boolean;
}

export const RequestSendSuccessfullModal: FC<
  RequestSendSuccessfullModalProps
> = ({ isOpen }) => {
  const router = useRouter();

  const goToMain = () => {
    router.push("/", {}, { scroll: false, shallow: true });
  };

  return (
    <ReactModal
      className={styles.requestSendSuccessfullModal}
      overlayClassName={styles.requestSendSuccessfullModalOverlay}
      isOpen={isOpen}
    >
      <RequestSendSuccessImage />
      <Typography.Header
        className={styles.requestSendSuccessfullModal__title}
        as="h3"
        type="header-3"
      >
        Спасибо, ваша заявка отправлена
      </Typography.Header>
      <Typography.Text
        className={styles.requestSendSuccessfullModal__text}
        size="s"
      >
        Напишем вам на электронную почту через 1-2 рабочих дня
      </Typography.Text>
      <Button
        className={styles.requestSendSuccessfullModal__button}
        onClick={goToMain}
      >
        Вернуться на главную
      </Button>
    </ReactModal>
  );
};
