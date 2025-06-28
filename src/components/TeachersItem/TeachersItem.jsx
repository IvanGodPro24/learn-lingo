import css from "./TeachersItem.module.css";
import icons from "../../img/icons.svg";
import clsx from "clsx";

const TeachersItem = ({
  name,
  surname,
  avatar_url,
  conditions,
  experience,
  languages,
  lesson_info,
  lessons_done,
  levels,
  price_per_hour,
  rating,
  reviews,
}) => {
  return (
    <>
      <div className={clsx("relative", css["avatar-container"])}>
        <img
          src={avatar_url}
          alt={`${name} ${surname}`}
          className={css.avatar}
        />
        <svg width="12" height="12" className={css.dot}>
          <use href={`${icons}#icon-dot`}></use>
        </svg>
      </div>

      <div className={css["main-container"]}>
        <div className={css["top-container"]}>
          <div className={css.container}>
            <p className={css.secondary}>Languages</p>
            <p className={css.main}>
              {name} {surname}
            </p>
          </div>

          <ul className={css.list}>
            <li className={css.item}>
              <svg width="16" height="16" className={css.icon}>
                <use href={`${icons}#icon-book`}></use>
              </svg>
              <p>Lessons online</p>
            </li>
            <li className={css.item}>
              <p>Lessons done: {lessons_done}</p>
            </li>
            <li className={css.item}>
              <svg width="16" height="16" className={css.fill}>
                <use href={`${icons}#icon-star`}></use>
              </svg>
              <p>Rating: {rating}</p>
            </li>
            <li className={css.item}>
              <p>
                Price / 1 hour:{" "}
                <span className={css.price}>{price_per_hour}$</span>
              </p>
            </li>
          </ul>

          <button type="button">
            <svg width="26" height="26" className={css.icon}>
              <use href={`${icons}#icon-heart`}></use>
            </svg>
          </button>
        </div>

        <ul className={css["description-list"]}>
          <li>
            <p className={css.languages}>
              <span className={css.secondary}>Speaks:</span>
              <span className="underline">{languages.join(", ")}</span>
            </p>
          </li>
          <li>
            <p>
              <span className={css.secondary}>Lesson Info:</span> {lesson_info}
            </p>
          </li>
          <li>
            <p>
              <span className={css.secondary}>Conditions:</span>{" "}
              {conditions.join(" ")}
            </p>
          </li>
        </ul>

        <button type="button" className={clsx(css.read, "underline")}>
          Read more
        </button>

        <ul className={css["levels-list"]}>
          {levels.map((level, index) => (
            <li key={index} className={css["levels-item"]}>
              <p className={css["levels-text"]}>#{level}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TeachersItem;
