import { Filters } from "../../redux/teachers/teachers.types";

export type TeacherFilterProps = {
  filters: Filters;
  onFilterChange: (filters: Filters) => void;
};
