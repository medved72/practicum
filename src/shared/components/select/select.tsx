import { FC, SyntheticEvent, useState } from "react";

import { cn } from "@shared/utils";

import styles from "./select.module.scss";

interface SelectOption {
  label: string;
  value: string;
}

interface SelectProps {
  name: string;
  placeholder: string;
  options: SelectOption[];
}

export const Select: FC<SelectProps> = ({ placeholder, name, options }) => {
  const [value, setValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleChange = (e: SyntheticEvent<HTMLSelectElement>) => {
    setValue(e.currentTarget.value);
  };

  return (
    <label
      className={cn([
        styles.field,
        !value && styles.field__empty,
        isFocused && styles.field__focused,
      ])}
    >
      <select
        className={styles.input}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        name={name}
        value={value}
      >
        <option value="" hidden>
          {placeholder}
        </option>
        {options.map(({ label, value }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
      <span className={styles.placeholder}>{placeholder}</span>
    </label>
  );
};
