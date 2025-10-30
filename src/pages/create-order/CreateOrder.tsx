"use client";
import React, { useEffect, useState } from "react";
import scss from "./CreateOrder.module.scss";
import { useCreateOrder } from "@/features/create-order";
import { useGetUserQuery } from "@/entities/user/api/userApi";
import { useGetAllServiceQuery } from "@/entities/all-service/api/allService";
import { useGetServiceTypeQuery } from "@/entities/service-type/api/serviceTypeApi";
import { useGetCalculatePriceQuery } from "@/entities/calculate/api/calculatePrice";
const CreateOrder = () => {
  const [price, setPrice] = useState<number>(0);
  const { mutateAsync: createOrder } = useCreateOrder();
  const { data: user } = useGetUserQuery();
  const { data: allService } = useGetAllServiceQuery();
  const { data: serviceType } = useGetServiceTypeQuery();
  const [toCity, setToCity] = useState<string>("");
  const [fromCity, setFromCity] = useState<string>("");
  const [serviceTypeState, setServiceTypeState] = useState<string>("");
  const [weight, setWeight] = useState<number>(0);
  const { mutateAsync: calculatePrice } = useGetCalculatePriceQuery();
  useEffect(() => {
    const handleCalculate = async () => {
      if (!fromCity || !toCity || !serviceTypeState || !weight) {
        return;
      }
      try {
        const res = await calculatePrice({
          fromCityId: fromCity,
          toCityId: toCity,
          weightKg: weight,
          serviceTypeId: serviceTypeState,
        });
        setPrice(res.price);
      } catch (error) {
        console.error("Ошибка при расчёте цены:", error);
        setPrice(0);
      }
    };

    handleCalculate();
  }, [fromCity, toCity, serviceTypeState, weight]);
  return (
    <div className={scss.create}>
      <div className={scss.content}>
        <div className={scss.title}>
          <h3>Оформление заказа</h3>
        </div>
        <div className={scss.inputs}>
          <div className={scss.flex}>
            <div className={scss.selectBlock}>
              <p>Откуда</p>
              <select onChange={(e) => setFromCity(e.target.value)}>
                <option value="">Выбрать город</option>;
                {allService?.map((item, index) => (
                  <option key={index} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
            <div className={scss.selectBlock}>
              <p>Куда</p>
              <select onChange={(e) => setToCity(e.target.value)}>
                <option value="">Выбрать город</option>
                {allService?.map((item, index) => (
                  <option key={index} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className={scss.selectBlock}>
            <p>Тариф</p>
            <select
              onChange={(e) => setServiceTypeState(e.target.value)}
              style={{ width: "490px" }}
            >
              <option value="">Выбрать тариф</option>
              {serviceType?.map((item, index) => (
                <option key={index} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
          <div className={scss.flex}>
            <div className={scss.inputBlock}>
              <p>Вес</p>
              <input onChange={(e) => setWeight(+e.target.value)} type="text" />
            </div>
            <div className={scss.price}>
              <p>Стоимость</p>
              <div>
                <p>{price.toFixed(1)}</p>
              </div>
            </div>
          </div>
          <button
            onClick={() =>
              createOrder({
                userId: user?.id,
                fromCityId: fromCity,
                toCityId: toCity,
                weightKg: weight,
                serviceTypeId: serviceTypeState,
              })
            }
          >
            Перейти к оплате
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateOrder;
