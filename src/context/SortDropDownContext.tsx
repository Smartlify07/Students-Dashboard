import { createContext, ReactNode, useState } from "react";

export enum Fields {
  AverageScore = "averageScore",
  WorkCompleted = "workCompleted",
  StudentName = "studentName",
  Grade = "grade",
}

export type SortDropdownContextType = {
  whatToSort?: Fields.AverageScore | Fields.StudentName | Fields.WorkCompleted;
  howToSort?: {
    averageScore?: "ascending" | "descending";
    workCompleted?: "ascending" | "descending";
    studentName?: "ascending" | "descending";
    grade?: "ascending" | "descending";
  };

  handleSortOption?: (
    whatToSort: Fields.AverageScore | Fields.StudentName | Fields.WorkCompleted,
    howToSort: {
      averageScore?: "ascending" | "descending";
      workCompleted?: "ascending" | "descending";
      studentName?: "ascending" | "descending";
      grade?: "ascending" | "descending";
    }
  ) => void;
};
type SortDropdownProviderProps = {
  children: ReactNode;
};

export const SortDropdownContext =
  createContext<SortDropdownContextType | null>({
    whatToSort: Fields.StudentName,
    howToSort: {
      averageScore: "ascending",
      studentName: "ascending",
      grade: "ascending",
      workCompleted: "ascending",
    },
  });

const SortDropdownProvider = ({ children }: SortDropdownProviderProps) => {
  const [sortOptions, setSortOptions] = useState<SortDropdownContextType>({
    whatToSort: Fields.WorkCompleted,
    howToSort: {
      workCompleted: "ascending",
    },
    handleSortOption: (whatToSort, howToSort) => {
      setSortOptions((prevState) => ({
        ...prevState,
        howToSort: {
          ...prevState.howToSort,
          [whatToSort]: howToSort[whatToSort],
        },
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
