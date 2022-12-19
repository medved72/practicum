import { StaticImageData } from "next/image";
import RobotDesktopImage from "@shared/assets/images/responsibilities/robot-desktop.webp";
import RobotMobileImage from "@shared/assets/images/responsibilities/robot.mobile.webp";
import YodaDesktopImage from "@shared/assets/images/responsibilities/yoda-desktop.webp";
import YodaMobileImage from "@shared/assets/images/responsibilities/yoda.mobile.webp";
import EdTechImage from "@shared/assets/images/responsibilities/ed-tech.webp";
import LearnNewImage from "@shared/assets/images/responsibilities/learn-new.webp";
import DedMazayImage from "@shared/assets/images/responsibilities/ded-mazay.webp";
import GrowthImage from "@shared/assets/images/responsibilities/growth.webp";

export type Responsibility = {
  title: string;
  text: string;
  image: {
    alt: string;
    srcSet: {
      desktop: StaticImageData;
      mobile: StaticImageData;
    };
  };
};

export const responsibilities: Responsibility[] = [
  {
    title: "Менять жизнь людей к лучшему",
    text: "Тысячи наших студентов нуждаются в ваших знаниях и опыте — не бойтесь ими делиться",
    image: {
      alt: "",
      srcSet: {
        desktop: { ...RobotDesktopImage, width: 448, height: 264 },
        mobile: RobotMobileImage,
      },
    },
  },
  {
    title: "Получать доход в среднем 30–55 тысяч рублей в месяц",
    text: "Работая удалённо 2–3 часа в день, график выбираете сами",
    image: {
      alt: "",
      srcSet: {
        desktop: { ...YodaDesktopImage, width: 488, height: 264 },
        mobile: YodaMobileImage,
      },
    },
  },
  {
    title: "Общаться в EdTech",
    text: "Станете частью сообщества экспертов и посмотрите на мир онлайн-образования изнутри",
    image: {
      alt: "",
      srcSet: { desktop: EdTechImage, mobile: EdTechImage },
    },
  },
  {
    title: "Учиться новому",
    text: "Узнаете, как давать обратную связь, выступать на публике и мотивировать людей",
    image: {
      alt: "",
      srcSet: { desktop: LearnNewImage, mobile: LearnNewImage },
    },
  },
  {
    title: "Развивать личный бренд",
    text: "Публикуйте статьи в блоге Практикума и выступайте на мероприятиях, чтобы о вас узнали как об эксперте",
    image: {
      alt: "",
      srcSet: { desktop: DedMazayImage, mobile: DedMazayImage },
    },
  },
  {
    title: "Расти внутри роли",
    text: "Вы сможете стать старшим наставником или сеньор-ревьюером",
    image: {
      alt: "",
      srcSet: { desktop: GrowthImage, mobile: GrowthImage },
    },
  },
];
