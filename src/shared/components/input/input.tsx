import { FC } from "react";
import styles from "./input.module.scss";

interface InputProps {
  placeholder: string;
  required?: boolean;
  name: string;
  type?: "text" | "url" | "tel" | "email";
}

export const Input: FC<InputProps> = ({
  placeholder,
  required,
  type = "text",
  name,
}) => {
  return (
    <label className={styles.field}>
      <input
        type={type}
        name={name}
        className={styles.input}
        placeholder={placeholder}
        required={required}
      />
      <span className={styles.placeholder}>{placeholder}</span>
    </label>
  );
};
