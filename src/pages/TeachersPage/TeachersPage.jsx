import { useDispatch, useSelector } from "react-redux";
import {
  selectIsLoading,
  selectTeachers,
} from "../../redux/teachers/selectors";
import { useEffect } from "react";
import { getTeachers } from "../../redux/teachers/operations";
import Loader from "../../components/Loader/Loader";
import TeachersList from "../../components/TeachersList/TeachersList";
import css from "./TeachersPage.module.css";

const TeachersPage = () => {
  const dispatch = useDispatch();
  const teachers = useSelector(selectTeachers);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(getTeachers());
  }, [dispatch]);

  if (isLoading) return <Loader />;

  return (
    <section className={css.section}>
      <TeachersList teachers={teachers} />
    </section>
  );
};

export default TeachersPage;
