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
            <a href="#">Направления</a>
          </li>
          <li>
            <a href="#">Роли</a>
          </li>
          <li>
            <a href="#">Предложения</a>
          </li>
          <li>
            <a href="#">FAQ</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
