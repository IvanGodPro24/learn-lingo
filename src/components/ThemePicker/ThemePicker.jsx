import css from "./ThemePicker.module.css";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../../redux/theme/slice";
import { selectTheme } from "../../redux/theme/selectors";
import { themes } from "../../constants/constants";

const ThemePicker = ({ className }) => {
  const dispatch = useDispatch();
  const activeTheme = useSelector(selectTheme);

  const handleThemeChange = (theme) => {
    dispatch(setTheme(theme));
  };

  return (
    <div className={clsx(css["picker-container"], css[className])}>
      {themes.map((theme, index) => (
        <div
          key={index}
          className={clsx(
            css.picker,
            theme === activeTheme && css.active,
            css[theme]
          )}
          onClick={() => handleThemeChange(theme)}
        ></div>
      ))}
    </div>
  );
};

export default ThemePicker;
