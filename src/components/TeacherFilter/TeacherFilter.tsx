import css from "./TeacherFilter.module.css";
import icons from "../../img/icons.svg";
import TeacherSelect from "../TeacherSelect/TeacherSelect";
import { MultiValue, SingleValue, StylesConfig } from "react-select";
import { useId } from "react";
import { useMemo } from "react";
import {
  languageOptions,
  levelsOptions,
  priceOptions,
  ratingOptions,
} from "../../constants/constants";
import { TeacherFilterProps } from "./TeacherFilter.types";
import { Filters } from "../../redux/teachers/teachers.types";
import { OptionType } from "../TeacherSelect/TeacherSelect.types";

const customStyles: StylesConfig<OptionType> = {
  control: (provided, state) => ({
    ...provided,
    minHeight: "48px",
    borderRadius: "14px",
    cursor: "pointer",
    border: state.isFocused
      ? "1px solid var(--accent)"
      : "1px solid transparent",
    boxShadow: state.isFocused ? "0 0 0 1px var(--accent)" : "none",
    "&:hover": {
      borderColor: "var(--accent)",
    },
  }),

  menuList: (provided) => ({
    ...provided,
    maxHeight: "200px",
    overflowY: "auto",
    "&::-webkit-scrollbar": {
      width: "6px",
    },
    "&::-webkit-scrollbar-thumb": {
      background: "var(--accent)",
      borderRadius: "3px",
    },
  }),

  menu: (provided) => ({
    ...provided,
    borderRadius: "12px",
    maxWidth: "221px",
    padding: "14px 18px",
  }),

  valueContainer: (provided) => ({
    ...provided,
    display: "flex",
    gap: "5px",
    maxHeight: "70px",
    overflowY: "auto",
    padding: "5px 18px",
  }),

  option: (provided, state) => ({
    ...provided,
    borderRadius: "12px",
    cursor: "pointer",
    marginBottom: "4px",
    backgroundColor: state.isSelected ? "var(--accent-light)" : "white",
    color: state.isSelected ? "black" : "rgba(18, 20, 23, 0.2)",
    "&:hover": {
      backgroundColor: "var(--accent-light)",
      color: "black",
    },
    "&:last-child": {
      marginBottom: 0,
    },
  }),

  multiValue: (provided) => ({
    ...provided,
    backgroundColor: "var(--accent)",
    borderRadius: "8px",
    padding: "4px 8px",
    margin: 0,
  }),

  multiValueLabel: (provided) => ({
    ...provided,
    fontSize: "14px",
    fontWeight: "500",
    padding: 0,
  }),
};

const TeacherFilter = ({ filters, onFilterChange }: TeacherFilterProps) => {
  const nameId = useId();

  const handleFilterChange =
    (field: keyof Filters) =>
    (
      selectedOption: MultiValue<OptionType> | SingleValue<OptionType> | null
    ) => {
      const newFilters = {
        ...filters,
        [field]: selectedOption
          ? Array.isArray(selectedOption)
            ? selectedOption.map((opt) => opt.value)
            : (selectedOption as OptionType).value
          : null,
      };
      onFilterChange(newFilters);
    };

  const isAnyFilterActive = useMemo(() => {
    return (
      filters.name.trim() !== "" ||
      filters.language.length > 0 ||
      filters.level.length > 0 ||
      filters.rating !== null ||
      filters.price !== null
    );
  }, [filters]);

  return (
    <div className={css.container}>
      <div className={css["select-container"]}>
        <label htmlFor={nameId} className="label">
          Name
        </label>
        <input
          id={nameId}
          type="text"
          placeholder="Enter name"
          className={css.input}
          value={filters.name}
          onChange={(e) => onFilterChange({ ...filters, name: e.target.value })}
        />
      </div>

      <div className={css["select-container"]}>
        <TeacherSelect
          label="Languages"
          options={languageOptions}
          styles={customStyles}
          placeholder="Select language"
          isMulti={true}
          value={filters.language}
          onChange={handleFilterChange("language")}
        />
      </div>

      <div className={css["select-container"]}>
        <TeacherSelect
          label="Level of knowledge"
          options={levelsOptions}
          styles={customStyles}
          placeholder="Select level"
          isMulti={true}
          value={filters.level}
          onChange={handleFilterChange("level")}
        />
      </div>

      <div className={css["select-container"]}>
        <TeacherSelect
          label="Rating"
          options={ratingOptions}
          styles={customStyles}
          placeholder="Select rating"
          value={filters.rating}
          onChange={handleFilterChange("rating")}
        />
      </div>

      <div className={css["select-container"]}>
        <TeacherSelect
          label="Price"
          options={priceOptions}
          styles={customStyles}
          placeholder="Select price"
          value={filters.price}
          onChange={handleFilterChange("price")}
        />
      </div>

      {isAnyFilterActive && (
        <button
          type="button"
          className={css.reset}
          onClick={() =>
            onFilterChange({
              name: "",
              language: [],
              level: [],
              rating: null,
              price: null,
            })
          }
        >
          <svg width="30" height="30">
            <use href={`${icons}#icon-reset-filter`}></use>
          </svg>
        </button>
      )}
    </div>
  );
};

export default TeacherFilter;
