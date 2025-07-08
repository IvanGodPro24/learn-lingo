import css from "./ThemePicker.module.css";
import clsx from "clsx";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import { setTheme } from "../../redux/theme/slice";
import { selectTheme } from "../../redux/theme/selectors";
import { themes } from "../../constants/constants";
import { ThemePickerProps } from "./ThemePicker.types";


const ThemePicker = ({ className }: ThemePickerProps) => {
  const dispatch = useAppDispatch();
  const activeTheme = useAppSelector(selectTheme);

  const handleThemeChange = (theme: string) => {
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
