import { useDispatch, useSelector } from "react-redux";
import {
  selectHasMore,
  selectIsLoading,
  selectTeachers,
} from "../../redux/teachers/selectors";
import { useEffect, useState } from "react";
import { getTeachers } from "../../redux/teachers/operations";
import css from "./TeachersPage.module.css";
import icons from "../../img/icons.svg";
import Loader from "../../components/Loader/Loader";
import TeachersList from "../../components/TeachersList/TeachersList";
import Container from "../../components/Container/Container";
import Button from "../../components/Button/Button";
import { resetTeachers } from "../../redux/teachers/slice";
import TeacherFilter from "../../components/TeacherFilter/TeacherFilter";

const TeachersPage = () => {
  const dispatch = useDispatch();
  const teachers = useSelector(selectTeachers);
  const isLoading = useSelector(selectIsLoading);
  const hasMore = useSelector(selectHasMore);

  const perPage = 4;

  const [filters, setFilters] = useState({
    name: "",
    language: [],
    level: [],
    rating: null,
    price: null,
  });

  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(resetTeachers());
    setPage(1);
    dispatch(getTeachers({ perPage, page: 1, filters }));
  }, [dispatch, perPage, filters]);

  const handleLoadMore = () => {
    const nextPage = page + 1;
    dispatch(getTeachers({ perPage, page: nextPage, filters }));
    setPage(nextPage);
  };

  if (isLoading && teachers.length === 0) {
    return <Loader />;
  }

  return (
    <>
      <title>Teachers</title>

      <section className="section">
        <Container>
          <TeacherFilter filters={filters} onFilterChange={setFilters} />

          {!isLoading && teachers.length === 0 ? (
            <div className={css["no-results"]}>
              <svg className={css["no-results-icon"]}>
                <use href={`${icons}#icon-search`}></use>
              </svg>
              <h3 className={css["no-results-title"]}>No teachers found</h3>
              <p className={css["no-results-text"]}>
                We couldn't find any teachers matching your search criteria. Try
                adjusting your filters to find what you're looking for.
              </p>
            </div>
          ) : (
            <>
              <TeachersList
                teachers={teachers}
                selectedLevels={filters.level}
              />

              {hasMore && (
                <Button
                  type="button"
                  onClick={handleLoadMore}
                  disabled={isLoading}
                  isPaginationBtn={true}
                >
                  Load More
                </Button>
              )}
            </>
          )}
        </Container>
      </section>
    </>
  );
};

export default TeachersPage;
