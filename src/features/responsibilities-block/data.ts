import { StaticImageData } from "next/image";
import RobotImage from "@shared/assets/images/robot.png";
import YodaImage from "@shared/assets/images/yoda.png";
import EdTechImage from "@shared/assets/images/ed-tech.png";
import LearnNewImage from "@shared/assets/images/learn-new.png";
import DedMazayImage from "@shared/assets/images/ded-mazay.png";
import GrowthImage from "@shared/assets/images/growth.png";

type Responsibility = {
  title: string;
  text: string;
  image: StaticImageData;
};

export const responsibilities: Responsibility[] = [
  {
    title: "Менять жизнь людей к лучшему",
    text: "Тысячи наших студентов нуждаются в ваших знаниях и опыте — не бойтесь ими делиться",
    image: RobotImage,
  },
  {
    title: "Получать доход в среднем 30–55 тысяч рублей в месяц",
    text: "Работая удалённо 2–3 часа в день, график выбираете сами",
    image: YodaImage,
  },
  {
    title: "Общаться в EdTech",
    text: "Станете частью сообщества экспертов и посмотрите на мир онлайн-образования изнутри",
    image: EdTechImage,
  },
  {
    title: "Учиться новому",
    text: "Узнаете, как давать обратную связь, выступать на публике и мотивировать людей",
    image: LearnNewImage,
  },
  {
    title: "Развивать личный бренд",
    text: "Публикуйте статьи в блоге Практикума и выступайте на мероприятиях, чтобы о вас узнали как об эксперте",
    image: DedMazayImage,
  },
  {
    title: "Расти внутри роли",
    text: "Вы сможете стать старшим наставником или сеньор-ревьюером",
    image: GrowthImage,
  },
];
