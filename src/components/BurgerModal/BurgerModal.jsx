import Modal from "react-modal";
import css from "./BurgerModal.module.css";
import icons from "../../img/icons.svg";
import Button from "../Button/Button";

const customStyles = {
  content: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "64px",
    border: "none",
  },
};

Modal.setAppElement("#root");

const BurgerModal = ({ isOpen, onClose, isLogIn, isRegister }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      closeTimeoutMS={250}
    >
      <button onClick={onClose} className="close">
        <svg width="32" height="32" className="icon">
          <use href={`${icons}#icon-close`}></use>
        </svg>
      </button>

      <div className={css.container}>
        <Button type="button" onClick={isLogIn}>
          Log In
        </Button>
        <Button type="button" onClick={isRegister}>
          Register
        </Button>
      </div>
    </Modal>
  );
};

export default BurgerModal;
