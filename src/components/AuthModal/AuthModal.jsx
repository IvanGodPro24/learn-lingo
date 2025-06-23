import Modal from "react-modal";
import * as Yup from "yup";
import css from "./AuthModal.module.css";
import icons from "../../img/icons.svg";
import Button from "../Button/Button";
import { useId, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

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

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter a valid email")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const registerSchema = loginSchema.shape({
  username: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .max(32, "Name must be less than 32 characters")
    .required("Name is required"),
});

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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(isRegisterModal ? registerSchema : loginSchema),
  });

  const [data, setData] = useState("");

  const onSubmit = (data) => {
    setData(data);
    console.log(data);
  };

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

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={css.container}>
          {isRegisterModal && (
            <div className="relative">
              <input
                {...register("username")}
                type="text"
                name="username"
                id={nameId}
                className={css.input}
                placeholder="Name"
              />
              <div className="error">{errors.username?.message}</div>
            </div>
          )}

          <div className="relative">
            <input
              {...register("email")}
              type="email"
              name="email"
              id={emailId}
              className={css.input}
              placeholder="Email"
            />
            <div className="error">{errors.email?.message}</div>
          </div>

          <div className="relative">
            <input
              {...register("password")}
              type={isPasswordShown ? "text" : "password"}
              name="password"
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

            <div className="error">{errors.password?.message}</div>
          </div>
        </div>

        <Button>{btn}</Button>
      </form>
    </Modal>
  );
};

export default AuthModal;
