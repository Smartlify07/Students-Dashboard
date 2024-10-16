import { useContext } from "react";
import { SortModalContext } from "../context/SortModalContext";

export const useModalContext = () => {
  const { isOpen, onToggle } = useContext(SortModalContext);
  console.log(isOpen);
  return { isOpen, onToggle };
};
