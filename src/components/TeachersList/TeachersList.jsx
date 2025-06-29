import TeachersItem from "../TeachersItem/TeachersItem";
import css from "./TeachersList.module.css";

const TeachersList = ({ teachers }) => {
  return (
    <ul className={css.list}>
      {teachers.map((teacher) => (
        <li key={teacher.id} className={css.item}>
          <TeachersItem {...teacher} />
        </li>
      ))}
    </ul>
  );
};

export default TeachersList;
