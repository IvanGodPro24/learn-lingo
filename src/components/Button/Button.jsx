import { Link } from "react-router-dom";
import css from "./Button.module.css";
import clsx from "clsx";

const Button = ({ children, to, isLink = false, onClick, type = "submit" }) => {
  return isLink ? (
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
        type === "submit" ? css["submit-btn"] : css["book-btn"]
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
