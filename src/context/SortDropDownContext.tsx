import { createContext, ReactNode, useState } from "react";

export type SortDropdownContextType = {
  whatToSort?: "averageScore" | "workCompleted" | "studentName" | null;
  howToSort?: "ascending" | "descending" | null;
  handleSortOption: (
    whatToSort: "averageScore" | "workCompleted" | "studentName" | null,
    howToSort: "ascending" | "descending" | null
  ) => void;
};
type SortDropdownProviderProps = {
  children: ReactNode;
};

export const SortDropdownContext = createContext<
  SortDropdownContextType | undefined
>(undefined);

const SortDropdownProvider = ({ children }: SortDropdownProviderProps) => {
  const [sortOptions, setSortOptions] = useState<SortDropdownContextType>({
    whatToSort: null,
    howToSort: null,
    handleSortOption: (whatToSort, howToSort) => {
      setSortOptions((prevState) => ({
        ...prevState,
        howToSort: howToSort,
        whatToSort: whatToSort,
      }));
    },
  });

  return (
    <SortDropdownContext.Provider
      value={{
        whatToSort: sortOptions.whatToSort,
        howToSort: sortOptions.howToSort,
        handleSortOption: sortOptions.handleSortOption,
      }}
    >
      {children}
    </SortDropdownContext.Provider>
  );
};
export default SortDropdownProvider;
