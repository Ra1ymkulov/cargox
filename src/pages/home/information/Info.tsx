import { FC } from "react";
import scss from "./Info.module.scss";
import AnimateNumber from "@/shared/ui/animateNumber/AnimateNumber";

const Info: FC = () => {
  const cardData = [
    {
      text: "Мы успешно доставили более 100 тысяч посылок по всему миру. Каждый заказ проходит полный контроль — от приёма на складе до вручения клиенту.",
      title: " заказов",
      imgUrl: "/icon-cube.svg",
      end: 100000,
      duration: 1.4,
      btnData: "Посмотреть отзывы",
      routers: "/reviews",
    },
    {
      text: "Доставляем грузы из Турции, Китая, США, Кореи и Европы.Быстро, надёжно и по лучшим маршрутам.",
      title: " стран доставки",
      imgUrl: "/icon-earth.svg",
      end: 20,
      duration: 3,
      btnData: "Узнать маршруты",
      routers: "/tariffs",
    },
    {
      text: "Опыт, доверие и профессионализм основа нашей работы. Мы развиваемся вместе с вами.",
      title: " лет на рынке",
      imgUrl: "/icon-file.svg",
      duration: 2.3,
      end: 5,
      btnData: "Подробнее о нас",
      routers: "/contact",
    },
  ];
  return (
    <section className={scss.info}>
      <div className={scss.content}>
        {cardData.map((item, idx) => (
          <AnimateNumber
            imgUrl={item.imgUrl}
            title={item.title}
            text={item.text}
            btnData={item.btnData}
            end={item.end}
            duration={item.duration}
            key={idx}
            routers={item.routers}
          />
        ))}
      </div>
    </section>
  );
};

export default Info;
