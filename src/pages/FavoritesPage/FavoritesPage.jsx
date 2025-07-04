import { useSelector } from "react-redux";
import { selectFavourites } from "../../redux/teachers/selectors";
import TeachersList from "../../components/TeachersList/TeachersList";
import Container from "../../components/Container/Container";
import css from "./FavoritesPage.module.css";
import icons from "../../img/icons.svg";
import Button from "../../components/Button/Button";

const FavoritesPage = () => {
  const favorites = useSelector(selectFavourites);

  return (
    <>
      <title>Favourites</title>

      <section
        className={favorites.length > 0 ? css.section : css["empty-section"]}
      >
        <Container>
          {favorites.length > 0 ? (
            <TeachersList teachers={favorites} />
          ) : (
            <div className={css["empty-state"]}>
              <svg width="100" height="100" className={css.icon}>
                <use href={`${icons}#icon-heart`}></use>
              </svg>
              <h2 className={css.title}>No favorite teachers yet</h2>
              <p className={css.text}>
                You haven't added any teachers to your favorites list. Click the
                heart icon on teacher cards to add them here.
              </p>

              <Button to="/teachers" isLink={true}>
                Explore Teachers
              </Button>
            </div>
          )}
        </Container>
      </section>
    </>
  );
};

export default FavoritesPage;
