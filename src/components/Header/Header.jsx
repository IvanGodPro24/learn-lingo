import css from "./Header.module.css";
import icons from "../../img/icons.svg";
import { useSelector } from "react-redux";
import { selectUser, selectisLoggedIn } from "../../redux/auth/selectors";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/auth/operations";
import { Link, NavLink } from "react-router-dom";
import clsx from "clsx";
import Container from "../Container/Container";
import useModal from "../../hooks/useModal";
import AuthModal from "../AuthModal/AuthModal";
import BurgerModal from "../BurgerModal/BurgerModal";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const registerModal = useModal();
  const loginModal = useModal();
  const burgerModal = useModal();

  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectisLoggedIn);

  const openRegister = () => {
    burgerModal.closeModal();
    registerModal.openModal();
  };

  const openLogIn = () => {
    burgerModal.closeModal();
    loginModal.openModal();
  };

  const handleLogout = () => {
    dispatch(logout());

    navigate("/");
  };

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
          {isLoggedIn ? (
            <>
              <div className={css.avatar}>
                {user.displayName ? user.displayName[0] : user.email[0]}
              </div>
              <button
                type="button"
                className={clsx(css.container, css["log-out-btn"])}
                onClick={handleLogout}
              >
                <svg className={css["log-in-icon"]} width="20" height="20">
                  <use href={`${icons}#icon-log-in`}></use>
                </svg>
                <p className={css["log-out-text"]}>Log out</p>
              </button>
            </>
          ) : (
            <>
              <button
                type="button"
                className={css.burger}
                onClick={burgerModal.openModal}
              >
                <svg width="20" height="20">
                  <use href={`${icons}#icon-burger`}></use>
                </svg>
              </button>
              <button
                type="button"
                className={clsx(css.container, css["log-in-btn"])}
                onClick={loginModal.openModal}
              >
                <svg className={css["log-in-icon"]} width="20" height="20">
                  <use href={`${icons}#icon-log-in`}></use>
                </svg>
                <p className={css.text}>Log in</p>
              </button>
              <button
                type="button"
                className={css["register-btn"]}
                onClick={registerModal.openModal}
              >
                Registration
              </button>
            </>
          )}
        </div>
      </header>

      <AuthModal
        isOpen={registerModal.isOpen}
        onClose={registerModal.closeModal}
        title="Registration"
        text="Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information"
        btn="Sign Up"
        isRegisterModal={true}
      />

      <AuthModal
        isOpen={loginModal.isOpen}
        onClose={loginModal.closeModal}
        title="Log In"
        text="Welcome back! Please enter your credentials to access your account and continue your search for an teacher."
        btn="Log In"
      />

      <BurgerModal
        isOpen={burgerModal.isOpen}
        onClose={burgerModal.closeModal}
        isRegister={openRegister}
        isLogIn={openLogIn}
      />
    </Container>
  );
};

export default Header;
