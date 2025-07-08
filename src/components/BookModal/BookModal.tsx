import Modal from "react-modal";
import * as Yup from "yup";
import css from "./BookModal.module.css";
import icons from "../../img/icons.svg";
import Button from "../Button/Button";
import { useId, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "sonner";
import RadioGroup from "../RadioGroup/RadioGroup";
import { items } from "../../constants/constants";
import { BookModalProps, BookModalSubmit } from "./BookModal.types";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(46, 47, 66, 0.4)",
  },
  content: {
    height: "900px",
    overflow: "scroll",
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

const bookSchema = Yup.object().shape({
  fullname: Yup.string()
    .required("Full Name is required")
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must not exceed 50 characters"),

  email: Yup.string()
    .required("Email is required")
    .email("Please enter a valid email")
    .max(50, "Email must not exceed 50 characters"),

  number: Yup.string()
    .required("Phone number is required")
    .matches(
      /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
      "Please enter a valid phone number"
    )
    .min(10, "Phone number must be at least 10 characters")
    .max(15, "Phone number must not exceed 15 characters"),
});

Modal.setAppElement("#root");

const BookModal = ({ isOpen, onClose, teacher, avatar }: BookModalProps) => {
  const nameId = useId();
  const emailId = useId();
  const numberId = useId();

  const [value, setValue] = useState("Career and business");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(bookSchema),
  });

  const onSubmit = async ({ fullname }: BookModalSubmit) => {
    toast.success(
      `Congratulations ${fullname}, you have booked a trial lesson with ${teacher}`
    );

    reset();
    onClose();
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
        <p className="title">Book trial lesson</p>
        <p className="text">
          Our experienced tutor will assess your current language level, discuss
          your learning goals, and tailor the lesson to your specific needs.
        </p>
      </div>

      <div className={css["teacher-container"]}>
        <img src={avatar} alt={`${teacher}`} className={css.avatar} />
        <div className={css["internal-teacher-container"]}>
          <p className={css.secondary}>Your teacher</p>
          <p>{teacher}</p>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <p className={css.title}>
          What is your main reason for learning English?
        </p>

        <RadioGroup
          name="reason"
          items={items}
          value={value}
          onChange={setValue}
        />

        <div className="container">
          <div className="relative">
            <input
              {...register("fullname")}
              type="text"
              name="fullname"
              id={nameId}
              className="input"
              placeholder="Full Name"
            />
            <div className="error">{errors.fullname?.message}</div>
          </div>

          <div className="relative">
            <input
              {...register("email")}
              type="email"
              name="email"
              id={emailId}
              className="input"
              placeholder="Email"
            />
            <div className="error">{errors.email?.message}</div>
          </div>

          <div className="relative">
            <input
              {...register("number")}
              type="tel"
              name="number"
              id={numberId}
              className="input"
              placeholder="Phone number"
            />

            <div className="error">{errors.number?.message}</div>
          </div>
        </div>
        <Button>Book</Button>
      </form>
    </Modal>
  );
};

export default BookModal;
