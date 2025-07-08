import { Teacher } from "../../redux/teachers/teachers.types";

export type TeachersListProps = {
  teachers: Teacher[];
  selectedLevels?: string[] | string;
};
