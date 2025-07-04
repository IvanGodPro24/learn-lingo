import css from "./TeacherSelect.module.css";
import icons from "../../img/icons.svg";
import Select from "react-select";
import clsx from "clsx";
import { useId } from "react";

const TeacherSelect = ({
  label,
  options,
  styles,
  placeholder,
  isMulti = false,
  onChange,
  value,
}) => {
  const id = useId();

  return (
    <>
      <label htmlFor={id} className="label">
        {label}
      </label>
      <Select
        name="filter"
        options={options}
        styles={styles}
        isMulti={isMulti}
        isClearable={true}
        isSearchable={false}
        value={
          isMulti
            ? options.filter((option) => value?.includes(option.value))
            : options.find((option) => option.value === value)
        }
        onChange={onChange}
        components={{
          DropdownIndicator: ({ innerProps }) => (
            <div {...innerProps} className={css.container}>
              <svg width="20" height="20" className="chevron">
                <use href={`${icons}#icon-chevron`}></use>
              </svg>
            </div>
          ),
          ClearIndicator: ({ innerProps }) => (
            <div
              {...innerProps}
              className={clsx(css.container, css["close-container"])}
            >
              <svg width="20" height="20" className={css.close}>
                <use href={`${icons}#icon-close`}></use>
              </svg>
            </div>
          ),
          MultiValueRemove: ({ innerProps }) => (
            <div
              {...innerProps}
              className={clsx(css.container, css["close-container"])}
            >
              <svg width="16" height="16" className={clsx(css.close, css.multi)}>
                <use href={`${icons}#icon-close`}></use>
              </svg>
            </div>
          ),
          IndicatorSeparator: null,
        }}
        inputId={id}
        className="main-select"
        classNamePrefix="custom-select"
        placeholder={placeholder}
      />
    </>
  );
};

export default TeacherSelect;
