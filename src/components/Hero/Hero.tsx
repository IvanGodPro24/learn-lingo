import Container from "../Container/Container";
import css from "./Hero.module.css";
import { useAppSelector } from "../../hooks/useAppSelector";
import { selectTheme } from "../../redux/theme/selectors";
import macYellow from "../../img/mac-yellow.png";
import { macImages } from "../../constants/constants";
import avatar from "../../img/avatar.png";
import Button from "../Button/Button";

const Hero = () => {
  const theme = useAppSelector(selectTheme);
  const macImage = macImages[theme] || macYellow;

  return (
    <section>
      <Container>
        <div className={css["external-container"]}>
          <div className={css["hero-text-container"]}>
            <h1 className={css.title}>
              Unlock your potential with the best{" "}
              <span className={css.span}>language</span> tutors
            </h1>

            <p className={css.text}>
              Embark on an Exciting Language Journey with Expert Language
              Tutors: Elevate your language proficiency to new heights by
              connecting with highly qualified and experienced tutors.
            </p>
            <Button to="/teachers" isLink={true}>
              Get started
            </Button>
          </div>

          <div className={css["img-container"]}>
            <img
              src={avatar}
              alt="avatar"
              className={css["avatar-img"]}
              width="339"
            />
            <img
              src={macImage}
              alt="mac"
              className={css["mac-img"]}
              width="391"
            />
          </div>
        </div>

        <ul className={css.list}>
          <li className={css.item}>
            <p className={css.number}>32,000 +</p>
            <p className={css.stats}>Experienced tutors</p>
          </li>
          <li className={css.item}>
            <p className={css.number}>300,000 + </p>
            <p className={css.stats}>5-star tutor reviews</p>
          </li>
          <li className={css.item}>
            <p className={css.number}>120 +</p>
            <p className={css.stats}>Subjects taught</p>
          </li>
          <li className={css.item}>
            <p className={css.number}>200 +</p>
            <p className={css.stats}>Tutor nationalities</p>
          </li>
        </ul>
      </Container>
    </section>
  );
};

export default Hero;
