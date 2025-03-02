import { useState } from "react";

type ReturnValues = {
  isOpen: boolean;
  toggle: () => void;
  open: () => void;
  close: () => void;
};

export const useToggle = (defaultValue?: boolean): ReturnValues => {
  const [isOpen, setIsOpen] = useState(defaultValue ?? false);

  const toggle = () => setIsOpen(!isOpen);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return { isOpen, toggle, open, close };
};
