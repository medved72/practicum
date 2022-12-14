import { Accordion, Typography } from "@shared/components";
import { FC } from "react";
import styles from "./faq-block.module.scss";

export const FaqBlock: FC = () => {
  return (
    <div id="faq" className={styles.faqBlock}>
      <Typography.Header className={styles.header} level={2}>
        Если остались вопросы
      </Typography.Header>
      <Accordion>
        {faqItems.map((item, index) => (
          <Accordion.Item key={index} label={item.question}>
            <Typography.Text className={styles.answer} size="l">
              {item.answer}
            </Typography.Text>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
};

interface FaqItem {
  question: string;
  answer: string;
}

const faqItems: FaqItem[] = [
  {
    question: "Как планировать нагрузку?",
    answer:
      "Вы выбираете удобное время и определяете, сколько часов готовы выделить  для занятий, а наши кураторы подбирают вам студентов под ваш график. При необходимости вы можете поменять график через кураторов.",
  },
  {
    question: "Сколько у меня будет студентов?",
    answer:
      "Вы сами выбираете, сколько студентов хотите вести одновременно. Студенты закрепляются за вами на всё время обучения, чтобы вы могли видеть их прогресс.",
  },
  {
    question: "Как устроена оплата?",
    answer:
      "Ваша почасовая ставка фиксированная — 450₽. Одно занятие со студентом длится 30 минут. Выплаты поступают вам каждые две недели в соответствии со ставкой и количеством проведённых занятий.",
  },
  {
    question: "Есть ли технические требования?",
    answer:
      "Работать можно только с ноутбука или компьютера — возможностей телефона не хватит для полноценного занятия. Вам понадобятся камера с хорошим качеством изображения, микрофон с шумоподавлением  и наушники, а также стабильный интернет со скоростью не ниже 15 мбит/сек.",
  },
];
