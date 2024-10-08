import { createContext, ReactNode, useState } from "react";

export enum Fields {
  AverageScore = "averageScore",
  WorkCompleted = "workCompleted",
  StudentName = "studentName",
  Grade = "grade",
}

export type SortDropdownContextType = {
  whatToSort?: Fields.AverageScore | Fields.StudentName | Fields.WorkCompleted;
  howToSort?: "ascending" | "descending";
  handleSortOption?: (
    whatToSort: Fields.AverageScore | Fields.StudentName | Fields.WorkCompleted,
    howToSort: "ascending" | "descending"
  ) => void;
};
type SortDropdownProviderProps = {
  children: ReactNode;
};

export const SortDropdownContext =
  createContext<SortDropdownContextType | null>({
    whatToSort: Fields.StudentName,
    howToSort: "ascending",
  });

const SortDropdownProvider = ({ children }: SortDropdownProviderProps) => {
  const [sortOptions, setSortOptions] = useState<SortDropdownContextType>({
    whatToSort: Fields.StudentName,
    howToSort: "ascending",
    handleSortOption: (whatToSort, howToSort) => {
      setSortOptions((prevState) => ({
        ...prevState,
        howToSort: howToSort,
        whatToSort: whatToSort,
      }));
    },
  });
  console.log(sortOptions.whatToSort);

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
