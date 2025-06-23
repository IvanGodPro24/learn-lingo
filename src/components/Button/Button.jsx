import { Link } from "react-router-dom";
import css from "./Button.module.css";
import clsx from "clsx";

const Button = ({ children, to, isLink = false }) => {
  return isLink ? (
    <Link to={to} className={clsx(css.btn, css.link)}>
      {children}
    </Link>
  ) : (
    <button type="submit" className={clsx(css.btn, css["submit-btn"])}>
      {children}
    </button>
  );
};

export default Button;
