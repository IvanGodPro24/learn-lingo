import css from "./RadioGroup.module.css";

const RadioGroup = ({ name, items, value, onChange }) => {
  return (
    <div className={css.container}>
      {items.map((item) => (
        <label
          htmlFor={name + item.value}
          key={item.value}
          className={css.label}
        >
          <input
            type="radio"
            name={name}
            className={"visually-hidden"}
            value={item.value}
            id={name + item.value}
            checked={value === item.value}
            onChange={(e) => onChange(e.target.value)}
          />
          <div className={css["custom-radio"]}></div>

          {item.label}
        </label>
      ))}
    </div>
  );
};

export default RadioGroup;
