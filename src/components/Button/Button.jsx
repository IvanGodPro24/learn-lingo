import { Link } from "react-router-dom";
import css from "./Button.module.css";
import clsx from "clsx";

const Button = ({ children, to, isLink = false, onClick, type = "submit" }) => {
  return isLink ? (
    <Link to={to} className={clsx(css.btn, css.link)}>
      {children}
    </Link>
  ) : (
    <button
      type={type}
      className={clsx(css.btn, css["submit-btn"])}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
