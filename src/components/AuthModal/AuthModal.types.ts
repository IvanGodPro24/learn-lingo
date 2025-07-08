export type AuthModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  text: string;
  btn: string;
  isRegisterModal?: boolean;
};

export type LoginSubmit = {
  email: string;
  password: string;
};

export type SignUpSubmit = {
  username: string;
  email: string;
  password: string;
};

export type AuthFormData = {
  username?: string;
  email: string;
  password: string;
};
