export type BookModalProps = {
  isOpen: boolean;
  onClose: () => void;
  teacher: string;
  avatar: string;
};

export type BookModalSubmit = {
  fullname: string;
};
