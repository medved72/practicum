import { FC, ReactNode } from "react";
import styles from "./button.module.scss";
import { cn } from "@shared/utils";

interface ButtonProps {
  className?: string;
  children?: ReactNode;
  disabledHover?: boolean;
  size?: "medium" | "small";
  disabled?: boolean;
  type?: "default" | "outline";
  htmlType?: "button" | "submit" | "reset";
  onClick?: () => void;
}

export const Button: FC<ButtonProps> = ({
  children,
  size = "medium",
  className,
  disabledHover,
  disabled,
  type = "default",
  htmlType = "button",
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      type={htmlType}
      disabled={disabled}
      className={cn([
        className,
        styles.button,
        styles[`button--${size}`],
        styles[`button--${type}`],
        disabledHover && styles.disabledHover,
      ])}
    >
      {children}
    </button>
  );
};
