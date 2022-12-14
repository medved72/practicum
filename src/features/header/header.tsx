import { FC } from "react";
import LogoSvg from "@shared/assets/images/logo.svg";
import styles from "./header.module.scss";

export const Header: FC = () => {
  return (
    <header className={styles.title}>
      <LogoSvg />
      <nav className={styles.navigation}>
        <ul>
          <li>
            <a href="#directions">Направления</a>
          </li>
          <li>
            <a href="#roles">Роли</a>
          </li>
          <li>
            <a href="#vacancies">Предложения</a>
          </li>
          <li>
            <a href="#faq">FAQ</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
