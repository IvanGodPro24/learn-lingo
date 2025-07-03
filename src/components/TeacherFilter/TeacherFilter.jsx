import css from "./TeacherFilter.module.css";
import TeacherSelect from "../TeacherSelect/TeacherSelect";
import {
  languageOptions,
  levelsOptions,
  priceOptions,
} from "../../constants/constants";

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    minHeight: "48px",
    borderRadius: "14px",
    cursor: "pointer",
    border: state.isFocused
      ? "1px solid var(--yellow)"
      : "1px solid transparent",
    boxShadow: state.isFocused ? "0 0 0 1px var(--yellow)" : "none",
    "&:hover": {
      borderColor: "var(--yellow)",
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
    padding: "0 18px",
  }),

  option: (provided, state) => ({
    ...provided,
    borderRadius: "12px",
    cursor: "pointer",
    marginBottom: "4px",
    backgroundColor: state.isSelected ? "var(--light-yellow)" : "white",
    color: state.isSelected ? "black" : "rgba(18, 20, 23, 0.2)",
    "&:hover": {
      backgroundColor: "var(--light-yellow)",
      color: "black",
    },
    "&:last-child": {
      marginBottom: 0,
    },
  }),
};

const TeacherFilter = ({ filters, onFilterChange }) => {
  const handleFilterChange = (field) => (selectedOption) => {
    const newFilters = {
      ...filters,
      [field]: selectedOption ? selectedOption.value : null,
    };
    onFilterChange(newFilters);
  };

  return (
    <div className={css.container}>
      <div className={css["select-container"]}>
        <TeacherSelect
          label="Languages"
          options={languageOptions}
          styles={customStyles}
          placeholder="Select language"
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
          value={filters.level}
          onChange={handleFilterChange("level")}
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
    </div>
  );
};

export default TeacherFilter;
