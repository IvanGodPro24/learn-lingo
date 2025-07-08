import { StylesConfig, SingleValue, MultiValue } from "react-select";
import {
  Items,
  PriceOptions,
  RatingOptions,
} from "../../constants/constants.types";

export type OptionType = Items | RatingOptions | PriceOptions;

export type TeacherSelectProps = {
  label: string;
  options: OptionType[];
  styles: StylesConfig<OptionType>;
  placeholder: string;
  isMulti?: boolean;
  onChange: (
    selectedOption: MultiValue<OptionType> | SingleValue<OptionType> | null
  ) => void;
  value: string[] | string | number | [number, number] | null;
};
