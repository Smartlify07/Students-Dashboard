import { Fields } from "../context/SortDropDownContext";
import { Student } from "./data";

export const sortFields = (
  whatToSort: Fields.AverageScore | Fields.WorkCompleted | Fields.StudentName,
  data: Student[],
  howToSort?: {
    averageScore?: "ascending" | "descending";
    workCompleted?: "ascending" | "descending";
    studentName?: "ascending" | "descending";
    grade?: "ascending" | "descending";
  }
) => {
  const copiedData = [...data];
  const sortedItems = copiedData

    .sort((a, b) => {
      if (whatToSort === Fields.StudentName) {
        if (howToSort?.[whatToSort] === "ascending") {
          if (
            a.profile[whatToSort].toLowerCase() <
            b.profile[whatToSort].toLowerCase()
          )
            return -1;
          if (
            a.profile[whatToSort].toLowerCase() >
            b.profile[whatToSort].toLowerCase()
          )
            return 1;
        } else if (howToSort?.[whatToSort] === "descending") {
          if (
            a.profile[whatToSort].toLowerCase() <
            b.profile[whatToSort].toLowerCase()
          )
            return 1;
          if (
            a.profile[whatToSort].toLowerCase() >
            b.profile[whatToSort].toLowerCase()
          )
            return -1;
        }
        return 0;
      } else {
        if (howToSort?.[whatToSort] === "ascending")
          return a[whatToSort] - b[whatToSort];
        else return b[whatToSort] - a[whatToSort];
      }
    })
    .map((student) => student);
  return sortedItems;
};
