import { useChangeStatus } from "@/features/status/api/statusApi";
import scss from "./Modal.module.scss";
import { FC, useState } from "react";

interface IModalProps {
  closeModal: () => void;
  setTab: (tab: string) => void;
  status: OrderStatus;
  itemId: string;
  userId: string;
}
const Modal: FC<IModalProps> = ({
  closeModal,
  setTab,
  status,
  itemId,
  userId,
}) => {
  const { mutate: changeStatus } = useChangeStatus();
  const [selectValue, setSelectValue] = useState(status);

  return (
    <div className={scss.modal}>
      <div className={scss.modalContent}>
        <h2>Изменить статус</h2>
        <select
          defaultValue={selectValue}
          onChange={(e: any) => setSelectValue(e.target.value)}
        >
          <option value="CREATED">Создан</option>
          <option value="IN_TRANSIT">В пути</option>
          <option value="DELIVERED">Доставлен</option>
          <option value="CANCELED">Отменено</option>
        </select>
        <button
          onClick={() => {
            changeStatus({ id: itemId, status: selectValue, userId });
            setTab(selectValue);
            window.location.reload();
          }}
        >
          Подтвердить
        </button>
        <button onClick={closeModal}>Закрыть</button>
      </div>
    </div>
  );
};

export default Modal;
