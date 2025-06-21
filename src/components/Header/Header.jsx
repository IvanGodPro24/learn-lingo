import css from "./Header.module.css";
import icons from "../../img/icons.svg";
import { Link, NavLink } from "react-router-dom";
import clsx from "clsx";
import Container from "../Container/Container";

const Header = () => {
  return (
    <Container>
      <header className={css["main-container"]}>
        <div>
          <Link className={css.container}>
            <svg width="28" height="28">
              <use href={`${icons}#icon-ukraine`}></use>
            </svg>
            <p className={css["logo-text"]}>LearnLingo</p>
          </Link>
        </div>

        <nav className={clsx(css.container, css["g-28"])}>
          <NavLink to="/" className={css.link}>
            Home
          </NavLink>
          <NavLink to="/teachers" className={css.link}>
            Teachers
          </NavLink>
        </nav>

        <div className={clsx(css.container, css["g-16"])}>
          <button className={css.burger}>
            <svg width="20" height="20">
              <use href={`${icons}#icon-burger`}></use>
            </svg>
          </button>
          <button
            type="button"
            className={clsx(css.container, css["log-in-btn"])}
          >
            <svg className={css["log-in-icon"]} width="20" height="20">
              <use href={`${icons}#icon-log-in`}></use>
            </svg>
            <p className={css.text}>Log in</p>
          </button>
          <button type="button" className={css["register-btn"]}>
            Registration
          </button>
        </div>
      </header>
    </Container>
  );
};

export default Header;
