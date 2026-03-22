"use client";
import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import scss from "./AnimateNumber.module.scss";
import { useRouter } from "next/navigation";

interface AnimateNumberProps {
  end: number;
  duration?: number;
  text?: string;
  title?: string;
  btnData?: string;
  imgUrl: string;
  routers: string;
}

const AnimateNumber: React.FC<AnimateNumberProps> = ({
  end,
  duration = 2,
  text,
  title,
  btnData,
  imgUrl,
  routers,
}) => {
  const [startCount, setStartCount] = useState(false);
  const counterRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setStartCount(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    if (counterRef.current) observer.observe(counterRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={scss.card} ref={counterRef}>
      <img src={imgUrl} alt="" />
      <h2>
        {startCount ? (
          <CountUp end={end} duration={duration} separator=" " />
        ) : (
          0
        )}
        +{title}
      </h2>
      <p>{text}</p>
      {btnData && (
        <button onClick={() => router.push(routers)}>{btnData}</button>
      )}
    </div>
  );
};

export default AnimateNumber;
