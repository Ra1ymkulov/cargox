"use client";
import React from "react";
import Banner from "./banner/Banner";
import TitleDetail from "./titleDetail/TitleDetail";
import Service from "./service/Service";
import { useGetServiceTypeQuery } from "@/entities/service-type/api/serviceTypeApi";
import { useParams } from "next/navigation";
type Params = {
  type?: string;
};
const DetailPage = () => {
  const { data, isLoading } = useGetServiceTypeQuery();
  const params = useParams<Params>();
  const type = params?.type || null;
  const element = data?.filter(
    (item) =>
      item.code.toLowerCase() === type || item.code.toLowerCase() === "ship\t"
  );

  return !isLoading ? (
    element?.map((item, idx) => (
      <div key={idx}>
        <Banner item={item} />
        <TitleDetail item={item} />
        <Service item={item} />
      </div>
    ))
  ) : (
    <h3 className="container">Загрузка...</h3>
  );
};

export default DetailPage;
