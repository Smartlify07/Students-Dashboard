import { useContext } from "react";
import {
  SortDropdownContext,
  SortDropdownContextType,
} from "../context/SortDropDownContext";

export const useSortDropDownContext = () => {
  const { whatToSort, howToSort, handleSortOption } = useContext(
    SortDropdownContext
  ) as SortDropdownContextType;
  return { howToSort, whatToSort, handleSortOption };
};
