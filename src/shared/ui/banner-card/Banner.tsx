import { FC } from "react";
import scss from "./Banner.module.scss";
import { useRouter } from "next/navigation";

interface BannerProps {
  item: {
    name: string;
    description: {
      info: {
        text: string;
        title: string;
      }[];
    };
    code: string;
  };
}

const Banner: FC<BannerProps> = ({ item }) => {
  const router = useRouter();
  return (
    <div className={scss.banner}>
      <h2>{item.name}</h2>
      <div className={scss.title}>
        {item.description.info.slice(0, 3).map((el, index) => (
          <p key={index}>
            {el.title} <br />
            <span>{el.text}</span>
          </p>
        ))}
      </div>

      <button onClick={() => router.push(`/detail/${item.code}`)}>
        Подробнее
      </button>
    </div>
  );
};

export default Banner;
