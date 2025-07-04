import css from "./TeachersItem.module.css";
import { useState } from "react";
import icons from "../../img/icons.svg";
import clsx from "clsx";
import Button from "../Button/Button";
import useModal from "../../hooks/useModal";
import BookModal from "../BookModal/BookModal";
import { useDispatch, useSelector } from "react-redux";
import { selectFavourites } from "../../redux/teachers/selectors";
import { addFavourite, clearFavourite } from "../../redux/teachers/slice";
import { selectisLoggedIn } from "../../redux/auth/selectors";
import { toast } from "sonner";

const TeachersItem = ({
  id,
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
  selectedLevels,
}) => {
  const dispatch = useDispatch();

  const [isExtended, setIsExtended] = useState(false);

  const toggleExtended = () => setIsExtended((prev) => !prev);

  const bookModal = useModal();

  const isLoggedIn = useSelector(selectisLoggedIn);
  const favourites = useSelector(selectFavourites);

  const isFavourite = favourites.some((favourite) => favourite?.id === id);

  const toggleFavourite = () => {
    if (isLoggedIn) {
      !isFavourite
        ? dispatch(
            addFavourite({
              id,
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
            })
          )
        : dispatch(clearFavourite({ id }));
    } else {
      toast.error(
        "This feature is available only for authorized users. Please log in to access it."
      );
    }
  };

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

          <button
            type="button"
            className={css["heart-btn"]}
            onClick={toggleFavourite}
          >
            <svg
              width="26"
              height="26"
              className={clsx(css.icon, { [css.fill]: isFavourite })}
            >
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

        <div
          className={clsx(css["extended-content"], {
            [css.expanded]: isExtended,
          })}
        >
          {isExtended && (
            <>
              <p className={css.text}>{experience}</p>

              <ul>
                {reviews.map(
                  ({ reviewer_name, reviewer_rating, comment }, index) => (
                    <li className={css.reviews} key={index}>
                      <div className={css["reviews-container"]}>
                        <svg width="44" height="44">
                          <use href={`${icons}#icon-user`}></use>
                        </svg>
                        <div className={css["rating-container"]}>
                          <p className={css.secondary}>{reviewer_name}</p>
                          <div className={css["internal-rating-container"]}>
                            <svg width="16" height="16" className={css.fill}>
                              <use href={`${icons}#icon-star`}></use>
                            </svg>
                            <p>
                              {Number.isInteger(reviewer_rating)
                                ? `${reviewer_rating}.0`
                                : reviewer_rating}
                            </p>
                          </div>
                        </div>
                      </div>
                      <p>{comment}</p>
                    </li>
                  )
                )}
              </ul>
            </>
          )}
        </div>

        <button
          type="button"
          className={clsx(css.read, "underline")}
          onClick={toggleExtended}
        >
          {isExtended ? "Read less" : "Read more"}
        </button>

        <ul className={css["levels-list"]}>
          {levels.map((level, index) => {
            const isActive = selectedLevels?.includes(level);
            return (
              <li
                key={index}
                className={clsx(css["levels-item"], {
                  [css.active]: isActive,
                })}
              >
                <p className={css["levels-text"]}>#{level}</p>
              </li>
            );
          })}
        </ul>

        {isExtended && (
          <Button type="button" onClick={bookModal.openModal}>
            Book trial lesson
          </Button>
        )}
      </div>

      <BookModal
        isOpen={bookModal.isOpen}
        onClose={bookModal.closeModal}
        teacher={`${name} ${surname}`}
        avatar={avatar_url}
      />
    </>
  );
};

export default TeachersItem;
