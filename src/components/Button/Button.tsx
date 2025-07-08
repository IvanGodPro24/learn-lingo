import { Link } from "react-router-dom";
import css from "./Button.module.css";
import clsx from "clsx";
import { ButtonProps } from "./Button.types";

const Button = ({
  children,
  to,
  isLink = false,
  isPaginationBtn = false,
  onClick,
  type = "submit",
}: ButtonProps) => {
  return isLink && to ? (
    <Link
      to={to}
      className={clsx(
        css.btn,
        children === "Explore Teachers" ? css.explore : css.link
      )}
      onClick={onClick}
    >
      {children}
    </Link>
  ) : (
    <button
      type={type}
      className={clsx(
        css.btn,
        type === "submit" ? css["submit-btn"] : css["book-btn"],
        isPaginationBtn && "m-auto"
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
