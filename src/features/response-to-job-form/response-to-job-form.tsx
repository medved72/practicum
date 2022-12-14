import { FC, SyntheticEvent, useRef, useState } from "react";
import { Button, Typography, Input } from "@shared/components";

import styles from "./response-to-job-form.module.scss";

interface ResponseToJobFormProps {
  onSubmit: (values: FormValues) => void;
}

interface FormValues {
  fio: string;
  email: string;
  phone: string;
  link: string;
  agreement: boolean;
}

export const ResponseToJobForm: FC<ResponseToJobFormProps> = ({ onSubmit }) => {
  const [isValid, setIsValid] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);

  const validateForm = (values: FormValues): boolean => {
    if (
      !values.agreement ||
      !values.fio ||
      !values.link ||
      !values.email ||
      !values.phone
    ) {
      return false;
    }

    const emailRegexp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    return emailRegexp.test(values.email);
  };

  const handleChange = () => {
    if (!formRef.current) return;
    const formData = new FormData(formRef.current);
    const formValid = validateForm(
      Object.fromEntries(formData) as unknown as FormValues
    );
    setIsValid(formValid);
  };

  const handleSubmit = (e: SyntheticEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (!formRef.current) return;
    const formData = new FormData(formRef.current);
    onSubmit(Object.fromEntries(formData) as unknown as FormValues);
  };

  return (
    <form
      ref={formRef}
      className={styles.responseToJobForm}
      onChange={handleChange}
      onSubmit={handleSubmit}
    >
      <Input name="fio" placeholder="Имя Фамилия" />
      <Input name="email" placeholder="Электронная почта" type="email" />
      <Input name="phone" placeholder="Телефон" type="tel" />
      <Input name="link" placeholder="Ссылка на ваше резюме" type="url" />
      <label className={styles.agreement}>
        <input type="checkbox" name="agreement" />
        <Typography.Text size="supportive-s">
          Я даю согласие АНО ДПО «ШАД» и&nbsp;ООО&nbsp;«ЯНДЕКС» на обработку
          указанных данных для целей рассмотрения анкеты и&nbsp;обратной связи
          по ней.
        </Typography.Text>
      </label>
      <Button className={styles.button} htmlType="submit" disabled={!isValid}>
        Откликнуться
      </Button>
      <Button className={styles.button} type="outline">
        Поделиться
      </Button>
    </form>
  );
};
