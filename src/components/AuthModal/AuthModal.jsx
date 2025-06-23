import Modal from "react-modal";
import css from "./AuthModal.module.css";
import icons from "../../img/icons.svg";
import Button from "../Button/Button";
import { useId, useState } from "react";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(46, 47, 66, 0.4)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "64px",
    border: "none",
    borderRadius: "12px",
  },
};

Modal.setAppElement("#root");

const AuthModal = ({
  isOpen,
  onClose,
  title,
  text,
  btn,
  isRegisterModal = false,
}) => {
  const nameId = useId();
  const emailId = useId();
  const passwordId = useId();

  const [isPasswordShown, setIsPasswordShown] = useState(false);

  const toggleShowPassword = () => setIsPasswordShown((prev) => !prev);

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

      <div>
        <p className={css.title}>{title}</p>
        <p className={css.text}>{text}</p>
      </div>

      <form>
        <div className={css.container}>
          {isRegisterModal && (
            <input
              type="text"
              name="user-name"
              id={nameId}
              className={css.input}
              placeholder="Name"
            />
          )}
          <input
            type="email"
            name="user-email"
            id={emailId}
            className={css.input}
            placeholder="Email"
          />
          <div className="relative">
            <input
              type={isPasswordShown ? "text" : "password"}
              name="user-password"
              id={passwordId}
              className={css.input}
              placeholder="Password"
            />
            <button
              type="button"
              className={css["eye-btn"]}
              onClick={toggleShowPassword}
            >
              <svg className={css.eye} width="20" height="20">
                <use
                  href={
                    isPasswordShown
                      ? `${icons}#icon-eye-off`
                      : `${icons}#icon-eye-on`
                  }
                ></use>
              </svg>
            </button>
          </div>
        </div>

        <Button>{btn}</Button>
      </form>
    </Modal>
  );
};

export default AuthModal;
