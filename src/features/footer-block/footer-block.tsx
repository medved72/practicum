import { FC } from "react";
import LogoImage from "../../shared/assets/images/logo.svg";
import VkSocialImage from "../../shared/assets/images/social_web_vk.svg";
import TelegramSocialImage from "../../shared/assets/images/social_web_telegram.svg";
import styles from "./footer-block.module.scss";
import { Typography } from "@shared/components";
import { cn } from "@shared/utils";

export const FooterBlock: FC = () => {
  return (
    <div className={styles.footerBlock}>
      <div className={styles.call}>
        <div className={styles.logo}>
          <LogoImage />
        </div>
        <Typography.Text className={styles.phone}>
          8-800-700-93-29
        </Typography.Text>
        <Typography.Text
          className={cn([styles.free, styles.text_gray])}
          size="s"
        >
          Звонок по России бесплатный
        </Typography.Text>
      </div>
      <div className={styles.journal}>
        <div className={styles.row}>
          <Typography.Text className={styles.head} size="s">
            Журнал
          </Typography.Text>
          <div>
            <VkSocialImage />
            <TelegramSocialImage />
          </div>
        </div>
        <Typography.Text className={styles.text_gray} size="supportive-s">
          Информация на данной странице описывает возможные варианты получения
          дополнительного дохода в месяц (т.н. подработка). Не&nbsp;является
          предложением о&nbsp;работе. Размещенные объявления о&nbsp;потребности
          в тех или иных услугах не&nbsp;являются вакансиями.
        </Typography.Text>
        <Typography.Text className={styles.text_gray} size="supportive-s">
          Образовательные услуги оказываются АНО&nbsp;ДПО «ШАД».
          <br />
          Это Школа анализа данных, основанная Яндексом. Оказывает услуги
          на&nbsp;основании Лицензии № 036031 от 24 марта 2015 года.
        </Typography.Text>
        <Typography.Text className={styles.text_gray} size="supportive-s">
          Документ о прохождении обучения по&nbsp;программе дополнительного
          профессионального образования также выдается АНО ДПО «ШАД».
        </Typography.Text>
        <Typography.Text className={styles.text_gray} size="supportive-s">
          © 2020 АНО ДПО «ШАД», ООО «Яндекс»
        </Typography.Text>
      </div>
      <div className={styles.aboutUs}>
        <Typography.Text className={styles.text_gray} size="s">
          О нас
        </Typography.Text>
        <ul className={styles.list}>
          <li>
            <Typography.Text size="s">
              <a href="#">Правовая информация</a>
            </Typography.Text>
          </li>
          <li>
            <Typography.Text size="s">
              <a href="#">Корпоративным клиентам</a>
            </Typography.Text>
          </li>
          <li>
            <Typography.Text size="s">
              <a href="#">Отзывы</a>
            </Typography.Text>
          </li>
          <li>
            <Typography.Text size="s">
              <a href="#">Помощь</a>
            </Typography.Text>
          </li>
          <li>
            <Typography.Text size="s">
              <a href="#">Лицензия</a>
            </Typography.Text>
          </li>
          <li>
            <Typography.Text size="s">
              <a href="#">Для СМИ</a>
            </Typography.Text>
          </li>
        </ul>
      </div>
      <div className={styles.joinUs}>
        <Typography.Text className={styles.text_gray} size="s">
          Стать частью команды
        </Typography.Text>
        <ul className={styles.list}>
          <li>
            <Typography.Text size="s">
              <a href="#">Вакансии</a>
            </Typography.Text>
          </li>
          <li>
            <Typography.Text size="s">
              <a href="#">Стать наставником</a>
            </Typography.Text>
          </li>
        </ul>
      </div>
    </div>
  );
};
