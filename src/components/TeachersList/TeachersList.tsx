import TeachersItem from "../TeachersItem/TeachersItem";
import css from "./TeachersList.module.css";
import { TeachersListProps } from "./TeachersList.types";

const TeachersList = ({ teachers, selectedLevels }: TeachersListProps) => {
  return (
    <ul className={css.list}>
      {teachers.map((teacher) => (
        <li key={teacher.id} className={css.item}>
          <TeachersItem {...teacher} selectedLevels={selectedLevels} />
        </li>
      ))}
    </ul>
  );
};

export default TeachersList;
