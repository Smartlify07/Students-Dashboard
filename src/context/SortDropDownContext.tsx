import { createContext, ReactNode, useState } from "react";

export enum Fields {
  AverageScore = "averageScore",
  WorkCompleted = "workCompleted",
  StudentName = "studentName",
  Grade = "grade",
}

export type SortDropdownContextType = {
  whatToSort?: Fields;
  howToSort?: "ascending" | "descending" | null;
  handleSortOption?: (
    whatToSort: Fields,
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
    whatToSort: Fields.StudentName,
    howToSort: null,
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
