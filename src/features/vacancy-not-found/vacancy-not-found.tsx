import { FC, SyntheticEvent, useRef, useState } from "react";
import {
  Button,
  ContentBlock,
  Input,
  Select,
  Typography,
} from "@shared/components";
import VacancyNotFoundImage from "@shared/assets/images/vacancy-not-found.png";

import styles from "./vacancy-not-found.module.scss";
import Image from "next/image";

export const VacancyNotFound: FC = () => {
  const [isValid, setIsValid] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);

  const validateForm = (values: any): boolean => {
    return !(
      !values.agreement ||
      !values.fio ||
      !values.link ||
      !values.email ||
      !values.phone ||
      !values.direction ||
      !values.role
    );
  };

  const handleChange = () => {
    if (!formRef.current) return;
    const formData = new FormData(formRef.current);
    const formValid = validateForm(Object.fromEntries(formData));
    setIsValid(formValid);
  };

  const handleSubmit = (e: SyntheticEvent<HTMLFormElement>): void => {
    e.preventDefault();
  };

  return (
    <ContentBlock className={styles.vacancyNotFound}>
      <div className={styles.vacancyNotFound__header}>
        <Typography.Header level={2}>
          Нет подходящего варианта?
        </Typography.Header>
        <Typography.Text
          className={styles.vacancyNotFound__headerText}
          size="s"
        >
          Заполните форму для отклика, а мы свяжемся с вами,
          <br /> когда появится что-то подходящее
        </Typography.Text>
      </div>
      <div className={styles.vacancyNotFound__body}>
        <Image src={VacancyNotFoundImage} alt={""} />
        <form
          ref={formRef}
          className={styles.vacancyNotFound__form}
          onChange={handleChange}
          onSubmit={handleSubmit}
        >
          <Input placeholder="Имя фамилия" name="fio" />
          <Input placeholder="Электронная почта" name="email" type="email" />
          <Input placeholder="Телефон" name="phone" type="tel" />
          <Select
            name="direction"
            placeholder="Какое направление вам ближе?"
            options={[
              { label: "Менеджмент", value: "Менеджмент" },
              { label: "Дизайн", value: "Дизайн" },
              { label: "Программирование", value: "Программирование" },
              { label: "Маркетинг", value: "Маркетинг" },
            ]}
          />
          <Select
            name="role"
            placeholder="Чем вы хотите заниматься?"
            options={[
              { label: "Наставник", value: "Наставник" },
              { label: "Ревьюер", value: "Ревьюер" },
            ]}
          />
          <Input placeholder={"Ссылка на ваше резюме"} name="link" />
          <label className={styles.agreement}>
            <input type="checkbox" name="agreement" />
            <Typography.Text size="supportive-s">
              Я даю согласие АНО ДПО «ШАД» и ООО «ЯНДЕКС» на обработку указанных
              данных для целей рассмотрения анкеты и обратной связи по ней.
            </Typography.Text>
          </label>

          <Button className={styles.send} htmlType="submit" disabled={!isValid}>
            Отправить заявку
          </Button>
        </form>
      </div>
    </ContentBlock>
  );
};
