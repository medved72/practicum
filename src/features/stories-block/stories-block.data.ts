import { ComponentProps } from "react";
import { StoriesCard } from "@features/stories-block/stories-card";
import IrinaVideo from "@shared/assets/video/irina-video.mp4";
import IrinaPoster from "@shared/assets/video/irina-poster.png";
import DmitryPoster from "@shared/assets/video/dmitry-poster.png";
import JulyPoster from "@shared/assets/video/july-poster.png";
import LilyPoster from "@shared/assets/video/lily-poster.png";
import StasPoster from "@shared/assets/video/stas-poster.png";
import VladimirPoster from "@shared/assets/video/vladimir-poster.png";

export const stories: ComponentProps<typeof StoriesCard>[] = [
  {
    name: "Ирина",
    position: "старший код-ревьюер веб-факультета",
    text: "Работа код-ревьюера с гибким графиком, благодаря ей я получаю дополнительный доход и могу делиться своим опытом. Ведь при написании кода важно не только большое количество практики, но и поддержка коллег.",
    poster: { url: IrinaPoster.src, alt: "" },
    videoUrl: IrinaVideo,
  },
  {
    name: "Лиля",
    position: "наставник курса Интернет-маркетолог",
    text: "Для меня онлайн-преподавание — это суперудобно: я не трачу время на дорогу, всегда ем домашнюю еду, успеваю найти время для спорта и семьи. Единственный недостаток — отсутствие общения с коллегами. Поэтому я пришла в Практикум — ради онлайн тусовки и обмена опытом с коллегами.",
    poster: { url: LilyPoster.src, alt: "" },
    videoUrl: IrinaVideo,
  },
  {
    name: "Дмитрий",
    position: "наставник курса IOS-разработчик",
    text: "Преподавание в Практикуме — это прежде всего профессионализм. Дружный коллектив поможет получить новые знания, опыт и позитивные эмоции от работы, а благодарность твоих студентов — вообще нечто бесценное.",
    poster: { url: DmitryPoster.src, alt: "" },
    videoUrl: IrinaVideo,
  },
  {
    name: "Юлия",
    position: "ревьюер курса React-разработчик",
    text: "Работать онлайн очень удобно: не надо тратить время и деньги на проезд. Вместо этого, например, можно сделать утреннюю йогу — ну и поспать подольше. Классно, что можно самомтоятельно выбирать свой график и в любой момент его поменять, если возникнет необходимость.",
    poster: { url: JulyPoster.src, alt: "" },
    videoUrl: IrinaVideo,
  },
  {
    name: "Владимир",
    position: "ревьюер курса Веб-разработчик",
    text: "Когда я учился писать код, не было онлайн-курсов и площадок с наставниками, и было сложно ориентироваться, что действительно важно знать и уметь, а что нет. Сейчас я делюсь своим опытом и, мне кажется, делаю мир чуть лучше.",
    poster: { url: VladimirPoster.src, alt: "" },
    videoUrl: IrinaVideo,
  },
  {
    name: "Стас",
    position: "ревьюер курса Data Engineering",
    text: "С Практикумом меня объединяют любовь к технологиям, вера в онлайн-образование и желание помогать людям покорять новые горизонты. Сам почти полностью осваивал профессию онлайн, поэтому хочу и другим людям помочь в получении новых навыков.",
    poster: { url: StasPoster.src, alt: "" },
    videoUrl: IrinaVideo,
  },
];
