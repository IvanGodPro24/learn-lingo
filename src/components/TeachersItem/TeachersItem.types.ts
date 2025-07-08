import { Review } from "../../redux/teachers/teachers.types";

export type TeachersItemProps = {
  id: string;
  name: string;
  surname: string;
  avatar_url: string;
  languages: string[];
  levels: string[];
  conditions: string[];
  experience: string;
  lesson_info: string;
  lessons_done: number;

  price_per_hour: number;
  rating: number;
  reviews: Review[];
  selectedLevels?: string[] | string;
};
