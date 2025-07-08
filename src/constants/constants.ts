import macYellow from "../img/mac-yellow.png";
import macBlue from "../img/mac-blue.png";
import macRed from "../img/mac-red.png";
import macGreen from "../img/mac-green.png";
import macOrange from "../img/mac-orange.png";
import {
  Items,
  MacImage,
  PriceOptions,
  RatingOptions,
} from "./constants.types";

export const items: Items[] = [
  {
    value: "Career and business",
    label: "Career and business",
  },
  {
    value: "Lesson for kids",
    label: "Lesson for kids",
  },
  {
    value: "Living abroad",
    label: "Living abroad",
  },
  {
    value: "Exams and coursework",
    label: "Exams and coursework",
  },
  {
    value: "Culture, travel or hobby",
    label: "Culture, travel or hobby",
  },
];

export const themes: string[] = [
  "theme-yellow",
  "theme-green",
  "theme-blue",
  "theme-red",
  "theme-orange",
];

export const macImages: MacImage = {
  "theme-yellow": macYellow,
  "theme-blue": macBlue,
  "theme-red": macRed,
  "theme-green": macGreen,
  "theme-orange": macOrange,
};

export const languageOptions: Items[] = [
  { value: "French", label: "French" },
  { value: "English", label: "English" },
  { value: "German", label: "German" },
  { value: "Ukrainian", label: "Ukrainian" },
  { value: "Polish", label: "Polish" },
  { value: "Spanish", label: "Spanish" },
  { value: "Italian", label: "Italian" },
  { value: "Mandarin Chinese", label: "Mandarin Chinese" },
  { value: "Korean", label: "Korean" },
  { value: "Vietnamese", label: "Vietnamese" },
];

export const levelsOptions: Items[] = [
  { value: "A1 Beginner", label: "A1 Beginner" },
  { value: "A2 Elementary", label: "A2 Elementary" },
  { value: "B1 Intermediate", label: "B1 Intermediate" },
  { value: "B2 Upper-Intermediate", label: "B2 Upper-Intermediate" },
  { value: "C1 Advanced", label: "C1 Advanced" },
  { value: "C2 Proficient", label: "C2 Proficient" },
];

export const ratingOptions: RatingOptions[] = [
  { value: 5, label: "5 only" },
  { value: 4, label: "4+ stars" },
  { value: 3, label: "3+ stars" },
  { value: 2, label: "2+ stars" },
  { value: 1, label: "1+ stars" },
];

export const priceOptions: PriceOptions[] = [
  { value: [0, 10], label: "≤ 10 $" },
  { value: [10, 20], label: "10 – 20 $" },
  { value: [20, 30], label: "20 – 30 $" },
  { value: [30, 40], label: "30 – 40 $" },
  { value: [40, 50], label: "40 – 50 $" },
  { value: [50, Infinity], label: "50 $+" },
];
