export type ButtonProps = {
  children: React.ReactNode;
  to?: string;
  isLink?: boolean;
  disabled?: boolean;
  isPaginationBtn?: boolean;
  onClick?: React.MouseEventHandler<HTMLElement>;
  type?: "button" | "submit" | "reset";
};
