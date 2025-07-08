import { Items } from "../../constants/constants.types";

export type RadioGroupProps = {
  name: string;
  items: Items[];
  value: string;
  onChange: (value: string) => void;
};
