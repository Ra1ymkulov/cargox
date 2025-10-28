import { useChangeStatus } from "@/features/status/api/statusApi";
import scss from "./Modal.module.scss";
import { FC, useState } from "react";

interface IModalProps {
    closeModal: () => void;
    status: string;
    itemId: number;
    userId: string;
}
const Modal: FC<IModalProps> = ({ closeModal, status, itemId, userId }) => {
    const { mutate: changeStatus } = useChangeStatus();
    const [selectValue, setSelectValue] = useState(status);
    console.log(status);
    console.log("itemId:", itemId);
    console.log("userId:", userId);

  return (
    <div className={scss.modal}>
      <div className={scss.modalContent}>
        <h2>Изменить статус</h2>
        <select defaultValue={selectValue} onChange={(e) => setSelectValue(e.target.value)}>
          <option value="CREATED">Создан</option>
          <option value="IN_TRANSIT">В пути</option>
          <option value="DELIVERED">Доставлен</option>
        </select>
        <button onClick={() => changeStatus({ id: itemId, status: selectValue, userId })}>Подтвердить</button>
        <button onClick={closeModal}>Закрыть</button>
      </div>
    </div>
  );
};

export default Modal;
