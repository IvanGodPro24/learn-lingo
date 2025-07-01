import { useDispatch, useSelector } from "react-redux";
import {
  selectHasMore,
  selectIsLoading,
  selectLastKey,
  selectTeachers,
} from "../../redux/teachers/selectors";
import { useEffect } from "react";
import { getTeachers } from "../../redux/teachers/operations";
import Loader from "../../components/Loader/Loader";
import TeachersList from "../../components/TeachersList/TeachersList";
import Container from "../../components/Container/Container";
import Button from "../../components/Button/Button";
import { resetTeachers } from "../../redux/teachers/slice";

const TeachersPage = () => {
  const dispatch = useDispatch();
  const teachers = useSelector(selectTeachers);
  const isLoading = useSelector(selectIsLoading);
  const hasMore = useSelector(selectHasMore);
  const lastKey = useSelector(selectLastKey);

  const perPage = 4;

  useEffect(() => {
    dispatch(resetTeachers());
    dispatch(getTeachers({ perPage }));
  }, [dispatch, perPage]);

  const handleLoadMore = () => {
    if (!isLoading && hasMore && lastKey) {
      dispatch(
        getTeachers({
          perPage,
          lastKey,
          isLoadMore: true,
        })
      );
    }
  };

  if (isLoading && teachers.length === 0) {
    return <Loader />;
  }

  return (
    <section className="section">
      <Container>
        <TeachersList teachers={teachers} />

        {hasMore && (
          <Button
            type="button"
            onClick={handleLoadMore}
            disabled={isLoading}
            isPaginationBtn={true}
          >
            {isLoading ? "Loading..." : "Load More"}
          </Button>
        )}
      </Container>
    </section>
  );
};

export default TeachersPage;
