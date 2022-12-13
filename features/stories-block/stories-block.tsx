import { ComponentProps, FC, useRef } from "react";
import Slider from "react-slick";
import { Typography } from "@shared/components";
import BackwardImage from "@shared/assets/images/backward.svg";
import ForwardImage from "@shared/assets/images/forward.svg";
import ArrowImage from "@shared/assets/images/roles-arrow.svg";

import styles from "./stories-block.module.scss";
import { StoriesCard } from "@features/stories-block/stories-card";

const settings: ComponentProps<typeof Slider> = {
  speed: 300,
  slidesToShow: 2,
  variableWidth: true,
  dots: false,
};

const stories: ComponentProps<typeof StoriesCard>[] = [
  {
    name: "Ирина",
    position: "старший код-ревьюер веб-факультета",
    text: "Работа код-ревьюера с гибким графиком, благодаря ей я получаю дополнительный доход и могу делиться своим опытом. Ведь при написании кода важно не только большое количество практики, но и поддержка коллег.",
  },
  {
    name: "Лиля",
    position: "наставник курса Интернет-маркетолог",
    text: "Для меня онлайн-преподавание — это суперудобно: я не трачу время на дорогу, всегда ем домашнюю еду, успеваю найти время для спорта и семьи. Единственный недостаток — отсутствие общения с коллегами. Поэтому я пришла в Практикум — ради онлайн тусовки и обмена опытом с коллегами.",
  },
  {
    name: "Дмитрий",
    position: "наставник курса IOS-разработчик",
    text: "Преподавание в Практикуме — это прежде всего профессионализм. Дружный коллектив поможет получить новые знания, опыт и позитивные эмоции от работы, а благодарность твоих студентов — вообще нечто бесценное.",
  },
  {
    name: "Юлия",
    position: "ревьюер курса React-разработчик",
    text: "Работать онлайн очень удобно: не надо тратить время и деньги на проезд. Вместо этого, например, можно сделать утреннюю йогу — ну и поспать подольше. Классно, что можно самомтоятельно выбирать свой график и в любой момент его поменять, если возникнет необходимость.",
  },
  {
    name: "Владимир",
    position: "ревьюер курса Веб-разработчик",
    text: "Когда я учился писать код, не было онлайн-курсов и площадок с наставниками, и было сложно ориентироваться, что действительно важно знать и уметь, а что нет. Сейчас я делюсь своим опытом и, мне кажется, делаю мир чуть лучше.",
  },
  {
    name: "Стас",
    position: "ревьюер курса Data Engineering",
    text: "С Практикумом меня объединяют любовь к технологиям, вера в онлайн-образование и желание помогать людям покорять новые горизонты. Сам почти полностью осваивал профессию онлайн, поэтому хочу и другим людям помочь в получении новых навыков.",
  },
];

export const StoriesBlock: FC = () => {
  const sliderRef = useRef<Slider>(null);

  return (
    <div className={styles.storiesBlock}>
      <div className={styles.arrow}>
        <ArrowImage />
      </div>
      <Typography.Header className={styles.header} level={2}>
        Истории ребят из нашей команды
      </Typography.Header>
      <div className={styles.motionControls}>
        <button
          className={styles.button}
          onClick={() => sliderRef.current?.slickPrev()}
        >
          <BackwardImage />
        </button>
        <button
          className={styles.button}
          onClick={() => sliderRef.current?.slickNext()}
        >
          <ForwardImage />
        </button>
      </div>
      <Slider ref={sliderRef} className={styles.storiesList} {...settings}>
        {stories.map((story, index) => (
          <div key={index} className={styles.story}>
            <StoriesCard
              name={story.name}
              position={story.position}
              text={story.text}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};
