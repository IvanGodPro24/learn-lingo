export type Teacher = {
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
};

export type Review = {
  reviewer_name: string;
  reviewer_rating: number;
  comment: string;
};

export type PaginatedTeachers = {
  teachers: Teacher[];
  hasMore: boolean;
  page: number;
};

export type TeachersArg = {
  page?: number;
  perPage: number;
  filters?: Filters;
};

export type Filters = {
  name: string;
  language: string | string[] | [];
  level: string | string[] | [];
  rating: number | null;
  price: [number, number] | null;
};

export type TeacherData = {
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
};

export type FirebaseTeachersData = {
  [key: string]: TeacherData;
};

export type TeacherState = {
  items: Teacher[];
  favourites: Teacher[];
  isLoading: boolean;
  error: string | null;
  hasMore: boolean;
  page: number;
};
