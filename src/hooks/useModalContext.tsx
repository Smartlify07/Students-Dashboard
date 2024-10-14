import { useContext } from "react";
import { SortModalContext } from "../context/SortModalContext";

export const useModalContext = () => {
  const { isOpen, onToggle } = useContext(SortModalContext);
  return { isOpen, onToggle };
};
