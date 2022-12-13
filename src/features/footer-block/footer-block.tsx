import { FC } from "react";
import LogoImage from "../../shared/assets/images/logo-footer.svg";
import VkSocialImage from "../../shared/assets/images/social_web_vk.svg";
import TelegramSocialImage from "../../shared/assets/images/social_web_telegram.svg";
import styles from "./footer-block.module.scss";
import { Typography } from "@shared/components";
import { cn } from "@shared/utils";

export const FooterBlock: FC = () => {
  return (
    <div className={styles.footerBlock}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <LogoImage />
        </div>
        <Typography.Text className={styles.phone}>
          8-800-700-93-29
        </Typography.Text>
        <Typography.Text
          className={cn([styles.textGrey, styles.callFree])}
          size="s"
        >
          Звонок по России бесплатный
        </Typography.Text>
        <div className={styles.social}>
          <Typography.Text size="s">Журнал</Typography.Text>
          <div className={styles.socialIcons}>
            <VkSocialImage />
            <TelegramSocialImage />
          </div>
        </div>
        <Typography.Text
          className={cn([styles.textGrey, styles.paragraph])}
          size="supportive-s"
        >
          Информация на данной странице описывает возможные варианты получения
          дополнительного дохода в месяц (т.н. подработка). Не&nbsp;является
          предложением о работе. Размещенные объявления о&nbsp;потребности в тех
          или иных услугах не являются вакансиями.
        </Typography.Text>
        <Typography.Text
          className={cn([styles.textGrey, styles.paragraph])}
          size="supportive-s"
        >
          Образовательные услуги оказываются АНО ДПО «ШАД». <br />
          Это Школа анализа данных, основанная Яндексом. Оказывает услуги
          на&nbsp;основании Лицензии №&nbsp;036031 от 24 марта 2015 года.
        </Typography.Text>
        <Typography.Text
          className={cn([styles.textGrey, styles.paragraph])}
          size="supportive-s"
        >
          Документ о прохождении обучения по программе дополнительного
          профессионального образования также выдается АНО ДПО «ШАД».
        </Typography.Text>
        <Typography.Text
          className={cn([styles.textGrey, styles.paragraph])}
          size="supportive-s"
        >
          © 2020 АНО ДПО «ШАД», ООО «Яндекс»
        </Typography.Text>
      </div>
      <div className={styles.links}>
        <div>
          <Typography.Text
            className={cn([styles.textGrey, styles.sectionTitle])}
            size="s"
          >
            О нас
          </Typography.Text>
          <ul>
            <li>
              <Typography.Text size="s">
                <a href="src/features/footer-block/footer-block#">
                  Правовая информация
                </a>
              </Typography.Text>
            </li>
            <li>
              <Typography.Text size="s">
                <a href="src/features/footer-block/footer-block#">
                  Корпоративным клиентам
                </a>
              </Typography.Text>
            </li>
            <li>
              <Typography.Text size="s">
                <a href="src/features/footer-block/footer-block#">Отзывы</a>
              </Typography.Text>
            </li>
            <li>
              <Typography.Text size="s">
                <a href="src/features/footer-block/footer-block#">Помощь</a>
              </Typography.Text>
            </li>
            <li>
              <Typography.Text size="s">
                <a href="src/features/footer-block/footer-block#">Лицензия</a>
              </Typography.Text>
            </li>
            <li>
              <Typography.Text size="s">
                <a href="src/features/footer-block/footer-block#">Для СМИ</a>
              </Typography.Text>
            </li>
          </ul>
        </div>
        <div>
          <Typography.Text
            className={cn([styles.textGrey, styles.sectionTitle])}
            size="s"
          >
            Стать частью команды
          </Typography.Text>
          <ul>
            <li>
              <Typography.Text size="s">
                <a href="src/features/footer-block/footer-block#">Вакансии</a>
              </Typography.Text>
            </li>
            <li>
              <Typography.Text size="s">
                <a href="src/features/footer-block/footer-block#">
                  Стать наставником
                </a>
              </Typography.Text>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
