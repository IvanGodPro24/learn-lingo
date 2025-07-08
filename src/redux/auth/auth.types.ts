import { Review } from "../teachers/teachers.types";

export type LoginCredentials = {
  email: string;
  password: string;
};

export type SignUpCredentials = {
  username: string;
  email: string;
  password: string;
};

export type User = {
  uid: string;
  email: string | null;
  displayName: string | null;
};

export type UserInitState = {
  user: User | null;
  error?: string | null;
  isInitialized: boolean;
};
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
