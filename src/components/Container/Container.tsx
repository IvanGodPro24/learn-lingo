import css from "./Container.module.css";
import { ContainerProps } from "./Container.types";

const Container = ({ children }: ContainerProps) => {
  return <div className={css.container}>{children}</div>;
};

export default Container;
