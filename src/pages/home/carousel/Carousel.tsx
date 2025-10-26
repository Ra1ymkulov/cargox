"use client";
import React, { FC } from "react";
import scss from "./Carousel.module.scss";
import Banner from "@/shared/ui/banner-card/Banner";
import { useGetServiceType } from "@/features/getServiceType";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider, { Settings } from "react-slick";

const NextArrow = ({ onClick }: any) => (
  <button className={`${scss.arrow} ${scss.next}`} onClick={onClick}>
    <IoIosArrowForward />
  </button>
);

const PrevArrow = ({ onClick }: any) => (
  <button className={`${scss.arrow} ${scss.prev}`} onClick={onClick}>
    <IoIosArrowBack />
  </button>
);

const Carousel: FC = () => {
  const { data: services, isLoading, error } = useGetServiceType();

  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    pauseOnHover: true,
    adaptiveHeight: true,
  };

  if (isLoading)
    return (
      <section className={scss.carousel}>
        <div className="container">
          <div className={scss.skeleton}>Загрузка баннеров...</div>
        </div>
      </section>
    );

  if (error || !services?.data?.length)
    return (
      <section className={scss.carousel}>
        <div className="container">
          <p className={scss.error}>
            Ошибка при загрузке данных или данных нет
          </p>
        </div>
      </section>
    );

  return (
    <section className={scss.carousel}>
      <img className={scss.back} src="/back-auto.svg" alt="" />
      <Slider {...settings}>
        {services.data.map((item: any, idx: number) => (
          <div key={idx} className={scss.slide}>
            <Banner item={item} />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Carousel;
