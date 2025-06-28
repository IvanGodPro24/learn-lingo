import TeachersItem from "../TeachersItem/TeachersItem";
import css from "./TeachersList.module.css";

const TeachersList = ({ teachers }) => {
  return (
    <ul>
      {teachers.map(
        ({
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
        }) => (
          <li key={id}>
            <TeachersItem
              name={name}
              surname={surname}
              avatar_url={avatar_url}
              conditions={conditions}
              experience={experience}
              languages={languages}
              lesson_info={lesson_info}
              lessons_done={lessons_done}
              levels={levels}
              price_per_hour={price_per_hour}
              rating={rating}
              reviews={reviews}
            />
          </li>
        )
      )}
    </ul>
  );
};

export default TeachersList;
