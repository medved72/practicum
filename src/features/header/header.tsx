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
            <a href="@features/header/header#">Направления</a>
          </li>
          <li>
            <a href="@features/header/header#">Роли</a>
          </li>
          <li>
            <a href="@features/header/header#">Предложения</a>
          </li>
          <li>
            <a href="@features/header/header#">FAQ</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
