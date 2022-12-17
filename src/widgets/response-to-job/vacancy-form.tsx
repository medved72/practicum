import { FC, useState } from "react";
import styles from "./vacancy-form.module.scss";
import { ContentBlock, Typography } from "@shared/components";
import { ResponseToJobForm } from "@features/response-to-job-form";
import { ResponseToJobDescription } from "@features/response-to-job-description";
import { VacancyDto, VacancyType } from "@shared/api";
import { RequestSendSuccessfullModal } from "@features/request-send-successfull-modal";

const prefixTitleMap: Record<VacancyType, string> = {
  [VacancyType.MENTOR]: "Наставник на курс",
  [VacancyType.REVIEWER]: "Ревьюер на курс",
};

interface VacancyFormProps {
  vacancy: VacancyDto;
}

export const VacancyForm: FC<VacancyFormProps> = ({ vacancy }) => {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const handleSubmit = () => {
    setShowSuccessModal(true);
  };

  return (
    <ContentBlock className={styles.responseToJob}>
      <Typography.Header className={styles.responseToJob__header} level={1}>
        {prefixTitleMap[vacancy.type]} <br /> {vacancy.name}
      </Typography.Header>
      <div className={styles.responseToJob__sections}>
        <div className={styles.responseToJob__form}>
          <Typography.Header level={3}>
            Откликнуться на&nbsp;предложение
          </Typography.Header>
          <ResponseToJobForm onSubmit={handleSubmit} />
        </div>
        <div className={styles.responseToJob__description}>
          <ResponseToJobDescription
            responsibilities={vacancy.responsibilities}
            terms={vacancy.terms}
            requirements={vacancy.requirements}
          />
        </div>
      </div>
      <RequestSendSuccessfullModal isOpen={showSuccessModal} />
    </ContentBlock>
  );
};
