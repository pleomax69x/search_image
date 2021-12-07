import { createPortal } from "react-dom";
import s from "./modal.module.css";

const Modal = ({ img, backDrop }) => {
  const modalRoot = document.getElementById("modal-root");

  // const img =
  // "https://pixabay.com/get/gdbc15ba0637cacb560fc48b9fbc399b50cfc07ae191c464255e405317c906294ef009b30a584bb7908d0fbd28e67f944571b6fd49031fbb8f298805fadca819c_1280.jpg";

  return createPortal(
    <div onClick={backDrop} className={s.Overlay}>
      <div className={s.Modal}>
        <img src={img} alt="" />
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
