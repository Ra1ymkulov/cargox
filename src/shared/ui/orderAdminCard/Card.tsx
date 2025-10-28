import { useGetUserQuery } from "@/entities/user/api/userApi";
import scss from "./Card.module.scss"
import { FiBox } from "react-icons/fi";
import { useState } from "react";
import Modal from "../modalChangeStatus/Modal";
interface ICardProps {
    item: OrderUser
    setTab: (tab: string) => void
}
const Card = ({item, setTab}: ICardProps) => {
    const { data: user } = useGetUserQuery();
    const [modalShow, setModalShow] = useState(false)
   
    const sliceCityId = (city: string) => {
       const res = `${city.slice(3, -9)}`;
       return res;
    };
    return <div className={scss.card}>
        <div className={scss.contentbox}>
          <div className={scss.contentTeg}>
            <h1>Трек-код:</h1>
            <span>{item.trackingCode}</span>
          </div>
          <div className={scss.contentboxYellow}>
           <div className={`${scss.status} ${scss[item.status.toLowerCase()]}`}></div>
            <p>{item.status}</p>    
          </div>
        </div>
        <div className={scss.contentOrder}>
          <div className={scss.contentPast}>
            <div className={scss.contentPastTeg}>
              <span>Откуда:</span>
              <p>{sliceCityId(item.fromCityId)}</p>
            </div>
            <div className={scss.contentPastTeg}>
              <span>Куда:</span>
              <p>{sliceCityId(item.toCityId)}</p>
            </div>
          </div>
          <div className={scss.contentPrice}>
            <div className={scss.contentPriceTeg}>
              <span>Вес:</span>
              <p>{item.weightKg}kg</p>
            </div>
            <div className={scss.contentPriceTeg}>
              <span>Цена:</span>
              <p>{item.price.toFixed(1)}сом</p>
            </div>
          </div>
        </div>
        <div className={scss.contentWhoPostet}>
          <FiBox />   
          <span>Отправитель:</span>
          <p>{user?.fullName}</p>
        </div>
        <button onClick={() => setModalShow(true)}>Изменить статус</button>
      {modalShow && (
        <Modal
          closeModal={() => setModalShow(false)}
          
          status={item.status}
          itemId={item.id}
          userId={item.userId}
        />
      )}
    </div>
}
export default Card